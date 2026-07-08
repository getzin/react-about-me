import { Link } from "react-router-dom";

import AlbumCard from "../components/AlbumCard";

function Albums({ albums }: any) {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="text-zinc-400 hover:text-white transition">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-10">Favorite Albums</h1>

        {albums.map((album: any) => (
          <AlbumCard
            key={album.id}
            id={album.id}
            artist={album.artist}
            album={album.album}
            year={album.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Albums;
