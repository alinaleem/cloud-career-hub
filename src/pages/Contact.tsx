
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const Contact = () => {
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

  const socialMediaContacts = [
    {
      name: 'Email',
      handle: 'abhiranda21@gmail.com',
      url: 'mailto:abhiranda21@gmail.com',
      icon: Mail,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
      borderColor: 'border-blue-400/30'
    },
    {
      name: 'X (Twitter)',
      handle: 'ABHiranda',
      url: 'https://twitter.com/ABHiranda',
      icon: Twitter,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
      borderColor: 'border-blue-400/30'
    },
    {
      name: 'GitHub',
      handle: 'ABHiranda',
      url: 'https://github.com/ABHiranda',
      icon: Github,
      color: 'text-gray-300',
      bgColor: 'bg-gray-400/20',
      borderColor: 'border-gray-400/30'
    },
    {
      name: 'YouTube',
      handle: 'Cybersona',
      url: 'https://youtube.com/@Cybersona',
      icon: Youtube,
      color: 'text-red-500',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/30'
    },
    {
      name: 'LinkedIn',
      handle: 'in/abhiranda21',
      url: 'https://linkedin.com/in/abhiranda21',
      icon: Linkedin,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      name: 'Instagram',
      handle: 'Dulara Abhiranda',
      url: 'https://instagram.com/dulara_abhiranda',
      icon: Instagram,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/20',
      borderColor: 'border-pink-400/30'
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
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">Connect</h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Connect with me through social media and other communication channels.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-300">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                    name="name"
                    placeholder="Enter your name here (e.g. Dulara Abhiranda)"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-14 text-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email here (e.g. contact@abhiranda.com)"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-14 text-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <Input
                    name="subject"
                    placeholder="Enter your subject here (e.g. Just saying Hi!)"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 h-14 text-lg"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Enter your message here (e.g. Hello Abhiranda! I'd like to say Hi!)"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 resize-none text-lg"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors h-14 text-lg font-medium"
                >
                  Submit
                </Button>
              </form>
            </div>

            {/* Social Media Contact Cards */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-300">Social Media</h2>
              <div className="grid grid-cols-2 gap-6">
                {socialMediaContacts.map((contact, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700 hover:border-gray-500 transition-all duration-300 group hover:scale-105 hover:shadow-2xl cursor-pointer"
                    onClick={() => window.open(contact.url, '_blank')}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 ${contact.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className={`w-8 h-8 ${contact.color} group-hover:shadow-lg transition-all duration-300`} />
                      </div>
                      
                      <h3 className={`font-bold text-lg mb-2 text-white group-hover:${contact.color} transition-colors`}>
                        {contact.name}
                      </h3>
                      
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        {contact.handle}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700 rounded-lg p-8 max-w-2xl mx-auto hover:border-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Additional Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">+94 (77) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-20 pb-10">
            <div className="space-y-2">
              <p className="text-gray-400">Copyright © 2024 Dulara Abhiranda</p>
              <p className="text-gray-500 text-sm">Version 2.0 | Built with HTML | CSS | JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
