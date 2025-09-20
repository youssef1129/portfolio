import { useState, useEffect } from 'react';
import { Terminal, Code, Database, Server } from 'lucide-react';

interface HeroSectionProps {
  setCurrentSection: (index: number) => void;
}
const HeroSection = ({ setCurrentSection }: HeroSectionProps) => {
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const codeLines = [
    'const developer = {',
    '  name: "Youssef Maazouz",',
    '  role: "Full-Stack Developer",',
    '  passion: "Creating Digital Solutions",',
    '  stack: ["React", "Node.js", "TypeScript"],',
    '  available: true',
    '};'
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setTypedText(prev => prev + (line[charIndex] || ''));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTypedText(prev => prev + '\n');
          setTimeout(() => setCurrentLine(prev => prev + 1), 500);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [currentLine]);

  return (
    <section className="flex items-center justify-center min-h-screen px-20 py-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-white">Hello</span>
              <span className="text-cyan-400">(</span>
              <span className="text-white">World</span>
              <span className="text-cyan-400">)</span>
              <span className="text-green-400">;</span>
            </h1>
            <div className="text-xl lg:text-2xl text-slate-300 space-y-2">
              <p>
                <span className="text-purple-400">I'm</span>{' '}
                <span className="text-yellow-400 font-bold">Youssef Maazouz</span>
              </p>
              <p>
                <span className="text-slate-400">Full-Stack Developer</span>
              </p>
            </div>
          </div>

          <div className="flex space-x-6 flex-wrap gap-y-3">
            <div className="flex items-center space-x-3 bg-slate-800 px-4 py-2 rounded-lg">
              <Code className="text-cyan-400" size={24} />
              <span>Frontend</span>
            </div>
            <div className="flex items-center space-x-3 bg-slate-800 px-4 py-2 rounded-lg">
              <Server className="text-green-400" size={24} />
              <span>Backend</span>
            </div>
            <div className="flex items-center space-x-3 bg-slate-800 px-4 py-2 rounded-lg">
              <Database className="text-purple-400" size={24} />
              <span>Database</span>
            </div>
          </div>

          <button onClick={() => setCurrentSection(4)} className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105">
            <span className="flex items-center space-x-2">
              <Terminal size={20} />
                <span className="relative">
                <span className="animate-pulse text-cyan-200">{'<'}</span>
                <span className="text-yellow-300 font-mono">Hire_Me</span>
                <span className="animate-bounce text-pink-400"> required</span>
                <span className="animate-pulse text-cyan-200">{'/>'}</span>
                </span>
            </span>
          </button>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 border border-green-400/20">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-slate-400 ml-4">portfolio.ts</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <pre className="whitespace-pre-wrap text-green-400">
              {typedText}
              {currentLine < codeLines.length && (
                <span className="bg-green-400 text-slate-900 animate-pulse">|</span>
              )}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;