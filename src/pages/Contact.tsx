import ContactForm from "../components/ContactForm";
import ContactSuccess from "../components/ContactSuccess";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-5xl font-bold mb-10">Contact</h1>
        {submitted ? (
          <ContactSuccess />
        ) : (
          <ContactForm onSuccess={() => setSubmitted(true)} />
        )}
      </div>
    </main>
  );
}
