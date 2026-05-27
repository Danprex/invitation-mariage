"use client";
import { useState } from "react";
import PassQrCode from "./PassQrCode";

export default function RsvpForm() {
  const [nomInvite, setNomInvite] = useState("");
  const [estPresent, setEstPresent] = useState(true);
  const [messageLivreOr, setMessageLivreOr] = useState("");
  const [formulaireSoumis, setFormulaireSoumis] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom: nomInvite, presence: estPresent, message: messageLivreOr }),
    });
    if (response.ok) { setFormulaireSoumis(true); } 
    else { alert("Une erreur est survenue."); }
  };

  if (formulaireSoumis) {
    return (
      <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto print:gap-0">
        <div className="print:hidden p-6 text-center bg-[#8A9A86]/10 rounded-lg border border-[#8A9A86]/20 w-full">
          <h3 className="text-xl font-semibold text-[#4A5346]">Merci pour votre réponse !</h3>
          <p className="mt-2 text-[#8A9A86]">Vos informations ont bien été enregistrées.</p>
        </div>
        <PassQrCode nomInvite={nomInvite} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="print:hidden flex flex-col gap-4 max-w-md mx-auto p-8 bg-[#FDFBF7] rounded-2xl shadow-sm border border-[#F4F1EA]">
      <h2 className="text-2xl font-serif text-center mb-4 text-[#C15B3D]">Confirmez votre présence</h2>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Prénom et Nom</label>
        <input 
          type="text" required value={nomInvite} onChange={(e) => setNomInvite(e.target.value)}
          className="w-full border border-[#8A9A86]/30 rounded-md p-3 focus:ring-1 focus:ring-[#C15B3D] outline-none bg-white text-stone-800"
          placeholder="Ex: Jean MOULOUNGUI"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Serez-vous présent(e) ?</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-stone-600">
            <input type="radio" checked={estPresent} onChange={() => setEstPresent(true)} className="accent-[#C15B3D]"/> Oui
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-stone-600">
            <input type="radio" checked={!estPresent} onChange={() => setEstPresent(false)} className="accent-[#C15B3D]"/> Non
          </label>
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-[#8A9A86] mb-2">Un petit mot (optionnel)</label>
        <textarea 
          value={messageLivreOr} onChange={(e) => setMessageLivreOr(e.target.value)}
          className="w-full border border-[#8A9A86]/30 rounded-md p-3 focus:ring-1 focus:ring-[#C15B3D] outline-none h-24 bg-white text-stone-800"
        />
      </div>
      <button type="submit" className="mt-4 bg-[#C15B3D] hover:bg-[#A64B31] text-white font-medium py-3 px-4 rounded-md transition-all shadow-md">
        Envoyer ma réponse
      </button>
    </form>
  );
}