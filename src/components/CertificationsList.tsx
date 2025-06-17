
import { Badge } from '@/components/ui/badge';

const CertificationsList = () => {
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      badge: 'https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png'
    },
    {
      name: 'AWS Certified DevOps Engineer - Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      badge: 'https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      badge: 'https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '2022',
      badge: 'https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png'
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">AWS Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-gray-500 transition-colors"
          >
            <img
              src={cert.badge}
              alt={cert.name}
              className="w-24 h-24 mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-bold text-sm mb-2 text-white">{cert.name}</h3>
            <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
            <Badge variant="secondary" className="text-xs">
              {cert.date}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsList;
