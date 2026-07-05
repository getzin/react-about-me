// SkillCard.tsx

function SkillCard({ name, rating }: any) {
    return (
        <>
            <h3>{name}</h3>
            <p>{rating}/5</p>
        </>
    );
}

export default SkillCard;