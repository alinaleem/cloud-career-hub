
const TimelineExperience = () => {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead DevOps initiatives for cloud migration and infrastructure automation. Architected and implemented scalable Kubernetes clusters serving 10M+ users daily.',
      achievements: [
        'Reduced deployment time by 80% through automated CI/CD pipelines',
        'Designed multi-region AWS infrastructure with 99.99% uptime',
        'Implemented Infrastructure as Code reducing provisioning time by 70%'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudScale Inc.',
      period: '2020 - 2022',
      description: 'Responsible for containerization, monitoring, and automation of development workflows. Built and maintained CI/CD pipelines for multiple microservices.',
      achievements: [
        'Containerized 20+ legacy applications using Docker and Kubernetes',
        'Implemented comprehensive monitoring with Prometheus and Grafana',
        'Automated infrastructure provisioning using Terraform and Ansible'
      ]
    },
    {
      title: 'System Administrator',
      company: 'StartupTech',
      period: '2018 - 2020',
      description: 'Managed on-premise and cloud infrastructure, ensuring system reliability and security. Introduced DevOps practices and automation tools.',
      achievements: [
        'Migrated legacy systems to AWS cloud infrastructure',
        'Reduced server downtime by 60% through proactive monitoring',
        'Implemented backup and disaster recovery procedures'
      ]
    },
    {
      title: 'Junior System Administrator',
      company: 'LocalTech Solutions',
      period: '2017 - 2018',
      description: 'Entry-level position managing Linux servers and network infrastructure. Gained foundational knowledge in system administration and scripting.',
      achievements: [
        'Automated routine tasks using Bash and Python scripts',
        'Maintained 99.5% server uptime across production environments',
        'Supported team with server maintenance and user support'
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-600 transform md:-translate-x-0.5"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black transform -translate-x-2 md:-translate-x-2 z-10 transition-all duration-300 hover:bg-blue-400 hover:scale-125"></div>

            {/* Content */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{exp.title}</h3>
                  <span className="text-sm text-gray-400 mt-1 md:mt-0 group-hover:text-gray-300 transition-colors duration-300">{exp.period}</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300">{exp.company}</h4>
                <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{exp.description}</p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start group-hover:text-gray-200 transition-colors duration-300">
                        <span className="text-blue-400 mr-2 mt-1 group-hover:text-blue-300 transition-colors duration-300">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineExperience;
