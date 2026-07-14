import { useState } from "react";
import PlaygroundCard from "./PlaygroundCard";

export default function FilterExample() {
  const [searchText, setSearchText] = useState("");

  const pets = ["Katze", "Hund", "Otter", "Axolotl", "Pinguin"];

  const filteredPets = pets.filter((pet) =>
    pet.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <PlaygroundCard
      title="Filter Example"
      concepts="filter() • includes() • useState"
    >
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Suche..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full rounded-lg bg-zinc-700 p-3 text-white placeholder:text-zinc-500"
        />

        <div className="space-y-2">
          {filteredPets.map((pet) => (
            <div
              key={pet}
              className="rounded-lg bg-zinc-700 px-3 py-2 text-white"
            >
              {pet}
            </div>
          ))}
        </div>
      </div>
    </PlaygroundCard>
  );
}
