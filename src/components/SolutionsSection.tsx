
const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-padding section-spacing bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Solutions</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            How Probitas delivers faster, more reliable RERA consultancy services
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Solution Card 1 */}
          <div className="bg-white rounded-xl shadow-custom p-6 transition duration-300 hover:shadow-xl service-card">
            <div className="flex items-center justify-center mb-6">
              <div className="service-icon bg-blue-50 rounded-full p-4 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Expert Regional Teams</h3>
            <p className="text-gray-700 text-center">
              We employ salaried experts with deep RERA knowledge who are assigned by region, ensuring 
              specialized local expertise for your projects.
            </p>
          </div>
          
          {/* Solution Card 2 */}
          <div className="bg-white rounded-xl shadow-custom p-6 transition duration-300 hover:shadow-xl service-card">
            <div className="flex items-center justify-center mb-6">
              <div className="service-icon bg-blue-50 rounded-full p-4 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Direct Authority Assistance</h3>
            <p className="text-gray-700 text-center">
              We provide direct assistance with authorities, bypassing intermediaries and 
              ensuring your concerns reach the right officials promptly.
            </p>
          </div>
          
          {/* Solution Card 3 */}
          <div className="bg-white rounded-xl shadow-custom p-6 transition duration-300 hover:shadow-xl service-card">
            <div className="flex items-center justify-center mb-6">
              <div className="service-icon bg-blue-50 rounded-full p-4 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Transparent Fixed Fees</h3>
            <p className="text-gray-700 text-center">
              We charge a fixed, affordable percentage that is consistently lower than what private 
              agents demand, with clear terms and no hidden costs.
            </p>
          </div>
        </div>
        
        {/* Process Flow */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Streamlined Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-custom p-6 h-full">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold">1</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-center">Initial Consultation</h4>
                <p className="text-gray-600 text-center">
                  We assess your project's needs and specific RERA requirements
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-custom p-6 h-full">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold">2</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-center">Expert Assignment</h4>
                <p className="text-gray-600 text-center">
                  We assign regional specialists familiar with your local RERA office
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-custom p-6 h-full">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold">3</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-center">Direct Execution</h4>
                <p className="text-gray-600 text-center">
                  We engage directly with authorities, bypassing inefficient intermediaries
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-custom p-6 h-full">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold">4</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-center">Fast Resolution</h4>
                <p className="text-gray-600 text-center">
                  We deliver timely solutions with transparent progress updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
