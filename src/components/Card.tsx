export function Card({ name, suit }: { name: string; suit: string }) {
  const img = require(`../assets/${suit}.svg`).default;
  return (
    <div className="h-28 w-20 lg:w-40 lg:h-64 m-2 rounded-md bg-white w-10 p-2 relative">
      <h2 className="text-xl lg:text-2xl">{name}</h2>
      <img
        className="absolute bottom-12 left-2 h-5 lg:h-14 lg:left-4 lg:bottom-36"
        src={img}
        alt={`${suit}`}
      />
      <img
        className="absolute bottom-2 right-2 h-7 lg:h-16 lg:bottom-4"
        src={img}
        alt={`${suit}`}
      />
    </div>
  );
}
