
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, CheckCircle, Target } from 'lucide-react';

const CertificationsList = () => {
  const completedCertifications = [
    {
      name: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      badge: 'https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png',
      status: 'completed'
    },
    {
      name: 'AWS Certified DevOps Engineer - Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      badge: 'https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png',
      status: 'completed'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      badge: 'https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png',
      status: 'completed'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '2022',
      badge: 'https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png',
      status: 'completed'
    }
  ];

  const upcomingCertifications = [
    {
      name: 'AWS Certified Security - Specialty',
      issuer: 'Amazon Web Services',
      targetDate: 'Q2 2024',
      badge: 'https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png',
      status: 'upcoming',
      progress: 75
    },
    {
      name: 'Certified Kubernetes Security Specialist (CKS)',
      issuer: 'Cloud Native Computing Foundation',
      targetDate: 'Q3 2024',
      badge: 'https://images.credly.com/size/340x340/images/9945dfcb-1cca-4529-85e6-db1be3782210/kubernetes-security-specialist-logo2.png',
      status: 'upcoming',
      progress: 45
    },
    {
      name: 'Google Cloud Professional DevOps Engineer',
      issuer: 'Google Cloud',
      targetDate: 'Q4 2024',
      badge: 'https://images.credly.com/size/340x340/images/b2cc1362-8572-4abb-a36c-de3f0841e80a/Professional_Cloud_DevOps_Engineer.png',
      status: 'planned',
      progress: 20
    }
  ];

  return (
    <div className="space-y-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">AWS Certifications</h2>
        <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
          My journey of continuous learning and professional development in cloud technologies
        </p>
      </div>

      {/* Completed Certifications */}
      <div className="mb-20">
        <div className="flex items-center justify-center mb-12">
          <CheckCircle className="w-8 h-8 text-green-400 mr-4" />
          <h3 className="text-3xl md:text-4xl font-bold text-white">Completed Certifications</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {completedCertifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-700 hover:border-green-400 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src={cert.badge}
                    alt={cert.name}
                    className="w-28 h-28 mx-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <h4 className="font-bold text-lg mb-3 text-white group-hover:text-green-400 transition-colors leading-tight">
                  {cert.name}
                </h4>
                
                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                
                <Badge className="bg-green-400/20 text-green-400 border-green-400/30">
                  Earned {cert.date}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Certifications */}
      <div>
        <div className="flex items-center justify-center mb-12">
          <Target className="w-8 h-8 text-blue-400 mr-4" />
          <h3 className="text-3xl md:text-4xl font-bold text-white">Upcoming Certifications</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingCertifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-700 hover:border-blue-400 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src={cert.badge}
                    alt={cert.name}
                    className="w-28 h-28 mx-auto rounded-lg shadow-lg opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <h4 className="font-bold text-lg mb-3 text-white group-hover:text-blue-400 transition-colors leading-tight">
                  {cert.name}
                </h4>
                
                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-blue-400 font-medium">{cert.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${cert.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <Badge
                  className={`${
                    cert.status === 'upcoming'
                      ? 'bg-blue-400/20 text-blue-400 border-blue-400/30'
                      : 'bg-purple-400/20 text-purple-400 border-purple-400/30'
                  }`}
                >
                  Target: {cert.targetDate}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsList;
