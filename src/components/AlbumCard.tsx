// AlbumCard.tsx

function AlbumCard({ artist, album }: any) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">{artist}</h2>
            <p className="text-lg text-zinc-400">{album}</p>
        </div>
    );
}

export default AlbumCard;