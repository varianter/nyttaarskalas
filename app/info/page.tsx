import Image from "next/image";

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
        <div className="bg-ligth_purple w-12 h-12 flex items-center justify-center rounded cursor-pointer">1</div>
        <div className="bg-ligth_purple w-12 h-12 flex items-center justify-center rounded cursor-pointer">2</div>
        <div className="bg-ligth_purple w-12 h-12 flex items-center justify-center rounded cursor-pointer">3</div>
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
      <h3 className="mb-2 text-5xl font-semibold  pt-80 pb-10">Hvor og når?</h3>
      <p>nyttårskalaset blir arrangert på dokkhuset, på solsiden <br></br>
      Adresse: Dokkparken 4, 7042 Trondheim <br></br>
      Festen/dørene vil starte/åpne klokka 19.00</p>
     
     
      <h3 className="pb-5 pt-80">Informasjon om drikke og snacks servering</h3>
      <p>dette er informasjonen om drikke og snacks dette er informasjonen om drikke <br></br>
      dette er informasjonen om drikke og snacks dette er informasjonen om drikke og snacks</p>

      <h3 className="pt-80">Kleskode</h3>
      <p>Dette er kleskoden Dette er kleskoden Dette er kleskoden <br></br>
      Dette er kleskoden Dette er kleskoden Dette er kleskoden Dette er kleskoden Dette er kleskoden <br></br>
      Dette er kleskoden Dette er kleskoden Dette er kleskoden Dette er kleskoden</p>

      <h3 className="pt-5">Fjorårets kalas</h3>
      <p></p>
    <div className="flex justify-around" space-x-5>
      <Image src={"./blobs/blobb1.svg"} alt={""} width={350} height={350}/>
     <Image src={"./blobs/blobb2.svg"} alt={""} width={300} height={300}/>
     <Image src={"./blobs/blobb3.svg"} alt={""} width={300} height={300}/>
    </div>
    <div className="flex justify-around space-x-5">
     <Image src={"./blobs/blobb4.svg"} alt={""} width={300} height={300}/>
     <Image src={"./blobs/blobb5.svg"} alt={""} width={300} height={300}/>
     <Image src={"./blobs/blobb6.svg"} alt={""} width={300} height={300}/>
     <Image src={"./blobs/blobb13.svg"} alt={""} width={300} height={300}/>

    </div>
    <div className="flex justify-around space-x-5">
     <Image src={"./blobs/blobb7.svg"} alt={""} width={400} height={400}/>
     <Image src={"./blobs/blobb8.svg"} alt={""} width={400} height={400}/>
     <Image src={"./blobs/blobb9.svg"} alt={""} width={400} height={400}/>
    </div>
    <div className="flex justify-around space-x-5">
     <Image src={"./blobs/blobb10.svg"} alt={""} width={400} height={400}/>
     <Image src={"./blobs/blobb11.svg"} alt={""} width={400} height={400}/>
     <Image src={"./blobs/blobb12.svg"} alt={""} width={400} height={400}/>
     
    </div>
 
    </main>
  );
}
