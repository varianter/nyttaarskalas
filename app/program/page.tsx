export default function Program() {
  const program = [
    { name: "Åpningstale", clock: "19.00" },
    { name: "Minling", clock: "19.10" },
    { name: "Dumdum boys", clock: "19.30" },
    { name: "Gorillaz", clock: "20.30" },
    { name: "DDE", clock: "21.30" },
    { name: "Rævkrokturnering", clock: "23.30" },
  ];

  return (
    <main className="flex flex-col items-center text-white">
      <h3 className="mb-2 text-3xl font-semibold pt-20 pb-10">
        Kveldens program
      </h3>
      {program.map((activety, index) => (
        <div key={index} className="text-xl py-2">
          {activety.clock} - {activety.name}
        </div>
      ))}

    </main>
  );
}
