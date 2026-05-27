import Countdown from "@/components/Countdown";
import RsvpForm from "@/components/RsvpForm";
import GuestBook from "@/components/GuestBook";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans text-stone-800 overflow-x-hidden print:bg-white">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .police-mariage { font-family: 'Great Vibes', cursive; }
      `}} />

      <section className="print:hidden relative h-screen flex flex-col items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('/photo-accueil.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div> 
        
        <div className="relative z-10 flex flex-col items-center text-center -mt-28">
          <img 
            src="/alliances.jpg" 
            alt="Alliances" 
            className="w-16 md:w-20 h-auto mb-4 drop-shadow-md" 
          />
          <p className="text-white text-xs md:text-sm tracking-[0.4em] uppercase mb-42 drop-shadow-md font-light">
            Célébration de mariage
          </p>
          <h1 className="text-7xl md:text-9xl text-white police-mariage drop-shadow-lg font-normal mb-8">
            Invitation
          </h1>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.3em] mb-2 font-light">Défilez</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="print:hidden py-24 px-4 bg-[#FDFBF7] text-center flex flex-col items-center">
        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8A9A86] mb-10 font-light">
          Bienvenue à notre célébration
        </p>

        <div className="flex flex-col items-center mb-16">
          <h2 className="text-6xl md:text-7xl font-serif text-stone-800 font-light tracking-wide">
            Sabrina
          </h2>
          <span className="text-5xl md:text-6xl police-mariage text-[#C15B3D]/80 my-2">
            &
          </span>
          <h2 className="text-6xl md:text-7xl font-serif text-stone-800 font-light tracking-wide">
            Usher
          </h2>
        </div>

        <h3 className="text-2xl md:text-3xl font-serif italic text-[#C15B3D] mb-6">
          Alerte mariage !
        </h3>

        <p className="max-w-md mx-auto text-stone-600 leading-loose text-sm md:text-base font-light px-4">
          Après des années de tests, on a validé : on se garde.
          Venez fêter ça avec du champagne, du caviar, et surtout vous, notre équipe de proches préférée.
          PS : Si vous dansez mal, c’est encore mieux.
        </p>
      </section>

      <section className="print:hidden py-16 px-4 bg-[#F4F1EA] text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center p-8 bg-[#FDFBF7] rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-[#F4F1EA]">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A9A86] mb-4 animate-pulse">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
          </svg>
          <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#8A9A86] mb-2 font-light">
            Dress Code
          </h2>
          <h3 className="text-4xl md:text-5xl police-mariage text-[#C15B3D] mb-6 drop-shadow-sm">
            Bohème & Chic
          </h3>
          <div className="w-12 h-[1px] bg-[#8A9A86]/40 mb-6"></div>
          <p className="text-stone-600 text-sm leading-relaxed font-light px-2">
            Pour harmoniser cette magnifique journée, <strong className="font-medium text-[#C15B3D]">une tenue élégante est exigée</strong>. <br className="hidden md:block" />
            Sortez vos plus belles étoffes, privilégiez les tons naturels et laissez parler votre style.
          </p>
        </div>
      </section>

      <section className="print:hidden py-20 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif mb-12 text-[#C15B3D]">Le grand jour</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xl">
          <div className="p-4">
            <p className="font-bold uppercase tracking-widest text-xs text-[#8A9A86] mb-3">Date</p>
            <p className="font-bold text-stone-800">Vendredi 14 Août 2026</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-[#8A9A86]/20">
            <p className="font-bold uppercase tracking-widest text-xs text-[#8A9A86] mb-3">Heure</p>
            <p className="font-bold text-stone-800">14h45</p>
          </div>
          <div className="p-4 border-t md:border-t-0 md:border-l border-[#8A9A86]/20">
            <p className="font-bold uppercase tracking-widest text-xs text-[#8A9A86] mb-3">Lieu</p>
            <p className="font-bold text-stone-800">Golf Club<br/>Libreville, Gabon</p>
          </div>
        </div>
      </section>

      <section className="print:hidden py-12 bg-[#FDFBF7] border-y border-[#8A9A86]/20">
        <h2 className="text-center text-xl font-medium text-[#8A9A86] mb-6 uppercase tracking-widest">L'aventure commence dans...</h2>
        <Countdown />
      </section>

      <section className="py-24 px-4 bg-[#F4F1EA] print:py-0 print:bg-transparent">
        <RsvpForm />
      </section>

      <section className="print:hidden py-20 px-4 bg-[#FDFBF7] border-b border-[#8A9A86]/20">
        <GuestBook />
      </section>

      <section className="print:hidden py-24 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-6 text-[#C15B3D]">Nous rejoindre</h2>
        <p className="mb-10 text-stone-600 max-w-xl mx-auto leading-relaxed">
          La cérémonie et la réception auront lieu au domaine. Cliquez sur le bouton ci-dessous pour ouvrir l'itinéraire directement sur votre application GPS.
        </p>
        <a 
          href="https://maps.app.goo.gl/t2YWViz2aqd92tvP9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#8A9A86] hover:bg-[#788874] text-white font-medium py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Ouvrir sur Google Maps
        </a>
      </section>

      <footer className="print:hidden py-16 bg-[#4A5346] text-[#FDFBF7]/80 text-center px-4">
        <h3 className="text-3xl font-serif mb-4 text-[#FDFBF7]">Merci</h3>
        <p className="max-w-md mx-auto text-sm tracking-wide">
          Nous avons hâte de célébrer ce moment inoubliable à vos côtés.
        </p>
        <p className="mt-12 text-xs opacity-60">
          © 2026 - Application d'invitation - By danprexstudio
        </p>
      </footer>

    </main>
  );
}