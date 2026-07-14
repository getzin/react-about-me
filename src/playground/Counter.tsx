import { useState } from "react";
import PlaygroundCard from "./PlaygroundCard";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("Render:", count);

  function increment() {
    console.log("Vor setCount:", count);
    setCount(count + 1);
    console.log("Nach setCount:", count);
  }

  return (
    <PlaygroundCard
      title="Counter"
      concepts="useState • onClick • Re-Rendering"
    >
      <p className="text-lg text-white">
        Count: <span className="font-bold text-cyan-400">{count}</span>
      </p>

      <button
        onClick={increment}
        className="rounded-lg bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-500"
      >
        Increment
      </button>
    </PlaygroundCard>
  );
}
