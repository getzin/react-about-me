export default function UncontrolledInput() {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("Browser kennt:", event.target.value);
  }

  return (
    <div className="rounded-xl bg-zinc-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">Uncontrolled Input</h2>

      <input
        type="text"
        onChange={handleChange}
        placeholder="Tippe etwas..."
        className="w-full rounded bg-zinc-700 p-2"
      />

      <p className="mt-4 text-zinc-400">React speichert den Text nicht.</p>
    </div>
  );
}
