export default function kontakt() {
    
    const kontakt = [
   
    ];
  
    return (
      <main className="flex flex-col items-center mx-16 text-white">
        <h3 className="mb-2 font-semibold  pt-60 pb-5">
          Har du spørsmål?
        </h3>
        <h2 className="pb-5">Kontakt oss</h2>
        
     <span className="p-2">Mail på: <a className="underline hover:text-ligth_teal text-teal" href="mailto:post@variant.no">post@variant.no</a>
        </span>
        <span className="p-2">Ring på: <a className="underline hover:text-ligth_teal text-teal" href="tel:+4792807375">928 07 375</a></span>
        <span className="p-2">Tweet på: <a className="underline hover:text-ligth_teal text-teal" href="https://twitter.com/variant_as" aria-label="Twitter @variant_as" rel="noopener">@variant_as</a></span>
        <span className="p-2">Bilder på: <a className="underline hover:text-ligth_teal text-teal" href="https://instagram.com/variant_as" aria-label="Instagram @variant_as" rel="noopener">@variant_as</a></span>

      </main>
    );
  }