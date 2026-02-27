import { useState } from 'react';
import { projectCategories } from '../data';

function FilterButton({ label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  const showUnderline = isActive || hovered;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer', color: isActive || hovered ? '#8d6e63' : '#9ca3af' }}
      className="relative text-[13px] font-bold uppercase tracking-[0.4em] pb-1 transition-colors duration-300"
    >
      {label}
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '1.5px',
          backgroundColor: '#8d6e63',
          width: showUnderline ? '100%' : '0%',
          transition: 'width 0.3s ease'
        }}
      ></span>
    </button>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const allProjects = projectCategories.flatMap(cat => cat.projects);
  const displayedProjects = selectedCategory ? selectedCategory.projects : allProjects;

  const nextImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImgIndex((prev) => (prev === selectedProject.gallery.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (selectedProject?.gallery) {
      setCurrentImgIndex((prev) => (prev === 0 ? selectedProject.gallery.length - 1 : prev - 1));
    }
  };

  // --- DETAY GÖRÜNÜMÜ ---
  if (selectedProject) {
    return (
      <div className="pt-32 px-8 min-h-screen bg-mimar-bg pb-20">
        <div className="max-w-6xl mx-auto">
          
          <button 
            onClick={() => { setSelectedProject(null); setCurrentImgIndex(0); }}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-mimar-accent hover:text-black transition-all mb-12"
            style={{ cursor: 'pointer' }}
          >
            <span className="text-lg">←</span> Back to Portfolio
          </button>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            <div className="relative group">
              <div className="aspect-square md:aspect-[4/5] overflow-hidden bg-gray-200 shadow-xl">
                <img 
                  src={selectedProject.gallery[currentImgIndex]} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                  alt="Project Detail"
                />
              </div>

              {selectedProject.gallery.length > 1 && (
                <>
                  <button onClick={prevImage} style={{ cursor: 'pointer' }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 hover:bg-white transition-all text-black">←</button>
                  <button onClick={nextImage} style={{ cursor: 'pointer' }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 hover:bg-white transition-all text-black">→</button>
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] px-3 py-1 tracking-widest">
                    {currentImgIndex + 1} / {selectedProject.gallery.length}
                  </div>
                </>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter uppercase mb-4 text-black">{selectedProject.name}</h1>
                <div className="h-1 w-20 bg-mimar-accent"></div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[10px] tracking-[0.15em] uppercase text-gray-500 border-b border-gray-200 pb-8">
                <p><span className="text-black font-bold block mb-1">Location</span> {selectedProject.location}</p>
                <p><span className="text-black font-bold block mb-1">Status</span> {selectedProject.status}</p>
                <p><span className="text-black font-bold block mb-1">Date</span> {selectedProject.date}</p>
                <p><span className="text-black font-bold block mb-1">Area</span> {selectedProject.area}</p>
              </div>

              <div className="space-y-6">
                <p className="text-xl font-light italic leading-relaxed text-mimar-accent">
                  "{selectedProject.quote}"
                </p>
                <p className="text-gray-600 leading-relaxed font-light text-base">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- LİSTE GÖRÜNÜMÜ ---
  return (
    <div className="pt-48 px-8 min-h-screen bg-mimar-bg pb-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-black">Portfolio</h1>
      </div>

      {/* Filtre Butonları */}
      <div className="flex flex-col md:flex-row flex-wrap gap-y-4 gap-x-12 items-center justify-center mb-20">
        <FilterButton
          label="All"
          isActive={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        />
        {projectCategories.map((cat) => (
          <FilterButton
            key={cat.id}
            label={cat.title}
            isActive={selectedCategory?.id === cat.id}
            onClick={() => setSelectedCategory(cat)}
          />
        ))}
      </div>

      {/* Proje Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto">
        {displayedProjects.map((project, index) => (
          <div key={index} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-200">
              <img src={project.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={project.name} />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-mimar-accent text-white text-[10px] font-bold uppercase tracking-[0.3em] px-8 py-3 transition-colors duration-300 group-hover:bg-[#6d4c41]">
                  View Details
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-mimar-accent">{project.name}</h3>
              <p className="text-gray-400 text-[10px] tracking-widest mt-2 uppercase">{project.area}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}