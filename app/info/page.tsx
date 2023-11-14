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

   <section className="flex mb-12 mt-8 grid-cols-1 gap-4 xxs:grid-cols-2 xs:grid-cols-3 smmd:grid-cols-5">

    <a className="" href="https://nyttaarskalas.vercel.app/info#:~:text=Fjor%C3%A5rets%20kalas-,Kveldens%20program,-19.00%20%2D%20%C3%85pningstale">
    <article className="mx-1 min-h-[5rem] min-w-[8rem] rounded-xl bg-dark_purple text-white hover:bg-darker_purple p-3 ">
    <p className="text-left font-serif">Program</p>
    <div className="flex justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#B7B4DE" viewBox="0 0 256 256"><path d="M168,16A72.07,72.07,0,0,0,96,88a73.29,73.29,0,0,0,.63,9.42L27.12,192.22A15.93,15.93,0,0,0,28.71,213L43,227.29a15.93,15.93,0,0,0,20.78,1.59l94.81-69.53A73.29,73.29,0,0,0,168,160a72,72,0,1,0,0-144Zm56,72a55.72,55.72,0,0,1-11.16,33.52L134.49,43.16A56,56,0,0,1,224,88ZM54.32,216,40,201.68,102.14,117A72.37,72.37,0,0,0,139,153.86ZM112,88a55.67,55.67,0,0,1,11.16-33.51l78.34,78.34A56,56,0,0,1,112,88Zm-2.35,58.34a8,8,0,0,1,0,11.31l-8,8a8,8,0,1,1-11.31-11.31l8-8A8,8,0,0,1,109.67,146.33Z"></path></svg>
    </div></article></a>

      <a className="" href="https://nyttaarskalas.vercel.app/info#:~:text=23.30%20%2D%20R%C3%A6vkrokturnering-,Hvor%20og%20n%C3%A5r%3F,-Nytt%C3%A5rskalaset%20blir%20arrangert">
      <article className="mx-1 min-h-[5rem] min-w-[8rem] rounded-xl bg-dark_purple text-white hover:bg-darker_purple p-3 ">
      <p className="text-left font-serif">Tidspunkter</p>
    <div className="flex justify-center">
      <Image alt="" className="mt-3 h-[1.75rem]" src=""></Image>   
    </div></article></a>

      <a className="" href="https://nyttaarskalas.vercel.app/info#:~:text=Informasjon%20om%20drikke%20og%20snacks%20servering">
      <article className="mx-1 min-h-[5rem] min-w-[8rem] rounded-xl bg-dark_purple text-white hover:bg-darker_purple p-3 ">
      <p className="text-left font-serif">Servering</p>
    <div className="flex justify-center">
      <Image alt="" className="mt-3 h-[1.75rem]" src=""></Image>
    </div></article></a>

      <a className="" href="https://nyttaarskalas.vercel.app/info#:~:text=drikke%20og%20snacks-,Kleskode,-Dette%20er%20kleskoden">
      <article className="mx-1 min-h-[5rem] min-w-[8rem] rounded-xl bg-dark_purple text-white hover:bg-darker_purple p-3 ">
      <p className="text-left font-serif">Kleskode</p>
    <div className="flex justify-center">
      <Image alt="" className="mt-3 h-[1.75rem]" src=""></Image>
    </div></article></a>

      <a className="" href="https://nyttaarskalas.vercel.app/info#:~:text=Dette%20er%20kleskoden-,Fjor%C3%A5rets%20kalas">
      <article className="mx-1 min-h-[5rem] min-w-[8rem] rounded-xl bg-dark_purple text-white hover:bg-darker_purple p-3 ">
      <p className="text-left font-serif">Kalas 2022</p>
    <div className="flex justify-center">
      <img alt="" className="mt-3 h-[1.75rem]" src="">
      </img></div></article></a></section>

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


      <h3 className="pb-5 pt-60">Informasjon om drikke og snacks servering</h3>
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

    <div className="mb-12 mt-8 p-4 bg-dark_purple rounded-xl grid grid-cols-1 gap-4 xxs:grid-cols-2 xs:grid-cols-3 smmd:grid-cols-5 hover:bg-darker_purple">
      <a className="" href="https://nyttaarskalas.vercel.app/info">
      <p>Til toppen</p>
      </a>
    </div>
 
    </main>


  );
}
