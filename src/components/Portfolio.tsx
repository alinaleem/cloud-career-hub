
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, GraduationCap, Calendar, ExternalLink } from 'lucide-react';
import SkillsChart from './SkillsChart';
import CertificationsList from './CertificationsList';
import TimelineExperience from './TimelineExperience';
import PlatformStatistics from './PlatformStatistics';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const educationData = [
    {
      title: "Bachelor of Information and Communication Technology",
      institution: "University of Sri Jayewardenepura",
      period: "OCT 2022 - Present",
      location: "Sri Lanka",
      status: "In Progress",
      statusColor: "text-blue-400",
    },
    {
      title: "Cisco Certified Network Academy",
      institution: "Sri Lanka Institute of Information Technology",
      period: "Jun 2024 - Present",
      location: "Sri lanka",
      status: "In Progress",
      statusColor: "text-blue-400",
    },
    {
      title: "GCE Advanced Level",
      institution: "Ch/Senanayake National College",
      period: "Apr 2018 - Aug 2020",
      location: "Sri Lanka",
      status: "Completed",
      statusColor: "text-green-400",
    }
  ];

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
    <div className="min-h-screen">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Hi, everyone!
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              I'm a DevOps Engineer.
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Welcome to my profile. I'm a cloud infrastructure and automation enthusiast passionate about 
              DevOps practices, containerization, CI/CD pipelines, and building scalable systems that drive innovation.
            </p>

            <div className="mb-12">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                alt="DevOps Engineer"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-gray-600 shadow-2xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">Seeking contact?</span>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 rounded-full font-medium"
                >
                  Let's connect! 💬
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-400">Download Resume:</span>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black transition-colors px-6 py-3 rounded-full font-medium"
                >
                  Download Resume 📄
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen pt-24 px-6">
        <div className="max-w-6xl mx-auto">
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
          <PlatformStatistics />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Education</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the stages of my academic learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {educationData.map((edu, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-gray-500 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-blue-400" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {edu.title}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">
                        {edu.institution}
                      </h4>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                      
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${edu.statusColor} bg-gray-800`}>
                        {edu.status}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Experience</h1>
          <TimelineExperience />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen pt-24 px-6">
        <div className="max-w-6xl mx-auto">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Get In Touch</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-300">Let's Connect</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in the DevOps and cloud infrastructure space. Feel free 
                to reach out if you'd like to connect!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">devops@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  asChild
                >
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
