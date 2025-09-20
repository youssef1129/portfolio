import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, sections.length]);

  return (
    <div className="bg-slate-900 text-green-400 min-h-screen font-mono overflow-hidden">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} sections={sections} />

      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSection * 100}vw)`, height: 'calc(100vh - 73px)' }}
      >
        <div className="w-screen flex-shrink-0">
          <HeroSection setCurrentSection={setCurrentSection} />
        </div>
        <div className="w-screen flex-shrink-0">
          <AboutSection />
        </div>
        <div className="w-screen flex-shrink-0">
          <SkillsSection />
        </div>
        <div className="w-screen flex-shrink-0">
          <ProjectsSection />
        </div>
        <div className="w-screen flex-shrink-0">
          <ContactSection />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`block w-3 h-3 rounded-full mb-4 transition-all duration-300 ${index === currentSection
              ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
              : 'bg-slate-600 hover:bg-slate-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;