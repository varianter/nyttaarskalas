export default function Program() {
  const program = [
    { activety: "Åpningstale", clock: "19.00" },
    { activety: "Minling", clock: "19.10" },
    { activety: "Dumdum boys", clock: "19.30" },
    { activety: "Gorillaz", clock: "20.30" },
    { activety: "DDE", clock: "21.30" },
    { activety: "Rævkrokturnering", clock: "23.30" },
  ];

  return (
    <main className="flex flex-col items-center">
      <h3 className="mb-2 text-3xl font-semibold  pt-20 pb-10">
        Kveldens program
      </h3>
      {program.map((x) => (
        <div className="text-xl py-2">
          {x.clock} - {x.activety}
        </div>
      ))}
    </main>
  );
}
