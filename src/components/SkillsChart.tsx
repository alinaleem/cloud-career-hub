
import { useEffect, useRef } from 'react';

const SkillsChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const skills = [
    { name: 'AWS', level: 95 },
    { name: 'Kubernetes', level: 90 },
    { name: 'Docker', level: 95 },
    { name: 'Terraform', level: 88 },
    { name: 'Jenkins', level: 85 },
    { name: 'Python', level: 82 },
    { name: 'Ansible', level: 80 },
    { name: 'Monitoring', level: 87 }
  ];

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 400;

    const drawChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = 80;
      const barSpacing = 20;
      const maxHeight = 300;
      const startX = 50;
      const startY = canvas.height - 50;

      skills.forEach((skill, index) => {
        const x = startX + (barWidth + barSpacing) * index;
        const barHeight = (skill.level / 100) * maxHeight;
        
        // Draw bar
        const gradient = ctx.createLinearGradient(0, startY, 0, startY - barHeight);
        gradient.addColorStop(0, '#3b82f6');
        gradient.addColorStop(1, '#1d4ed8');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, startY - barHeight, barWidth, barHeight);
        
        // Draw skill name
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(skill.name, x + barWidth / 2, startY + 20);
        
        // Draw percentage
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(`${skill.level}%`, x + barWidth / 2, startY - barHeight - 10);
      });
    };

    // Animate bars
    let currentFrame = 0;
    const totalFrames = 60;
    
    const animate = () => {
      if (currentFrame < totalFrames) {
        const progress = currentFrame / totalFrames;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const barWidth = 80;
        const barSpacing = 20;
        const maxHeight = 300;
        const startX = 50;
        const startY = canvas.height - 50;

        skills.forEach((skill, index) => {
          const x = startX + (barWidth + barSpacing) * index;
          const targetHeight = (skill.level / 100) * maxHeight;
          const barHeight = targetHeight * progress;
          
          // Draw bar
          const gradient = ctx.createLinearGradient(0, startY, 0, startY - barHeight);
          gradient.addColorStop(0, '#3b82f6');
          gradient.addColorStop(1, '#1d4ed8');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(x, startY - barHeight, barWidth, barHeight);
          
          // Draw skill name
          ctx.fillStyle = '#ffffff';
          ctx.font = '12px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(skill.name, x + barWidth / 2, startY + 20);
          
          // Draw percentage
          if (progress > 0.8) {
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 14px sans-serif';
            ctx.fillText(`${skill.level}%`, x + barWidth / 2, startY - barHeight - 10);
          }
        });
        
        currentFrame++;
        requestAnimationFrame(animate);
      }
    };

    setTimeout(() => animate(), 500);
  }, []);

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      <div className="flex justify-center">
        <canvas
          ref={chartRef}
          className="max-w-full h-auto border border-gray-700 rounded-lg bg-gray-900/50"
        />
      </div>
    </div>
  );
};

export default SkillsChart;
