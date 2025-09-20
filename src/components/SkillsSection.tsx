import React from 'react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'cyan',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript/JavaScript', level: 94 },
        { name: 'Tailwind CSS/SCSS', level: 92 },
        { name: 'Redux/RTK/Zustand', level: 90 }
      ]
    },
    {
      title: 'Backend',
      color: 'green',
      skills: [
        { name: 'Node.js', level: 86 },
        { name: 'Nest.js/Express.js', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 82 },
      ]
    },
    {
      title: 'Database',
      color: 'purple',
      skills: [
        { name: 'SQL/NoSQL', level: 89 },
        { name: 'PostgreSQL/SqlServer', level: 86 },
        { name: 'MongoDB', level: 85 },
        { name: 'Supabase/firebase', level: 88 }
      ]
    },
    {
      title: 'DevOps and version control',
      color: 'yellow',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 70 },
        { name: 'Github/Gitlab', level: 87 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      cyan: 'border-cyan-400/20 text-cyan-400',
      green: 'border-green-400/20 text-green-400',
      purple: 'border-purple-400/20 text-purple-400',
      yellow: 'border-yellow-400/20 text-yellow-400'
    };
    return colorMap[color] || 'border-gray-400/20 text-gray-400';
  };

  const getProgressBarColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      cyan: 'bg-cyan-400',
      green: 'bg-green-400',
      purple: 'bg-purple-400',
      yellow: 'bg-yellow-400'
    };
    return colorMap[color] || 'bg-gray-400';
  };

  return (
    <section className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-7">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            <span className="text-purple-400">const</span>{' '}
            <span className="text-cyan-400">skills</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-white">{'['}</span>
            <span className="text-xl text-slate-300 mb-4">
              <span className="text-green-400 animate-pulse">
                <span className="text-yellow-400">  ...technologies_I_work_with  </span>
              </span>
            </span>
            <span className="text-white">{']; '}</span>
          </h2>
        </div>

        <div style={{
          maxHeight: 'calc(100dvh - 200px)',
        }} className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 max-xl:overflow-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`bg-slate-800 p-5 rounded-lg border ${getColorClasses(category.color)} hover:border-opacity-50 transition-all duration-300`}
            >
              <h3 className={`text-2xl font-semibold mb-6 ${category.color === 'cyan' ? 'text-cyan-400' :
                category.color === 'green' ? 'text-green-400' :
                  category.color === 'purple' ? 'text-purple-400' : 'text-yellow-400'}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressBarColor(category.color)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;