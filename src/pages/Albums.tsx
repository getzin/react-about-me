// src/pages/Albums.tsx

import { Link } from "react-router-dom";

import AlbumCard from "../components/AlbumCard";

import { useState } from "react";

function Albums({ albums }: any) {
  const [layout, setLayout] = useState("list");

  // console.log(layout);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="text-zinc-400 hover:text-white transition">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-10">Favorite Albums</h1>

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setLayout("list")}
            className={`rounded px-4 py-2 transition ${
              layout === "list"
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-zinc-700 hover:bg-zinc-600"
            }`}
          >
            📋 List
          </button>

          <button
            onClick={() => setLayout("grid")}
            className={`rounded px-4 py-2 transition ${
              layout === "grid"
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-zinc-700 hover:bg-zinc-600"
            }`}
          >
            ⬜ Grid
          </button>
        </div>

        <div
          className={layout === "grid" ? "grid grid-cols-2 gap-6" : "space-y-6"}
        >
          {albums.map((album: any) => (
            <AlbumCard key={album.id} {...album} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Albums;
