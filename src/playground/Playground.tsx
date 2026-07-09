import PetsList from "./PetsList";

import SpreadExample from "./SpreadExample";

export default function Playground() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">React Playground</h1>
      <p>Hier teste ich neue React-Konzepte.</p>

      <PetsList />
      <SpreadExample />
    </main>
  );
}
