import { useState } from "react";
import PlaygroundCard from "./PlaygroundCard";

export default function FormExample() {
  const [name, setName] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Name:", name);

    setName("");
  }

  return (
    <PlaygroundCard
      title="Form Example"
      concepts="useState • form • onSubmit • preventDefault"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          className="w-full rounded-lg bg-zinc-700 p-3 text-white placeholder:text-zinc-500"
        />

        <button
          type="submit"
          className="rounded-lg bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-500"
        >
          Submit
        </button>
      </form>
    </PlaygroundCard>
  );
}
