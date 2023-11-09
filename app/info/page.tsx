

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

      <div className="flex justify-center space-x-12 m-4">
      <div className="bg-ligth_purple w-12 h-12 flex items-center justify-center rounded cursor-pointer"><a href="http://localhost:3000/info#:~:text=4-,Kveldens%20program,-19.00%20%2D%20%C3%85pningstale"></a>Kveldens Program</div>
        <div className="bg-ligth_purple w-12 h-12 flex items-center justify-center rounded cursor-pointer"><a href="http://localhost:3000/info#:~:text=23.30%20%2D%20R%C3%A6vkrokturnering-,Hvor%20og%20n%C3%A5r%3F,-nytt%C3%A5rskalaset%20blir%20arrangert"></a>Hvor og når?</div>
        <div className="bg-ligth_purple w-12 h-12 flex items-center justify-center rounded cursor-pointer"><a href="http://localhost:3000/info#:~:text=Informasjon%20om%20drikke%20og%20snacks%20servering"></a> Informasjon om drikke og snacks</div>
        <div className="bg-ligth_purple w-12 h-12 flex items-center justify-center rounded cursor-pointer">4</div>
    </div>
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
      <p className="text-xl">Festen/dørene vil starte/åpne klokka 19.00 </p>

      <h3>Informasjon om drikke og snacks servering</h3>
    </main>


  );
}
