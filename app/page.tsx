export default function Home() {
  return (
    <main className="flex flex-col p-24 text-white relative mx-2 sm:mx-16 ">
        <img className="absolute -right-16 top-5 -z-50" src={"./color_blobs/ligth_purple.svg"} alt={""} width={400} height={400}/>
        <img className="absolute right-16 -top-4 -z-50" src={"./blobs/blobb10.svg"} alt={""} width={350} height={350}/>
        <img className="absolute -right-14 top-18 -z-50" src={"./blobs/blobb8.svg"} alt={""} width={400} height={400}/>
        <div className="flex flex-col">
          <h1 className="p-2 font-semibold">Velkommen til nyttårskalas 🎆</h1>
          <h2 className="p-4 pb-6">Årets nyttårskalas av Variant!</h2>
        </div>
    <div className="p-4 bg-dark_purple rounded-xl w-4/5">
      <h3 className="p-2">Litt om oss på variant</h3>
      <p className="p-2">I Variant er vi opptatt av å utvikle og bidra i samfunnet og miljøene rundt oss. 
      Vår gjestfrihet er en selvfølge, og vi byr på både lokalene og fagkompetansen vår, 
      i tillegg til at vi ønsker å bidra til et samfunn hvor mangfold og likestilling blir heiet frem. 
      I Variant ønsker vi å bidra til størst mulig forandring til det bedre for kundene våre, for folk og for samfunnet. 
      Vi gjør research, utvikler konsepter, skriver kodelinjer, leder prosjekter og prosesser, og rådgir. Lista er lang, og vi bidrar med mye!</p>
   </div>
   <br></br>
   <div className="p-4 bg-dark_purple rounded-xl">
   <h3 className="p-2">Hvem er arrangementet for?</h3>
   <p className="p-2">Om du er IT interisert eller en designer er du hjertelig velkommen til å ta med deg dine nærmeste og kjæreste venner for å feire inngangen til det nye året sammen med oss. 
   Del dine lidenskaper, skap minner og la oss sammen heve glassene for et fantastisk 2024!
    </p>
   </div>
    </main>
  );
}
