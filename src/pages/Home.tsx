
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
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
              <Link to="/contact">
                <Button className="bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 rounded-full font-medium">
                  Let's connect! 💬
                </Button>
              </Link>
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
    </div>
  );
};

export default Home;
