import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-mimar-bg border-t border-mimar-accent/10 py-6 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Sol Taraf: Copyright */}
        <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400">
          © 2024 <span className="text-black font-bold">ARCHITECTURAL</span>. All Rights Reserved.
        </div>

        {/* Orta/Sağ Taraf: Hızlı İletişim Bilgileri */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] tracking-[0.2em] uppercase font-bold text-mimar-accent">
          <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
          <a href="mailto:monaa.asoubar@gmail.com" className="hover:text-black transition-colors">Email</a>
          <a href="tel:+989128298808" className="hover:text-black transition-colors">Phone</a>
          <a href="https://instagram.com/mona_asoubar" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Instagram</a>
        </div>

      </div>
    </footer>
  );
}