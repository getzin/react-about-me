// AlbumCard.tsx

import { Link } from "react-router-dom";

function AlbumCard({ id, artist, album, year }: any) {
    return (
        <Link to={`/albums/${id}`}>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">{artist}</h2>

                <p className="text-lg text-zinc-400">{album}</p>

                {year && (
                    <p className="text-sm text-zinc-500">{year}</p>
                )}
            </div>
        </Link>
    );
}

export default AlbumCard;