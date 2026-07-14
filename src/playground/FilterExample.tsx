// FilterExample.tsx

import { useState } from "react";

export default function FilterExample() {
  const [searchText, setSearchText] = useState("");

  const pets = ["Katze", "Hund", "Otter", "Axolotl", "Pinguin"];

  const filteredPets = pets.filter((pet) =>
    pet.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="space-y-6 rounded-xl border border-zinc-700 bg-zinc-800ok p-6 shadow-lg">
      <h2 className="text-2xl font-bold">Filter Example</h2>
      <p className="text-sm text-zinc-400">useState • filter() • includes()</p>
      <input
        type="text"
        placeholder="Suche..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full rounded bg-zinc-700 p-2"
      />

      {filteredPets.map((pet) => (
        <div key={pet} className="rounded-md bg-zinc-700 px-3 py-2">
          {pet}
        </div>
      ))}
    </div>
  );
}
