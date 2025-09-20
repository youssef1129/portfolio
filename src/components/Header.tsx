import React from 'react';
import { Terminal, Code, User, Briefcase, Mail } from 'lucide-react';

interface HeaderProps {
  currentSection: number;
  setCurrentSection: (index: number) => void;
  sections: string[];
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection, sections }) => {
  const sectionIcons = [Terminal, User, Code, Briefcase, Mail];
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header style={{ height: '73px' }} className="top-0 left-0 right-0 bg-slate-800/80 border-b border-green-400/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-nowrap">
            <span className="text-purple-400">const</span>{' '}
            <span className="text-cyan-400">developer</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-yellow-400">"Youssef Maazouz"</span>
            <span className="text-white">;</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden xl:flex space-x-8">
            {sections.map((section, index) => {
              const Icon = sectionIcons[index];
              return (
                <button
                  key={section}
                  onClick={() => setCurrentSection(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${currentSection === index
                    ? 'bg-green-400/20 text-green-400 shadow-lg'
                    : 'text-slate-400 hover:text-green-400 hover:bg-slate-700/50'
                    }`}
                >
                  <Icon size={18} />
                  <span className="capitalize">{section === 'hero' ? 'home' : section}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu */}
          <div className="xl:hidden relative">
            <button
              className="p-2 rounded-md text-slate-400 hover:text-green-400 hover:bg-slate-700/50 focus:outline-none"
              aria-label="Open menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-green-400/20 rounded-lg shadow-lg z-[9999]">
                <ul className="flex flex-col">
                  {sections.map((section, index) => {
                    const Icon = sectionIcons[index];
                    return (
                      <li key={section}>
                        <button
                          onClick={() => {
                            setCurrentSection(index);
                            setMenuOpen(false);
                          }}
                          className={`w-full flex items-center space-x-2 px-4 py-3 text-left rounded-lg transition-all duration-200 ${currentSection === index
                            ? 'bg-green-400/20 text-green-400'
                            : 'text-slate-400 hover:text-green-400 hover:bg-slate-700/50'
                            }`}
                        >
                          <Icon size={18} />
                          <span className="capitalize">{section === 'hero' ? 'home' : section}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;