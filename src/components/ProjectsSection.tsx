import React from 'react';
import { ExternalLink, Github, Code, Database, Server } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "ONCF-Voyages",
      description:
        "Contributed to Morocco’s official train booking platform by modernizing user flows for booking, canceling, and managing trips. Improved the overall performance and experience for thousands of daily users.",
      tech: ["React", "Redux", "Ant Design", "ExpressJS", "JWT", "Gitlab", "styled-components"],
      color: "blue",
      icon: <Server className="w-6 h-6" />,
      features: [
        "User-friendly booking & cancellation flows",
        "Responsive design for mobile & desktop",
        "Optimized state management with Redux Toolkit",
      ],
      codeLink: "",
      liveLink: "https://www.oncf-voyages.ma/",
    },
    {
      id: 2,
      title: "Registration System for Moroccans Abroad",
      description:
        "Built a platform for the Ministry of Foreign Affairs enabling Moroccans abroad to register and access consular services online. Delivered multilingual features and pixel-perfect UIs from Figma designs.",
      tech: ["React", "TypeScript", "Redux Toolkit", "Ant Design", "Azure DevOps", "Jira", ".net Core", "SignalR", "JWT", "SCSS", "i18n"],
      color: "red",
      icon: <Code className="w-6 h-6" />,
      features: [
        "Portal and dashboard applications",
        "Multilingual and responsive features",
        "Pixel-perfect design from Figma",
        "Secure admin & user-facing portals",
      ],
      codeLink: "",
      liveLink: "",
    },
    {
      id: 3,
      title: "Schedule React Component (Open Source)",
      description:
        "An open-source React component for building and managing schedules with drag-and-drop, time blocking, and recurring events. Designed for simplicity and reusability.",
      tech: ["React", "TypeScript", "Storybook", "NPM"],
      color: "green",
      icon: <Database className="w-6 h-6" />,
      features: [
        "Dynamic event creation & editing",
        "Customizable themes",
      ],
      codeLink: "https://github.com/youssef1129/schedule-react-component",
      liveLink: "https://youssef1129.github.io/schedule-react-component-demo",
    },
    {
      id: 4,
      title: "myLinkedIn (LinkedIn Clone)",
      description:
        "A full-stack LinkedIn clone designed for experimentation with graph databases and scalable backends. Supports profiles, posts, networking, and analytics.",
      tech: [
        "React",
        "NestJS",
        "Neo4j",
        "Firebase",
        "Python",
        "FastAPI",
        "Pandas",
      ],
      color: "purple",
      icon: <Server className="w-6 h-6" />,
      features: [
        "Graph-based relationship mapping with Neo4j",
        "Post feed and profile management",
        "Data analysis & recommendations with Python/Pandas",
      ],
      codeLink: "",
      liveLink: "https://mylinkedinproject.web.app/login",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { border: string; text: string; bg: string; } } = {
      cyan: { border: 'border-cyan-400/20 hover:border-cyan-400/50', text: 'text-cyan-400', bg: 'bg-cyan-400/10' },
      green: { border: 'border-green-400/20 hover:border-green-400/50', text: 'text-green-400', bg: 'bg-green-400/10' },
      purple: { border: 'border-purple-400/20 hover:border-purple-400/50', text: 'text-purple-400', bg: 'bg-purple-400/10' }
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-7">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            <span className="text-purple-400">class</span>{' '}
            <span className="text-cyan-400">Projects</span>{' '}
            <span className="text-white">{'{'}</span>
            <span className="text-xl text-slate-300 my-2 pl-8">
              <span className="text-green-400">// Some of my recent work</span>
            </span>
            <span className="text-white">{'  }'}</span>
          </h2>
        </div>

        <div style={{
          maxHeight: 'calc(100dvh - 200px)',
        }} className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-5 overflow-auto">
          {projects.map((project) => {
            const colors = getColorClasses(project.color);

            return (
              <div
                key={project.id}
                className={`bg-slate-800 rounded-lg border ${colors.border} transition-all duration-300 hover:transform hover:scale-105 overflow-hidden flex flex-col justify-between`}
              >
                <div className={`p-6 ${colors.bg}`}>
                  <div className={`${colors.text} mb-4`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="m-4">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-xs font-medium ${colors.bg} ${colors.text}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-xs text-slate-300 flex items-center">
                          <span className={`${colors.text} mr-2`}>▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <a className={project.codeLink ? '' : 'pointer-events-none opacity-50'} href={project.codeLink || '#'} target="_blank" rel="noopener noreferrer">
                      <button disabled={!project.codeLink} className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg border ${colors.border} ${colors.text} hover:bg-slate-700 transition-all duration-300`}>
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </button>
                    </a>
                    <a className={project.liveLink ? '' : 'pointer-events-none opacity-50'} href={project.liveLink || '#'} target="_blank" rel="noopener noreferrer">
                      <button disabled={!project.liveLink} className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg ${colors.bg} ${colors.text} hover:opacity-80 transition-all duration-300`}>
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="bg-slate-800 rounded-lg p-8 border border-green-400/20 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            <span className="text-white">{'// '}</span>More projects on GitHub
          </h3>
          <p className="text-slate-300 mb-6">
            Check out my GitHub profile for more projects.
          </p>
          <a
            href="https://github.com/youssef1129"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center space-x-2">
                <Github size={20} />
                <span>View All Projects</span>
              </span>
            </button>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;