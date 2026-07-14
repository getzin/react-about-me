import { useRef, useState } from "react";
import PlaygroundCard from "./PlaygroundCard";

export default function FocusExample() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const lastNameRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (lastName === "") {
      lastNameRef.current?.focus();
      return;
    }

    console.log(lastName);
  }

  return (
    <PlaygroundCard
      title="Focus Example"
      concepts="useRef • focus() • FormEvent"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Vorname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full rounded-lg bg-zinc-700 p-3 text-white placeholder:text-zinc-500"
        />

        <input
          type="text"
          placeholder="Nachname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          ref={lastNameRef}
          className="w-full rounded-lg bg-zinc-700 p-3 text-white placeholder:text-zinc-500"
        />

        <button className="rounded-lg bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-500">
          Submit
        </button>
      </form>
    </PlaygroundCard>
  );
}
