
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
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Hi, everyone!
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12">
              I'm a DevOps Engineer.
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
              Welcome to my profile. I'm a cloud infrastructure and automation enthusiast passionate about 
              DevOps practices, containerization, CI/CD pipelines, and building scalable systems that drive innovation.
            </p>

            <div className="mb-16">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                alt="DevOps Engineer"
                className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full mx-auto border-4 border-gray-600 shadow-2xl"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
              <div className="flex items-center gap-6">
                <span className="text-xl text-gray-400">Seeking contact?</span>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-black hover:bg-gray-200 transition-colors px-8 py-4 rounded-full font-medium text-lg"
                >
                  Let's connect! 💬
                </Button>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="text-xl text-gray-400">Download Resume:</span>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black transition-colors px-8 py-4 rounded-full font-medium text-lg"
                >
                  Download Resume 📄
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 text-center">About Me</h1>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-300">My Story</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm a passionate DevOps Engineer with expertise in cloud infrastructure, 
                automation, and modern software delivery practices. My journey began with 
                system administration and evolved into architecting scalable, reliable 
                cloud-native solutions.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I specialize in AWS cloud services, containerization with Docker and Kubernetes, 
                Infrastructure as Code using Terraform, and building robust CI/CD pipelines 
                that accelerate development cycles while maintaining security and reliability.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                When I'm not automating infrastructure or optimizing deployments, you'll find me 
                contributing to open-source projects, writing technical blogs, or exploring 
                the latest trends in cloud computing and DevOps practices.
              </p>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-300">Core Competencies</h2>
              <div className="space-y-6">
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
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-lg md:text-xl text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="technical-skills" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <SkillsChart />
        </div>
      </section>

      {/* AWS Certifications Section */}
      <section id="aws-certifications" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <CertificationsList />
        </div>
      </section>

      {/* Platform Statistics Section */}
      <section id="platform-statistics" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <PlatformStatistics />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">Academic Education</h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Discover the stages of my academic learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {educationData.map((edu, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-gray-500 transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-10 h-10 text-blue-400" />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {edu.title}
                      </h3>
                      
                      <h4 className="text-lg md:text-xl font-semibold text-gray-300">
                        {edu.institution}
                      </h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-center text-gray-400">
                          <Calendar className="w-5 h-5 mr-3" />
                          {edu.period}
                        </div>
                        <div className="flex items-center justify-center text-gray-400">
                          <MapPin className="w-5 h-5 mr-3" />
                          {edu.location}
                        </div>
                      </div>
                      
                      <div className={`inline-block px-4 py-2 rounded-full font-medium ${edu.statusColor} bg-gray-800`}>
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
      <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 text-center">Experience</h1>
          <TimelineExperience />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 text-center">Projects</h1>
          
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      className="bg-white text-black hover:bg-gray-200"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-2" />
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
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 text-center">Get In Touch</h1>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-300">Let's Connect</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in the DevOps and cloud infrastructure space. Feel free 
                to reach out if you'd like to connect!
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <span className="text-lg text-gray-300">devops@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gray-400" />
                  <span className="text-lg text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400" />
                  <span className="text-lg text-gray-300">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="flex space-x-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 w-12 h-12"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 w-12 h-12"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 w-12 h-12"
                  asChild
                >
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-6 h-6" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-14 text-lg"
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
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-14 text-lg"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-14 text-lg"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={8}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 resize-none text-lg"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 transition-colors h-14 text-lg font-medium"
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
