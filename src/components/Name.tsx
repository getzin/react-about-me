// src/components/Name.tsx

type NameProps = {
  name: string;
};

function Name({ name }: NameProps) {
  return <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>;
}

export default Name;
