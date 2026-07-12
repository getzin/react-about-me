// src/components/FavoriteAlbums.tsx

import AlbumCard from "./AlbumCard";

import { Link } from "react-router-dom";

import type { Album } from "../types/album";

type FavoriteAlbumsProps = {
  albums: Album[];
};

function FavoriteAlbums({ albums }: FavoriteAlbumsProps) {
  return (
    <div className="bg-zinc-800 hover:bg-zinc-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-3xl font-bold mb-6">Favorite Albums:</h2>

      {albums.slice(0, 3).map((album) => (
        <AlbumCard key={album.id} {...album} />
      ))}

      <Link to="/albums" className="hover:text-sky-400 transition">
        More Albums →
      </Link>
    </div>
  );
}

export default FavoriteAlbums;
