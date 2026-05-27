"use client";

interface PassQrCodeProps {
  nomInvite: string;
}

export default function PassQrCode({ nomInvite }: PassQrCodeProps) {
  // Génération sécurisée du QR Code via l'API gratuite qrserver
  const qrData = encodeURIComponent(`Pass Mariage VIP - ${nomInvite}`);
  // Utilisation de ton code couleur Terracotta (C15B3D)
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}&color=C15B3D&bgcolor=FDFBF7`;

  return (
    <div className="mt-8 flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm border border-[#8A9A86]/20 w-full">
      <h4 className="text-[#8A9A86] text-xs tracking-[0.2em] uppercase mb-4">
        Votre Pass Personnel
      </h4>
      
      <div className="p-4 bg-[#FDFBF7] rounded-xl border border-[#F4F1EA]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={qrUrl} 
          alt={`QR Code pour ${nomInvite}`} 
          className="w-32 h-32 md:w-40 md:h-40"
        />
      </div>
      
      <p className="mt-4 text-[#C15B3D] font-serif text-xl">
        {nomInvite}
      </p>
      <p className="text-xs text-stone-400 mt-2 text-center max-w-[200px] leading-relaxed">
        Présentez ce QR Code à l'entrée du domaine le jour J.
      </p>

      <button 
        onClick={() => window.print()}
        className="mt-6 text-xs text-white bg-[#8A9A86] px-5 py-2.5 rounded-full hover:bg-[#788874] transition-colors shadow-sm"
      >
        Sauvegarder mon Pass
      </button>
    </div>
  );
}