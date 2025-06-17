
import { useEffect, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const educationData = [
    {
      title: "Bachelor of Information and Communication Technology",
      institution: "University of Sri Jayewardenepura",
      period: "OCT 2022 - Present",
      location: "Sri Lanka",
      status: "In Progress",
      statusColor: "text-blue-400",
      logo: "/lovable-uploads/038e3c35-c822-4862-858e-fc218626d3d0.png"
    },
    {
      title: "Cisco Certified Network Academy",
      institution: "Sri Lanka Institute of Information Technology",
      period: "Jun 2024 - Present",
      location: "Sri lanka",
      status: "In Progress",
      statusColor: "text-blue-400",
      logo: "/lovable-uploads/038e3c35-c822-4862-858e-fc218626d3d0.png"
    },
    {
      title: "GCE Advanced Level",
      institution: "Ch/Senanayake National College",
      period: "Apr 2018 - Aug 2020",
      location: "Sri Lanka",
      status: "Completed",
      statusColor: "text-green-400",
      logo: "/lovable-uploads/038e3c35-c822-4862-858e-fc218626d3d0.png"
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
      </div>
    </div>
  );
};

export default Education;
