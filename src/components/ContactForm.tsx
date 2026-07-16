import { useState } from "react";

type ContactFormProps = {
  onSuccess: () => void;
};

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      name,
      email,
      message,
    });

    onSuccess();

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form className="flex flex-col gap-6 max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Name</label>

        <input
          className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-white outline-none focus:border-blue-500"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>

        <input
          className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-white outline-none focus:border-blue-500"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Message</label>

        <textarea
          className="rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-2 text-white outline-none focus:border-blue-500"
          rows={6}
          placeholder="Your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>

      <button
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 transition"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
