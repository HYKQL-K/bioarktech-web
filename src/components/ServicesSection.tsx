import { Service } from '@/types';

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  // Filter services that should be shown in the service section
  const visibleServices = services.filter(service => service.showInServiceSection);

  return (
    <div id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Partner with our expert team for all your research needs and specialized experimental support
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {visibleServices.map(service => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col max-w-xs"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {service.description}
                </p>
              </div>
              <button className="mt-auto text-blue-600 hover:text-blue-800 font-medium text-sm transition-all duration-200 hover:scale-105 hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
