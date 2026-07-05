// FavoriteAlbums.tsx

import AlbumCard from './AlbumCard';

function FavoriteAlbums( { albums }: any) {
    return (
        <>
            <h2>Favorite Albums:</h2>

            {albums.map((album: any) => (
                <AlbumCard
                    key={album.album}
                    artist={album.artist}
                    album={album.album}
                />
            ))}

        </>
    );
}

export default FavoriteAlbums;