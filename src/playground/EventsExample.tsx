// EventsExample.tsx

export default function EventsExample() {
  function handleClick() {
    console.log(new Date().toLocaleTimeString());
    console.log("Button clicked", Date.now());
  }

  return (
    <div className="rounded-xl bg-zinc-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">Events</h2>

      <button
        onClick={handleClick}
        className="rounded bg-red-600 px-10 py-6 text-3xl"
      >
        TEST BUTTON
      </button>
    </div>
  );
}
