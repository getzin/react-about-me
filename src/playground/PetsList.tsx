import PlaygroundCard from "./PlaygroundCard";

export default function PetsList() {
  const pets = ["Katze", "Hund", "Axolotl", "Pinguin", "Fuchs", "Otter"];

  return (
    <PlaygroundCard title="map()" concepts="Arrays • map() • key">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {pets.map((pet, index) => (
          <div key={index} className="rounded-lg bg-zinc-700 p-3 text-center">
            <p className="font-semibold text-white">{pet}</p>
          </div>
        ))}
      </div>
    </PlaygroundCard>
  );
}
