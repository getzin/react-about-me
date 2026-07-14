import { useRef, useState } from "react";

export default function FocusExample() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const lastNameRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(lastNameRef.current);

    if (lastName === "") {
      lastNameRef.current?.focus();
      return;
    }

    console.log(lastName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Vorname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nachname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        ref={lastNameRef}
      />

      <button>Submit</button>
    </form>
  );
}
