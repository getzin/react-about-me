import { useParams } from "react-router-dom";

function AlbumDetail({ albums }: any) {

    const { albumId } = useParams();

    const album = albums.find((album: any) => album.id === albumId);

    if (!album) {
        return <h1>Album not found</h1>;
    }

    return (
        <div>
            <h1>{album?.album}</h1>
            <h2>{album?.artist}</h2>
            <p>{album?.year}</p>
        </div>
    );
}

export default AlbumDetail;