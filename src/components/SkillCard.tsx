// src/components/SkillCard.tsx

function SkillCard({ name, rating }: any) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white">{name}</h2>
      <p className="text-yellow-400 text-lg">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </p>
    </div>
  );
}

export default SkillCard;
