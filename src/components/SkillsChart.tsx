
import { Progress } from '@/components/ui/progress';

const SkillsChart = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS (Amazon Web Services)", level: 95 }
      ]
    },
    {
      title: "Containerization & Orchestration", 
      skills: [
        { name: "ECS", level: 88 },
        { name: "Kubernetes", level: 85 }
      ]
    },
    {
      title: "CI/CD & DevOps Tools",
      skills: [
        { name: "CircleCI", level: 92 },
        { name: "AWS CodePipeline", level: 90 },
        { name: "GitHub CI/CD", level: 88 },
        { name: "Harness", level: 85 }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 88 },
        { name: "Pulumi", level: 82 }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "AWS CloudWatch", level: 90 },
        { name: "Dynatrace", level: 85 },
        { name: "Datadog", level: 80 }
      ]
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      <div className="w-full h-1 bg-blue-500 mx-auto mb-8"></div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex} 
            className="space-y-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold text-gray-300 mb-4 group-hover:text-white transition-colors">
              {category.title}
            </h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300 group-hover:text-gray-100 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-700 group-hover:bg-gray-600 transition-colors"
                    />
                    <div 
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 group-hover:from-blue-400 group-hover:to-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/30"
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
  );
};

export default SkillsChart;
