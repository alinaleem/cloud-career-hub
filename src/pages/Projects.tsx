
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'Kubernetes Cluster Automation',
      description: 'Automated Kubernetes cluster deployment and management using Terraform and Ansible. Includes monitoring, logging, and security configurations.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop',
      technologies: ['Kubernetes', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'CI/CD Pipeline with GitLab',
      description: 'Complete CI/CD pipeline implementation with automated testing, security scanning, and multi-environment deployments.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop',
      technologies: ['GitLab CI', 'Docker', 'AWS ECS', 'SonarQube', 'Trivy'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Infrastructure as Code',
      description: 'AWS infrastructure provisioning using Terraform with best practices for scalability, security, and cost optimization.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
      technologies: ['Terraform', 'AWS', 'CloudFormation', 'Python', 'Boto3'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Monitoring Stack',
      description: 'Complete observability solution with metrics, logging, and alerting for microservices architecture.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'AlertManager'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Projects</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-200"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
