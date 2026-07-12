// src/components/ContactLink.tsx

import type { ContactItem } from "../types/contact";

function ContactLink({ name, value }: ContactItem) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white">{name}</h2>

      <a
        href={name === "Email" ? `mailto:${value}` : value}
        className="text-sky-400 hover:text-sky-300 transition"
      >
        {value}
      </a>
    </div>
  );
}

export default ContactLink;
