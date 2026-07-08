// ContactLink.tsx

function ContactLink({ name, value }: any) {
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
