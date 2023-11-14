export default function paamelding() {
    
    const paamelding = [
   
    ];
  
    return (
      <main className="flex flex-col items-center mx-16 text-white p-24">
      <h1 className="p-2 font-semibold">Ønsker du eller gjengen å delta? 🎆</h1>
        
        <a className="" href="http://localhost:3000/info#:~:text=Dette%20er%20kleskoden-,Fjor%C3%A5rets%20kalas">
          </a>
          <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Påmelding her
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Navn
                  </label>
                  <input
                    type="text"
                    id="navn"
                    name="navn"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Kommentar
                  </label>
                  <textarea
                    id="kommentar"
                    name="kommentar"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-dark_purple border-0 py-2 px-8 focus:outline-none hover:bg-darkest_purple rounded text-lg">
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500 text-align">post@variant.no</a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> 

      </main>
    );
  }