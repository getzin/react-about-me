import { useState } from "react";

export default function FormExample() {
  const [name, setName] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Name:", name);

    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        //value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />

      <button>Submit</button>
    </form>
  );
}
