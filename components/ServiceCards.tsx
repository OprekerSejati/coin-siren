import Image from 'next/image';

const services = [
  {
    id: 1,
    title: '해외 마케팅',
    icon: '/marketing-icon.svg',
  },
  {
    id: 2,
    title: '퍼블리셔',
    icon: '/publisher-icon.svg',
  },
  {
    id: 3,
    title: '캐드웰(제도사)',
    icon: '/cad-icon.svg',
  },
  {
    id: 4,
    title: '해외 세일즈',
    icon: '/sales-icon.svg',
  },
  {
    id: 5,
    title: '해외 CS',
    icon: '/cs-icon.svg',
  },
];

const ServiceCards = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-lg">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
