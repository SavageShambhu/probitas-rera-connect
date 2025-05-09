
import { Button } from "@/components/ui/button";

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding section-spacing bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="text-primary">Probitas</span>?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            How we deliver exceptional value compared to traditional approaches
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="bg-white rounded-xl shadow-custom p-6 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Specialized Expertise</h3>
                  <p className="text-gray-700">
                    Unlike generalist SROs, we focus exclusively on RERA compliance, employing experts with 
                    deep understanding of regulations and regional variations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-custom p-6 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reliable Accountability</h3>
                  <p className="text-gray-700">
                    Our salaried team members are directly accountable to you and our organization, 
                    ensuring consistent quality and responsibility for results.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-custom p-6">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-700">
                    We operate on a clear and consistent fee structure based on a fixed percentage, 
                    eliminating the unpredictable costs associated with individual agents.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-custom overflow-hidden">
            <div className="bg-primary text-white p-4 text-center">
              <h3 className="text-xl font-bold">How We Compare</h3>
            </div>
            
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Feature</th>
                      <th className="text-center py-2 px-4">Probitas</th>
                      <th className="text-center py-2 px-4">Traditional SRO/Agent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Expertise</td>
                      <td className="text-center py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-1">Specialized</span>
                      </td>
                      <td className="text-center py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="ml-1">General</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Response Time</td>
                      <td className="text-center py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-1">Fast</span>
                      </td>
                      <td className="text-center py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="ml-1">Slow</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Direct Authority Access</td>
                      <td className="text-center py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-1">Yes</span>
                      </td>
                      <td className="text-center py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="ml-1">Limited</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Fee Structure</td>
                      <td className="text-center py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-1">Fixed %</span>
                      </td>
                      <td className="text-center py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="ml-1">Variable</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Accountability</td>
                      <td className="text-center py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-1">High</span>
                      </td>
                      <td className="text-center py-3 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="ml-1">Low</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-center">
                <Button className="bg-primary hover:bg-primary-light">
                  <a href="#contact">Get Started Today</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
