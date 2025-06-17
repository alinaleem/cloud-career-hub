
import { useEffect, useState } from 'react';
import SkillsChart from '../components/SkillsChart';
import CertificationsList from '../components/CertificationsList';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-300">My Story</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate DevOps Engineer with expertise in cloud infrastructure, 
                automation, and modern software delivery practices. My journey began with 
                system administration and evolved into architecting scalable, reliable 
                cloud-native solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I specialize in AWS cloud services, containerization with Docker and Kubernetes, 
                Infrastructure as Code using Terraform, and building robust CI/CD pipelines 
                that accelerate development cycles while maintaining security and reliability.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not automating infrastructure or optimizing deployments, you'll find me 
                contributing to open-source projects, writing technical blogs, or exploring 
                the latest trends in cloud computing and DevOps practices.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-300">Core Competencies</h2>
              <div className="space-y-4">
                {[
                  'Cloud Architecture & AWS Services',
                  'Container Orchestration (Kubernetes, Docker)',
                  'Infrastructure as Code (Terraform, CloudFormation)',
                  'CI/CD Pipeline Development',
                  'Monitoring & Observability (Prometheus, Grafana)',
                  'Security & Compliance Automation',
                  'Scripting & Automation (Python, Bash)',
                  'Configuration Management (Ansible, Chef)'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SkillsChart />
          <CertificationsList />
        </div>
      </div>
    </div>
  );
};

export default About;
