// LanguageCard.tsx

function LanguageCard({ name, level }: any) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">{name}</h2>
            <p className="text-lg text-zinc-300">{level}</p>
        </div>
    );
}

export default LanguageCard;