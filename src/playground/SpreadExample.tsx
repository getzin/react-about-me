import HobbyCard from "./HobbyCard";

export default function SpreadExample() {
  const hobby = {
    name: "Fotografie",
    icon: "📷",
    difficulty: "Mittel",
    country: "Deutschland",
  };

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="mb-4 text-2xl font-bold">
          Variante A (einzeln übergeben)
        </h1>

        <HobbyCard
          name={hobby.name}
          icon={hobby.icon}
          difficulty={hobby.difficulty}
        />
      </div>

      <div>
        <h1 className="mb-4 text-2xl font-bold">
          Variante B (Spread Operator)
        </h1>

        <HobbyCard {...hobby} />
      </div>
    </div>
  );
}
