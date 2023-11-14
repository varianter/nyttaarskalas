export default function kontakt() {
    
    const kontakt = [
   
    ];
  
    return (
      <main className="flex flex-col items-center mx-16 text-white">
        <h2 className="mb-2 font-semibold pt-60 pb-5">Har du spørsmål?</h2>
        <h3 className="pb-5">Kontakt oss</h3>
        
     <span className="p-2">Mail på: <a className="underline hover:text-ligth_teal text-teal" href="mailto:post@variant.no">post@variant.no</a>
        </span>
        <span className="p-2">Ring på: <a className="underline hover:text-ligth_teal text-teal" href="tel:+4792807375">928 07 375</a></span>
        <span className="p-2">Tweet på: <a className="underline hover:text-ligth_teal text-teal" href="https://twitter.com/variant_as" aria-label="Twitter @variant_as" rel="noopener">@variant_as</a></span>
        <span className="p-2">Bilder på: <a className="underline hover:text-ligth_teal text-teal" href="https://instagram.com/variant_as" aria-label="Instagram @variant_as" rel="noopener">@variant_as</a></span>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg></span>

      </main>
    );
  }