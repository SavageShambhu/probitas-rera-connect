
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="max-w-xl space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-primary md:text-7xl">
                PROBITAS
                <span className="text-2xl md:text-3xl font-medium italic mt-2 block text-primary">
                  To Build The Trust
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mt-4">
                Your complete RERA registration solution - bridging builders and government with expert support,
                dedicated project management, and transparent pricing.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Seamless RERA registration with minimal client involvement</li>
                <li>Dedicated employee assigned to each client project</li>
                <li>Flexible tiered pricing for businesses of all sizes</li>
                <li>Direct government access eliminating intermediaries</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary-light text-lg py-6 px-8">
                  <a href="#contact">Get Started</a>
                </Button>
                <Button variant="outline" className="text-primary border-primary hover:bg-blue-50 text-lg py-6 px-8">
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative h-64 sm:h-80 md:h-96 aspect-square rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" alt="Modern Real Estate Building" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="container mx-auto px-4 md:px-8 mt-16">
        <div className="bg-white rounded-xl shadow-custom p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Trusted Expertise</h3>
              <p className="text-gray-600">Regional salaried experts with deep RERA knowledge</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Faster Resolution</h3>
              <p className="text-gray-600">Direct assistance cutting through bureaucratic delays</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Tiered Pricing</h3>
              <p className="text-gray-600">Flexible packages for projects of any size</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Direct Communication</h3>
              <p className="text-gray-600">Real-time updates and dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
