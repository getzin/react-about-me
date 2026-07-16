// src/pages/Albums.tsx

import { Link } from "react-router-dom";

import AlbumCard from "../components/AlbumCard";

import { useState } from "react";

import type { Album } from "../types/album";

type AlbumsProps = {
  albums: Album[];
};

function Albums({ albums }: AlbumsProps) {
  const [layout, setLayout] = useState("list");
  const [search, setSearch] = useState("");

  const filteredAlbums = albums.filter((album) => {
    const searchTerm = search.toLowerCase();

    return (
      album.title.toLowerCase().includes(searchTerm) ||
      album.artist.toLowerCase().includes(searchTerm)
    );
  });

  const hasAlbums = filteredAlbums.length > 0;

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
          <input
            type="text"
            placeholder="Search albums..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="mt-4 w-full rounded border border-zinc-600 bg-zinc-800 px-4 py-2 text-white outline-none focus:border-blue-500"
          />
        </div>

        {hasAlbums ? (
          <div
            className={
              layout === "grid" ? "grid grid-cols-2 gap-6" : "space-y-6"
            }
          >
            {filteredAlbums.map((album) => (
              <AlbumCard key={album.id} {...album} />
            ))}
          </div>
        ) : (
          <p className="text-zinc-400">🔍 No albums found.</p>
        )}
      </div>
    </div>
  );
}

export default Albums;
