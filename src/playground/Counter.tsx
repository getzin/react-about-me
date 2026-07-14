import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("Render:", count);

  function increment() {
    console.log("Vor setCount:", count);
    setCount(count + 1);
    console.log("Nach setCount:", count);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
