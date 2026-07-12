// src/pages/AlbumDetail.tsx

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import type { Album } from "../types/album";

type AlbumDetailProps = {
  albums: Album[];
};

function AlbumDetail({ albums }: AlbumDetailProps) {
  const { albumId } = useParams();

  const album = albums.find((album) => album.id === albumId);

  if (!album) {
    return <h1>Album not found</h1>;
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link
          to="/albums"
          className="text-zinc-400 hover:text-white transition mb-8 inline-block"
        >
          ← Back to Albums
        </Link>

        <h1 className="text-5xl font-bold">{album.album}</h1>

        <h2 className="text-2xl text-zinc-300 mt-4">{album.artist}</h2>

        <p className="text-zinc-500 mt-6">Released {album.year}</p>
      </div>
    </div>
  );
}

export default AlbumDetail;
