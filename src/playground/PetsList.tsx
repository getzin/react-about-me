export default function PetsList() {
  const pets = ["Katze", "Hund", "Axolotl", "Pinguin", "Fuchs", "Otter"];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {pets.map((pet, index) => (
        <div
          key={index}
          className="rounded-xl bg-zinc-800 p-4 text-center shadow"
        >
          <h2 className="text-lg font-bold text-red-500">{pet}</h2>
        </div>
      ))}
    </div>
  );
}
