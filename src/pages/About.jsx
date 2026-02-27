import React from 'react';

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-mimar-bg text-gray-900">
      
      {/* 1. Giriş Bölümü: Hero Section */}
      <section className="px-8 max-w-6xl mx-auto mb-16">
        <h1 style={{fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#005110', textAlign: 'center', marginBottom: '3rem'}}>About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/4] bg-gray-200 overflow-hidden shadow-2xl rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" 
              alt="Mona Asoubar" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl font-light leading-tight tracking-tighter">
              MonAsoubar <br />
              <span className="font-bold text-mimar-accent">Architectural Group</span>
            </h2>
            <p className="text-xl font-light leading-relaxed text-gray-600 italic border-l-4 border-mimar-accent pl-6">
              "Design is not just about structures—it's about creating meaningful, memorable environments that resonate with people and place alike."
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
              With over 10 years of experience, we specialize in creating innovative residential and commercial spaces that inspire and delight. Our expertise spans architecture, interior design, landscape design, and project supervision.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="py-16 px-8 mb-16 border-y border-mimar-accent/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0">
          <div className="space-y-6 px-12">
            <h3 style={{fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#005110', marginBottom: '1rem'}}>Vision</h3>
            <p className="text-gray-700 leading-relaxed font-light text-lg italic">
              We see architecture as a way of shaping life experiences—spaces that are simple, functional, and deeply connected to their surroundings. Our design philosophy is rooted in minimal aesthetics and modern materials, creating clarity and harmony while emphasizing the seamless interaction between inside and outside.
            </p>
          </div>
          <div className="space-y-6 border-t md:border-t-0 md:border-l border-gray-200 pt-12 md:pt-0 px-12">
            <h3 style={{fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#005110', marginBottom: '1rem'}}>Mission</h3>
            <p className="text-gray-700 leading-relaxed font-light text-lg italic">
              In every project, we aim to transform constraints into opportunities, ensuring that the design not only responds to the context but also enriches the everyday life of its users. While client needs and desires are carefully integrated, we remain committed to preserving our design language and values. For us, true beauty lies in functionality, where simplicity and performance come together to create timeless, livable spaces.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section className="px-8 max-w-6xl mx-auto mb-16 text-center">
        <h3 style={{fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#005110', marginBottom: '4rem'}}>Our Services</h3>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-6 group">
            <div className="h-1 w-12 bg-mimar-accent mx-auto transition-all group-hover:w-24"></div>
            <div className="text-4xl">🏠</div>
            <h4 style={{fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111'}}>Residential Design</h4>
            <p className="text-base text-gray-500 leading-relaxed font-light">Residential design merges function and style, focusing on space planning, aesthetics, lighting, furniture, and technology, with collaboration between designers and homeowners pivotal for success.</p>
          </div>
          <div className="space-y-6 group">
            <div className="h-1 w-12 bg-mimar-accent mx-auto transition-all group-hover:w-24"></div>
            <div className="text-4xl">📐</div>
            <h4 style={{fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111'}}>Interior Design</h4>
            <p className="text-base text-gray-500 leading-relaxed font-light">focuses on creating inviting and functional indoor spaces. It harmonizes aesthetics, functionality, and client preferences to craft personalized environments.</p>
          </div>
          <div className="space-y-6 group">
            <div className="h-1 w-12 bg-mimar-accent mx-auto transition-all group-hover:w-24"></div>
            <div className="text-4xl">🌿</div>
            <h4 style={{fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111'}}>Landscape Design</h4>
            <p className="text-base text-gray-500 leading-relaxed font-light">We design outdoor spaces that inspire and delight. Our landscapes balance beauty, functionality, and sustainability. We create environments that connect people with nature and enhance daily experiences.</p>
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="px-8 max-w-6xl mx-auto text-center border-t border-gray-200 pt-12">
        <h3 style={{fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#005110', marginBottom: '4rem'}}>Our Process</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 mb-10">
          {[
            "Initial\u00A0Consultation", 
            "Design\u00A0Development", 
            "Visualization", 
            "Construction\u00A0Oversight"
          ].map((step, i, arr) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold uppercase tracking-widest whitespace-nowrap">{step}</span>
              </div>
              
              {i !== arr.length - 1 && (
                <div className="hidden md:block text-mimar-accent text-3xl">
                  &#10230;
                </div>
              )}
              {i !== arr.length - 1 && (
                <div className="md:hidden text-mimar-accent text-3xl rotate-90 my-2">
                  &#10230;
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <p className="text-gray-500 font-light max-w-2xl mx-auto italic text-lg leading-relaxed border-t border-gray-100 pt-8">
          Our process ensures that each project is meticulously planned and executed. From the initial consultation to the final walkthrough, we collaborate closely with clients to ensure their vision is brought to life with precision and creativity.
        </p>
      </section>

    </div>
  );
}