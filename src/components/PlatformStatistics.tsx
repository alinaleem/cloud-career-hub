
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, Code, Trophy } from 'lucide-react';

const PlatformStatistics = () => {
  const platforms = [
    {
      name: 'GitHub',
      username: 'ABHiranda',
      stats: {
        repositories: '45+',
        followers: '120+',
        contributions: '500+',
        stars: '80+'
      },
      profileUrl: 'https://github.com/ABHiranda',
      icon: Github,
      color: 'text-gray-300',
      hoverColor: 'group-hover:text-gray-100',
      borderColor: 'hover:border-gray-400',
      bgGradient: 'from-gray-900/80 to-gray-800/50'
    },
    {
      name: 'TryHackMe',
      username: 'CyberSona',
      stats: {
        rank: 'Top 5%',
        points: '15,000+',
        badges: '25+',
        streak: '45 days'
      },
      profileUrl: 'https://tryhackme.com/p/CyberSona',
      icon: Shield,
      color: 'text-green-400',
      hoverColor: 'group-hover:text-green-300',
      borderColor: 'hover:border-green-400',
      bgGradient: 'from-green-900/20 to-gray-800/50'
    },
    {
      name: 'HackTheBox',
      username: 'ABHiranda',
      stats: {
        rank: 'Hacker',
        points: '8,500+',
        machines: '35+',
        challenges: '20+'
      },
      profileUrl: 'https://app.hackthebox.com/profile/ABHiranda',
      icon: Code,
      color: 'text-green-500',
      hoverColor: 'group-hover:text-green-400',
      borderColor: 'hover:border-green-500',
      bgGradient: 'from-green-900/20 to-gray-800/50'
    },
    {
      name: 'HackerRank',
      username: 'abhiranda21',
      stats: {
        stars: '4 Star',
        problems: '150+',
        rank: 'Gold',
        score: '2,400+'
      },
      profileUrl: 'https://www.hackerrank.com/abhiranda21',
      icon: Trophy,
      color: 'text-yellow-400',
      hoverColor: 'group-hover:text-yellow-300',
      borderColor: 'hover:border-yellow-400',
      bgGradient: 'from-yellow-900/20 to-gray-800/50'
    }
  ];

  return (
    <div className="space-y-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">Platform Statistics</h2>
        <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
          My coding journey and achievements across various development and cybersecurity platforms
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {platforms.map((platform, index) => (
          <Card
            key={index}
            className={`bg-gradient-to-br ${platform.bgGradient} border-gray-700 ${platform.borderColor} transition-all duration-300 group hover:scale-105 cursor-pointer`}
            onClick={() => window.open(platform.profileUrl, '_blank')}
          >
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon className={`w-10 h-10 ${platform.color} ${platform.hoverColor} transition-colors`} />
                </div>
              </div>
              
              <h3 className={`font-bold text-2xl mb-2 text-white ${platform.hoverColor} transition-colors`}>
                {platform.name}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors">
                @{platform.username}
              </p>
              
              <div className="space-y-3 mb-6">
                {Object.entries(platform.stats).map(([key, value], statIndex) => (
                  <div key={statIndex} className="flex justify-between items-center">
                    <span className="text-gray-400 capitalize text-sm">{key}:</span>
                    <Badge className={`${platform.color.replace('text-', 'bg-').replace('400', '400/20')} ${platform.color} border-current/30 group-hover:scale-105 transition-transform`}>
                      {value}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className={`w-full border-gray-600 text-gray-300 hover:bg-gray-700 group-hover:border-current group-hover:${platform.color} transition-all`}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(platform.profileUrl, '_blank');
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Profile
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlatformStatistics;
