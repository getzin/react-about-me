import PlaygroundCard from "./PlaygroundCard";

export default function FormEventsExample() {
  function handleClick() {
    console.log("Button wurde geklickt!");
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log("Formular wurde abgeschickt!");
  }

  return (
    <PlaygroundCard
      title="Form Events"
      concepts="onClick • onSubmit • preventDefault"
    >
      <div className="space-y-4">
        <button
          onClick={handleClick}
          className="rounded-lg bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-500"
        >
          Klick mich
        </button>

        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-500"
          >
            Formular absenden
          </button>
        </form>
      </div>
    </PlaygroundCard>
  );
}
