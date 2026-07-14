import HobbyCard from "./HobbyCard";
import PlaygroundCard from "./PlaygroundCard";

export default function SpreadExample() {
  const hobby = {
    name: "Fotografie",
    icon: "📷",
    difficulty: "Mittel",
    country: "Deutschland",
  };

  return (
    <PlaygroundCard
      title="Spread Operator"
      concepts="Props • Destructuring • Spread (...)"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-white">
            Variante A (einzeln übergeben)
          </h3>

          <HobbyCard
            name={hobby.name}
            icon={hobby.icon}
            difficulty={hobby.difficulty}
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-white">
            Variante B (Spread Operator)
          </h3>

          <HobbyCard {...hobby} />
        </div>
      </div>
    </PlaygroundCard>
  );
}
