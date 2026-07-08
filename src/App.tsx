// src/App.tsx

import data from "./data/profile.json";

import AboutMe from "./pages/AboutMe";

import Albums from "./pages/Albums";

import AlbumDetail from "./pages/AlbumDetail";

import Navbar from "./components/Navbar";

import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe data={data} />} />
        <Route
          path="/albums"
          element={<Albums albums={data.favoriteAlbums} />}
        />
        <Route
          path="/albums/:albumId"
          element={<AlbumDetail albums={data.favoriteAlbums} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
