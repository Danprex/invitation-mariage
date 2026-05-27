"use client";
import { useState, useEffect } from "react";

export default function Countdown() {
  const dateMariage = new Date("2026-08-14T14:45:00").getTime();
  const [tempsRestant, setTempsRestant] = useState({ jours: 0, heures: 0, minutes: 0, secondes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const maintenant = new Date().getTime();
      const distance = dateMariage - maintenant;
      if (distance < 0) { clearInterval(interval); return; }
      setTempsRestant({
        jours: Math.floor(distance / (1000 * 60 * 60 * 24)),
        heures: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secondes: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [dateMariage]);

  return (
    <div className="flex justify-center gap-4 text-center my-8">
      {Object.entries(tempsRestant).map(([unite, valeur]) => (
        <div key={unite} className="flex flex-col items-center">
          {/* Chiffres en Terracotta avec bordure Sauge légère */}
          <div className="bg-white shadow-sm rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold text-[#C15B3D] border border-[#8A9A86]/20">
            {valeur < 10 ? `0${valeur}` : valeur}
          </div>
          <span className="text-[10px] sm:text-xs text-[#8A9A86] mt-2 uppercase tracking-widest">
            {unite}
          </span>
        </div>
      ))}
    </div>
  );
}