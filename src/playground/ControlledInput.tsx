import { useState } from "react";

export default function ControlledInput() {
  const [text, setText] = useState("");

  console.log("Render:", text);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
    console.log("Beide kennen:", event.target.value);
  }

  return (
    <div className="rounded-xl bg-zinc-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">Controlled Input</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Tippe etwas..."
        className="w-full rounded bg-zinc-700 p-2"
      />

      <button
        onClick={() => {
          setText("xxx");
          console.log("Text:", text);
        }}
      >
        Clear
      </button>

      <p>{text}</p>

      <p className="mt-4">
        React-State:
        <span className="font-bold"> {text}</span>
      </p>
    </div>
  );
}
