import React from 'react';
import { User, Coffee, Heart, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-7">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            <span className="text-purple-400">function</span>{' '}
            <span className="text-cyan-400">aboutMe</span>
            <span className="text-white">()</span>{' '}
            <span className="text-white">{'{'}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-yellow-400">return</span>{' '}
            <span className="text-green-400">"Passionate full-stack developer with a love for creating elegant solutions to complex problems. I transform ideas into reality through clean, efficient code."</span>
          </p>
          <div className="text-4xl text-white mt-4">{'}'}</div>
        </div>

        <div className='p-5 max-xl:overflow-auto' style={{
          maxHeight: 'calc(100dvh - 350px)',
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-3">
            <div className="bg-slate-800 p-6 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <User className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">Creative Problem Solver</h3>
              <p className="text-slate-400">I love tackling complex challenges and finding innovative solutions</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <Coffee className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">Always Learning</h3>
              <p className="text-slate-400">Continuously exploring new technologies and best practices</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <Heart className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">User-Focused</h3>
              <p className="text-slate-400">Building applications that provide exceptional user experiences</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <Zap className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-white">Performance Driven</h3>
              <p className="text-slate-400">Optimizing applications for speed, scalability, and efficiency</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-green-400/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-cyan-400">Experience</h4>
                <div className="space-y-4">
                  <div className="text-slate-300">
                    <div className="text-lg font-medium">2+ Years</div>
                    <div className="text-slate-400">Professional Full-Stack Development</div>
                  </div>
                  <div className="text-slate-300">
                    <div className="text-lg font-medium">5+ Years</div>
                    <div className="text-slate-400">Software Development</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4 text-green-400">Focus Areas</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">▸</span>
                    <span>Modern Web Applications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">▸</span>
                    <span>API Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">▸</span>
                    <span>Database Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">▸</span>
                    <span>Cloud Solutions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4 text-purple-400">Interests</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-400">◆</span>
                    <span>Innovation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-400">◆</span>
                    <span>Open Source</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-400">◆</span>
                    <span>Tech Mentoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-400">◆</span>
                    <span>AI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section >
  );
};

export default AboutSection;