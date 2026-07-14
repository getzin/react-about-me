import PlaygroundCard from "./PlaygroundCard";

export default function UncontrolledInput() {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("Browser kennt:", event.target.value);
  }

  return (
    <PlaygroundCard
      title="Uncontrolled Input"
      concepts="Browser • onChange • kein React-State"
    >
      <input
        type="text"
        onChange={handleChange}
        placeholder="Tippe etwas..."
        className="w-full rounded-lg bg-zinc-700 p-3 text-white placeholder:text-zinc-500"
      />

      <p className="mt-4 text-zinc-300">
        React speichert den Text nicht im State.
      </p>
    </PlaygroundCard>
  );
}
