export default function FormEventsExample() {
  function handleClick() {
    console.log("Button wurde geklickt!");
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log("Formular wurde abgeschickt!");
  }

  return (
    <div className="rounded-xl bg-zinc-800 p-6 space-y-6">
      <h2 className="text-2xl font-bold">Form Events</h2>

      <button onClick={handleClick} className="rounded bg-red-600 px-6 py-3">
        Klick mich
      </button>

      <form onSubmit={handleSubmit}>
        <button type="submit" className="rounded bg-green-600 px-6 py-3">
          Formular absenden
        </button>
      </form>
    </div>
  );
}
