// FavoriteAlbums.tsx

import AlbumCard from './AlbumCard';

function FavoriteAlbums( { albums }: any) {
    return (
        <div className="bg-zinc-800 hover:bg-zinc-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-3xl font-bold mb-6">Favorite Albums:</h2>

            {albums.map((album: any) => (
                <AlbumCard
                    key={album.album}
                    artist={album.artist}
                    album={album.album}
                />
            ))}

        </div>
    );
}

export default FavoriteAlbums;