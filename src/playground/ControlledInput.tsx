import { useState } from "react";
import PlaygroundCard from "./PlaygroundCard";

export default function ControlledInput() {
  const [text, setText] = useState("");

  console.log("Render:", text);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
    console.log("Beide kennen:", event.target.value);
  }

  return (
    <PlaygroundCard
      title="Controlled Input"
      concepts="useState • value • onChange"
    >
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Tippe etwas..."
        className="w-full rounded-lg bg-zinc-700 p-3 text-white placeholder:text-zinc-500"
      />

      <button
        onClick={() => {
          setText("xxx");
          console.log("Text:", text);
        }}
        className="mt-4 rounded-lg bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-500"
      >
        Set "xxx"
      </button>

      <p className="mt-4 text-white">
        React-State:
        <span className="font-bold text-cyan-400"> {text}</span>
      </p>
    </PlaygroundCard>
  );
}
