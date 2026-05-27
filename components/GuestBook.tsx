"use client";
import { useEffect, useState } from "react";

interface Message { nom: string; texte: string; date: string; }

export default function GuestBook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chargement, setChargement] = useState(true);

  const chargerMessages = async () => {
    try {
      const response = await fetch("/api/messages");
      if (response.ok) { const data = await response.json(); setMessages(data); }
    } catch (error) { console.error(error); } finally { setChargement(false); }
  };

  useEffect(() => {
    chargerMessages();
    const interval = setInterval(chargerMessages, 10000);
    return () => clearInterval(interval);
  }, []);

  if (chargement) return <p className="text-center text-[#8A9A86] py-10">Chargement des messages...</p>;

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-[#F4F1EA] rounded-xl">
      <h3 className="text-xl font-serif font-bold text-[#C15B3D] mb-6 text-center">
        Le Livre d'Or ({messages.length})
      </h3>
      <div className="flex flex-col gap-4 max-h-96 overflow-y-auto pr-2">
        {messages.map((msg, index) => (
          <div key={index} className="bg-[#FDFBF7] p-4 rounded-lg border border-[#8A9A86]/10 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-[#8A9A86] text-sm">{msg.nom}</span>
              <span className="text-[10px] text-stone-400 uppercase">{msg.date.split(" ")[0]}</span>
            </div>
            <p className="text-stone-700 text-sm italic leading-relaxed">"{msg.texte}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}