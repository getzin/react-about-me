// src/components/Contact.tsx

import ContactLink from "./ContactLink";

function Contact({ contact }: any) {
  return (
    <div className="bg-zinc-800 hover:bg-zinc-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-zinc-400 mb-6">Get in touch with me! :-D</p>

      {contact.map((item: any) => (
        <ContactLink key={item.name} {...item} />
      ))}
    </div>
  );
}

export default Contact;
