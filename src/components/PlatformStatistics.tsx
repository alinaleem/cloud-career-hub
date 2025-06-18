
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const PlatformStatistics = () => {
  const platforms = [
    {
      name: 'GitHub',
      icon: <Github className="w-8 h-8" />,
      color: 'border-purple-500',
      stats: [
        { label: 'REPOSITORIES', value: '15' },
        { label: 'COMMITS', value: '28' },
        { label: 'CONTRIBUTIONS', value: '342', sublabel: '705' },
        { label: 'FOLLOWERS', value: '24' }
      ],
      profileUrl: 'https://github.com/yourusername'
    },
    {
      name: 'TryHackMe',
      icon: (
        <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">
          THM
        </div>
      ),
      color: 'border-red-500',
      stats: [
        { label: 'RANK', value: '12,458' },
        { label: 'ROOMS', value: '37' },
        { label: 'BADGES', value: '8' },
        { label: 'STREAK', value: '15' }
      ],
      profileUrl: 'https://tryhackme.com/p/yourusername'
    },
    {
      name: 'HackTheBox',
      icon: (
        <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">
          HTB
        </div>
      ),
      color: 'border-green-500',
      stats: [
        { label: 'LEVEL', value: 'Hacker' },
        { label: 'SYSTEMS', value: '18' },
        { label: 'CHALLENGES', value: '12' },
        { label: 'POINTS', value: '250' }
      ],
      profileUrl: 'https://app.hackthebox.com/profile/yourid'
    },
    {
      name: 'HackerRank',
      icon: (
        <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">
          HR
        </div>
      ),
      color: 'border-green-600',
      stats: [
        { label: 'RANK', value: '5 ★' },
        { label: 'PROBLEMS', value: '125' },
        { label: 'CERTIFICATES', value: '3' },
        { label: 'SKILLS', value: 'Python ★★★★★' }
      ],
      profileUrl: 'https://hackerrank.com/yourusername'
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Platform Statistics</h2>
        <p className="text-gray-400 text-lg">My performance and activity across various tech platforms</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {platforms.map((platform, index) => (
          <Card key={index} className={`bg-gray-900/50 border-2 ${platform.color} hover:border-opacity-80 transition-all duration-300`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  {platform.icon}
                  <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {platform.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                      {stat.sublabel && (
                        <div className="text-sm text-gray-400 font-normal">{stat.sublabel}</div>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                asChild
              >
                <a href={platform.profileUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlatformStatistics;
