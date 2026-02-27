import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FALLBACK_DATA = {
  sliderImages: [
    { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" },
    { url: "https://images.unsplash.com/photo-1518005020250-6eb5f3f27522?q=80&w=2012" }
  ],
  infoTitle: "About Studio",
  infoText: "We are a boutique architecture firm dedicated to creating spaces that inspire. Through minimalist design and sustainable materials, we bring modern visions to life."
};

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [wpData, setWpData] = useState(null);

  useEffect(() => {
    fetch('https://senin-wordpress-siten.com/wp-json/wp/v2/pages/YOUR_PAGE_ID')
      .then(res => res.json())
      .then(data => {
        if (data.acf) {
          setWpData({
            sliderImages: data.acf.slider_images,
            infoTitle: data.acf.info_title,
            infoText: data.acf.info_description
          });
        }
      })
      .catch(() => console.log("WordPress bağlantısı yok, yerel veriler kullanılıyor."));
  }, []);

  const activeImages = wpData?.sliderImages || FALLBACK_DATA.sliderImages;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === activeImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [activeImages]);

  return (
    <main style={{backgroundColor: '#f5f0eb'}}>
      {/* HERO SLIDER */}
      <div className="relative h-screen w-full overflow-hidden">
        {activeImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img src={img.url} className="h-full w-full object-cover" alt="Architecture" />
          </div>
        ))}
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 uppercase">
            Designing <br /> <span className="font-bold italic">The Future</span>
          </h1>
          
          <Link 
            to="/projects" 
            className="group relative px-12 py-4 overflow-hidden border border-white transition-all duration-300 hover:border-mimar-accent"
          >
            <span className="relative z-10 text-xs font-bold tracking-[0.4em] uppercase group-hover:text-white">
              View Projects
            </span>
            <div className="absolute inset-0 bg-mimar-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* SHORT INFO SECTION */}
      <section style={{backgroundColor: '#f5f0eb', padding: '5rem 2rem'}}>
        <div style={{maxWidth: '64rem', margin: '0 auto'}}>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <h2 className="text-sm font-bold uppercase tracking-[0.6em] text-mimar-accent mb-4">
                {wpData?.infoTitle || FALLBACK_DATA.infoTitle}
              </h2>
              <div className="h-[1px] w-20 bg-mimar-accent"></div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-3xl font-light leading-snug text-gray-800 tracking-tight italic">
                {wpData?.infoText || FALLBACK_DATA.infoText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}