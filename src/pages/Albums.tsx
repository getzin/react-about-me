import { Link } from "react-router-dom";

import AlbumCard from "../components/AlbumCard";

function Albums({ albums }: any) {
    return (
        <div>

            <Link to="/">
                ← Back to Home
            </Link>
            <h1>Albums</h1>

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
    );
}

export default Albums;