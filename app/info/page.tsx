
export default function Info() {
  const info = [
    { name: "Åpningstale", clock: "19.00" },
    { name: "Minling", clock: "19.10" },
    { name: "Dumdum boys", clock: "19.30" },
    { name: "Gorillaz", clock: "20.30" },
    { name: "DDE", clock: "21.30" },
    { name: "Rævkrokturnering", clock: "23.30" },
  ];

  return (
    <main className="flex flex-col text-white items-center">
      
      <h1 className="p-20 pb-80 mx-16">Informasjon om kvelden</h1>
      <h3 className="mb-2 text-5xl font-semibold  pt-20 pb-10 text-white">
        Kveldens program
      </h3>
      {info.map((activety, index) => (
        <div key={index} className="text-2xl py-2">
          {activety.clock} - {activety.name}
        </div>
      ))}
      <h3 className="mb-2 text-5xl font-semibold  pt-60 pb-10">Hvor og når?</h3>
      <p className="text-xl">nyttårskalaset blir arrangert på dokkhuset, på solsiden <br></br>
      adresse: Dokkparken 4, 7042 Trondheim</p>
      <p className="text-xl">Festen vil starte klokka 19.00</p>
    </main>
  );
}
