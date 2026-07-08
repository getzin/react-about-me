// src/components/FavoriteAlbums.tsx

import AlbumCard from "./AlbumCard";

import { Link } from "react-router-dom";

function FavoriteAlbums({ albums }: any) {
  return (
    <div className="bg-zinc-800 hover:bg-zinc-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-3xl font-bold mb-6">Favorite Albums:</h2>

      {albums.slice(0, 3).map((album: any) => (
        <AlbumCard
          key={album.id}
          id={album.id}
          artist={album.artist}
          album={album.album}
        />
      ))}

      <Link to="/albums" className="hover:text-sky-400 transition">
        More Albums →
      </Link>
    </div>
  );
}

export default FavoriteAlbums;
