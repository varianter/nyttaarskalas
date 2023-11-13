export default function Home() {
  return (
    <main className="flex flex-col p-24 text-white mx-16">
      <h1 className="p-2 font-semibold">Velkommen til nyttårskalas 🎆</h1>
      <h2 className="p-4 pb-6">Årets nyttårskalas er arangert av Variant!</h2>
    
    <div className="flex justify-end items-start">
      <img src={"./blobs/blobb10.svg"} alt={""} width={400} height={400}/>
      <img src={"./blobs/blobb8.svg"} alt={""} width={400} height={400}/>
    </div>

    <div className="p-4 bg-dark_purple rounded-xl">
      <h3 className="p-2">Litt om oss på variant</h3>
      <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat convallis eros at eleifend. Cras efficitur quam non congue ornare. Integer efficitur ac ex dictum rhoncus. Pellentesque arcu erat, blandit a enim sed, interdum aliquam lacus. Vivamus vitae mauris nisi. Aenean vestibulum sem quis dignissim dignissim. </p>
   </div>
   <br></br>
   <div className="p-4 bg-dark_purple rounded-xl">
   <h3 className="p-2">Hvem er arrangementet for?</h3>
   <p className="p-2">Suspendisse viverra tempus eleifend. Nam suscipit nec tortor id laoreet. Praesent tincidunt cursus justo, id aliquam nulla commodo ut. Nulla gravida vestibulum nibh ut scelerisque. Sed dapibus diam non arcu faucibus varius. Nam est nisl, imperdiet vel sapien sit amet, pharetra sollicitudin eros. Proin efficitur lorem ultricies ornare ultricies.</p>
   </div>
    </main>
  );
}
