// src/App.tsx

import data from "./data/profile.json";

import AboutMe from "./pages/AboutMe";

import Contact from "./pages/Contact";

import Albums from "./pages/Albums";

import AlbumDetail from "./pages/AlbumDetail";

import Navbar from "./components/Navbar";

import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

import Playground from "./playground/Playground";

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
        <Route path="/playground" element={<Playground />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
