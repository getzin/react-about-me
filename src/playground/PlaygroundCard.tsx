type PlaygroundCardProps = {
  title: string;
  concepts: string;
  children: React.ReactNode;
};

export default function PlaygroundCard({
  title,
  concepts,
  children,
}: PlaygroundCardProps) {
  return (
    <section className="space-y-4 rounded-xl bg-zinc-800 p-6 shadow">
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>

        <p className="text-sm text-zinc-400">{concepts}</p>
      </div>

      <div>{children}</div>
    </section>
  );
}
