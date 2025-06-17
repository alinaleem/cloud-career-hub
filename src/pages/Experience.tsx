
import { useEffect, useState } from 'react';
import TimelineExperience from '../components/TimelineExperience';

const Experience = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Experience</h1>
          <TimelineExperience />
        </div>
      </div>
    </div>
  );
};

export default Experience;
