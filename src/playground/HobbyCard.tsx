function HobbyCard(props: any) {
  console.log(props);

  const { name, icon, difficulty, country } = props;

  return (
    <div>
      <h2>
        {icon} {name}
      </h2>
      <p>{difficulty}</p>
      <p>{country}</p>
    </div>
  );
}

export default HobbyCard;
