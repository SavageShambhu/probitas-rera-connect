
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-spacing bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Probitas</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in navigating RERA regulations with integrity and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Our Commitment to Excellence</h3>
            <p className="text-gray-700 mb-4">
              At Probitas, we serve as the crucial bridge between builders and the government for projects registered 
              under MahaRERA. Our name, derived from the Latin word for "honesty" and "integrity," 
              reflects our core values and mission: To Build The Trust.
            </p>
            <p className="text-gray-700 mb-6">
              We've created a unique client-employee connection model where each client's project is assigned to a 
              dedicated employee who handles every aspect of the RERA registration process. This ensures accountability, 
              consistent communication, and personalized service throughout your project lifecycle.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="bg-blue-50 rounded-full p-2 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Dedicated employee per project</span>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-50 rounded-full p-2 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Real-time progress tracking</span>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-50 rounded-full p-2 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Complete document handling</span>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-50 rounded-full p-2 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Tiered service packages</span>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary-light mt-2">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
                  alt="Probitas Office Building" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-lg p-6 shadow-lg hidden md:block">
                <p className="text-white font-bold text-xl">Trusted</p>
                <p className="text-white text-sm">by builders across Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
