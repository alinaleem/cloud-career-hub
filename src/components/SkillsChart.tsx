
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
          <div key={categoryIndex} className="space-y-6">
            <h3 className="text-xl font-bold text-gray-300 mb-4">
              {category.title}
            </h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-gray-700"
                  />
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
