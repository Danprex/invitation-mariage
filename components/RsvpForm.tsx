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
    
    // Envoi des données vers notre API
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom: nomInvite,
        presence: estPresent,
        message: messageLivreOr
      }),
    });

    if (response.ok) {
      setFormulaireSoumis(true); 
    } else {
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  };

  // Ce qui s'affiche APRÈS l'envoi du formulaire (Message + QR Code)
  if (formulaireSoumis) {
    return (
      <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
        <div className="p-6 text-center bg-green-50 rounded-lg shadow-sm border border-green-100 w-full">
          <h3 className="text-xl font-semibold text-green-800">Merci pour votre réponse !</h3>
          <p className="mt-2 text-green-700">Vos informations ont bien été enregistrées.</p>
        </div>
        <PassQrCode nomInvite={nomInvite} />
      </div>
    );
  }

  // Ce qui s'affiche AVANT l'envoi du formulaire
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-serif text-center mb-4 text-gray-900">Confirmez votre présence</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Votre Prénom et Nom</label>
        <input 
          type="text" 
          required 
          value={nomInvite} 
          onChange={(e) => setNomInvite(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Ex: Jean Dupont"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Serez-vous présent(e) ?</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="presence" 
              checked={estPresent === true}
              onChange={() => setEstPresent(true)}
              className="w-4 h-4 text-blue-600"
            />
            Oui, avec plaisir !
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="presence" 
              checked={estPresent === false}
              onChange={() => setEstPresent(false)}
              className="w-4 h-4 text-blue-600"
            />
            Non, malheureusement
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Un petit mot pour les mariés (optionnel)</label>
        <textarea 
          value={messageLivreOr}
          onChange={(e) => setMessageLivreOr(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none h-24"
          placeholder="Laissez votre message ici..."
        />
      </div>

      <button 
        type="submit" 
        className="mt-4 bg-gray-900 hover:bg-black text-white font-medium py-3 px-4 rounded-md transition-colors"
      >
        Envoyer ma réponse
      </button>
    </form>
  );
}