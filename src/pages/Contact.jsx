import React from 'react';

export default function Contact() {
  return (
    <div className="pt-48 pb-20 bg-mimar-bg text-gray-900 px-8 min-h-screen transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Üst Başlık */}
        <div className="flex items-center gap-4 mb-20">
          <div className="h-[1px] w-12 bg-mimar-accent"></div>
          <h1 className="text-sm font-bold tracking-widest uppercase text-mimar-accent">
            Contact Us
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Sol Taraf: Büyük Tipografi */}
          <div className="space-y-10">
            <h2 className="text-6xl font-light leading-[1.1] tracking-tighter text-black">
              Let's build something <br />
              <span className="font-serif italic text-mimar-accent">extraordinary</span> <br />
              together.
            </h2>
            <div className="w-20 h-1 bg-mimar-accent/20"></div>
            <p className="text-gray-500 font-light leading-relaxed max-w-sm text-lg">
              We invite you to follow us on social media, or contact us directly to discuss your project.
            </p>
          </div>

          {/* Sağ Taraf: İletişim Bilgileri */}
          <div className="flex flex-col justify-start space-y-6">

            {/* Mail */}
            <div>
              <div className="h-[1px] w-full bg-mimar-accent/20 mb-3"></div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-mimar-accent mb-2">
                Mail
              </h3>
              <a
                href="mailto:monaa.asoubar@gmail.com"
                className="block text-base font-light hover:translate-x-2 transition-transform duration-300 ease-in-out text-gray-600 hover:text-mimar-accent"
              >
                monaa.asoubar<span className="text-mimar-accent font-normal">@</span>gmail.com
              </a>
            </div>

            {/* Instagram */}
            <div>
              <div className="h-[1px] w-full bg-mimar-accent/20 mb-3"></div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-mimar-accent mb-2">
                Instagram
              </h3>
              <a
                href="https://instagram.com/mona_asoubar"
                target="_blank"
                rel="noreferrer"
                className="block text-base font-light hover:translate-x-2 transition-transform duration-300 ease-in-out text-gray-600 hover:text-mimar-accent"
              >
                @mona_asoubar
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="h-[1px] w-full bg-mimar-accent/20 mb-3"></div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-mimar-accent mb-2">
                Phone
              </h3>
              <a
                href="tel:+989128298808"
                className="block text-base font-light hover:translate-x-2 transition-transform duration-300 ease-in-out text-gray-600 hover:text-mimar-accent"
              >
                +98 912 829 8808
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}