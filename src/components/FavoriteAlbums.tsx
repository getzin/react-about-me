// FavoriteAlbums.tsx

import AlbumCard from './AlbumCard';

function FavoriteAlbums( { albums }: any) {
    return (
        <>
            <h2>Favorite Albums:</h2>

            <AlbumCard
                artist={albums[0].artist}
                album={albums[0].album}
            />
            <AlbumCard
                artist={albums[1].artist}
                album={albums[1].album}
            />
            <AlbumCard
                artist={albums[2].artist}
                album={albums[2].album}
            />
        </>
    );
}

export default FavoriteAlbums;