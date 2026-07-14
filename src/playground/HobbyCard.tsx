function HobbyCard(props: any) {
  const { name, icon, difficulty, country } = props;

  return (
    <div className="rounded-lg bg-zinc-700 p-4">
      <h3 className="text-lg font-bold text-white">
        {icon} {name}
      </h3>

      <p className="text-zinc-300">
        Schwierigkeit:
        <span className="ml-2 text-white">{difficulty}</span>
      </p>

      <p className="text-zinc-300">
        Land:
        <span className="ml-2 text-white">{country}</span>
      </p>
    </div>
  );
}

export default HobbyCard;
