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
    <main className="m-16 flex flex-col text-white items-center">
      
      <h1 className="p-20 pb-30 mx-16">Informasjon om kvelden</h1>

      <div className="p-4 bg-dark_purple rounded-xl">
      <h3 className="p-1">Har du spørsmål? <br></br> Kansje du får svar i siden under</h3>
      <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat convallis eros at eleifend. Cras efficitur quam non congue ornare. Integer efficitur ac ex dictum rhoncus. Pellentesque arcu erat, blandit a enim sed, interdum aliquam lacus. Vivamus vitae mauris nisi. Aenean vestibulum sem quis dignissim dignissim. </p>
   </div>

      <div className="flex justify-items-start space-x-6 pt-6">

        <section className="mb-12 mt-8 p-4 bg-dark_purple rounded-xl grid grid-cols-1 gap-4 xxs:grid-cols-2 xs:grid-cols-3 smmd:grid-cols-5">
          <a className="" href="http://localhost:3000/info#:~:text=Kleskode-,Kveldens%20program,-19.00%20%2D%20%C3%85pningstale">
          <p className="text-center">Kveldens program</p> 
          <img className="flex justify-items-center" src={""} alt={"ikoner/microphone-stage.svg"}></img>       
          </a></section>

        <section className="mb-12 mt-8 p-4 bg-dark_purple rounded-xl grid grid-cols-1 gap-4 xxs:grid-cols-2 xs:grid-cols-3 smmd:grid-cols-5">
          <a className="" href="http://localhost:3000/info#:~:text=23.30%20%2D%20R%C3%A6vkrokturnering-,Hvor%20og%20n%C3%A5r%3F,-nytt%C3%A5rskalaset%20blir%20arrangert">
          <p>Hvor og når?</p>
          </a></section>

        <section className="mb-12 mt-8 p-4 bg-dark_purple rounded-xl grid grid-cols-1 gap-4 xxs:grid-cols-2 xs:grid-cols-3 smmd:grid-cols-5">
          <a className="" href="http://localhost:3000/info#:~:text=Informasjon%20om%20drikke%20og%20snacks%20servering">
          <p className="text-center">Drikke og snacks</p>
          </a></section>

        <section className="mb-12 mt-8 p-4 bg-dark_purple rounded-xl grid grid-cols-1 gap-4 xxs:grid-cols-2 xs:grid-cols-3 smmd:grid-cols-5">
          <a className="" href="http://localhost:3000/info#:~:text=drikke%20og%20snacks-,Kleskode,-Dette%20er%20kleskoden">
          <p>Kleskode</p>
          </a></section>

        <section className="mb-12 mt-8 p-4 bg-dark_purple rounded-xl grid grid-cols-1 gap-4 xxs:grid-cols-2 xs:grid-cols-3 smmd:grid-cols-5">
          <a className="" href="http://localhost:3000/info#:~:text=Dette%20er%20kleskoden-,Fjor%C3%A5rets%20kalas">
          <p>Fjorårets kalas</p>
          </a></section>
      </div>



      <h3 className="mb-2 font-semibold pt-20 pb-10">
        Kveldens program
      </h3>
      {info.map((activety, index) => (
        <div key={index} className="py-2 text-xl">
          {activety.clock} - {activety.name}
        </div>
      ))}
      <h3 className="mb-2 font-semibold  pt-60 pb-10">Hvor og når?</h3>
      <p className="p-2">Nyttårskalaset blir arrangert på dokkhuset, på solsiden <br></br>
      Adresse: Dokkparken 4, 7042 Trondheim</p>
      <p className="p-2">Festen/dørene vil starte/åpne klokka 19.00 </p>
      <Image src={"./blobs/dokkhuset.svg"} alt={""} width={400} height={400}/>


      <h3 className="pb-5 pt-80">Informasjon om drikke og snacks servering</h3>
      <p>dette er informasjonen om drikke og snacks dette er informasjonen om drikke <br></br>
      dette er informasjonen om drikke og snacks dette er informasjonen om drikke og snacks</p>

      <h3 className="pt-80">Kleskode</h3>
      <p>Dette er kleskoden Dette er kleskoden Dette er kleskoden <br></br>
      Dette er kleskoden Dette er kleskoden Dette er kleskoden Dette er kleskoden Dette er kleskoden <br></br>
      Dette er kleskoden Dette er kleskoden Dette er kleskoden Dette er kleskoden</p>

      <h3 className="pt-80 pb-20">Fjorårets kalas</h3>
      <p></p>
    <div className="flex justify-around space-x-10 columns: 2;">
      <Image src={"./blobs/blobb1.svg"} alt={""} width={400} height={400}/>
     <Image src={"./blobs/blobb2.svg"} alt={""} width={400} height={400}/>
    </div>
    <div className="flex justify-around space-x-10">
     <Image src={"./blobs/blobb4.svg"} alt={""} width={350} height={350}/>
     <Image src={"./blobs/blobb5.svg"} alt={""} width={350} height={350}/>
     <Image src={"./blobs/blobb13.svg"} alt={""} width={350} height={350}/>

    </div>
    <div className="flex justify-around space-x-10">
     <Image src={"./blobs/blobb7.svg"} alt={""} width={350} height={350}/>
     <Image src={"./blobs/blobb9.svg"} alt={""} width={400} height={400}/>
    </div>
    <div className="flex justify-around space-x-10">
     <Image src={"./blobs/blobb12.svg"} alt={""} width={400} height={400}/>
     <Image src={"./blobs/blobb6.svg"} alt={""} width={350} height={350}/>
     <Image src={"./blobs/blobb3.svg"} alt={""} width={400} height={400}/>
     
    </div>
 
    </main>


  );
}
