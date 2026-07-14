import PlaygroundCard from "./PlaygroundCard";

export default function EventsExample() {
  function handleClick() {
    console.log(new Date().toLocaleTimeString());
    console.log("Button clicked", Date.now());
  }

  return (
    <PlaygroundCard title="Events" concepts="onClick • Event Handler">
      <button
        onClick={handleClick}
        className="rounded-lg bg-cyan-600 px-6 py-3 text-white transition hover:bg-cyan-500"
      >
        TEST BUTTON
      </button>
    </PlaygroundCard>
  );
}
