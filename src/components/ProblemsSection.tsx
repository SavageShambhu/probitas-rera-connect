
const ProblemsSection = () => {
  return (
    <section id="problems" className="section-padding section-spacing bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Problems We <span className="text-primary">Solve</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the key challenges faced by builders in the RERA registration process
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Real estate professional reviewing documents with concern" 
              className="w-full h-auto"
            />
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-custom p-6 mb-8">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Complex Registration Process</h3>
                  <p className="text-gray-700">
                    Many builders struggle to navigate RERA's intricate procedures, leading to 
                    registration delays and unnecessary costs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-custom p-6 mb-8">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Lack of Expert Support</h3>
                  <p className="text-gray-700">
                    Small and medium builders often rely on third-party agents who lack specialized knowledge, 
                    resulting in application errors and costly revisions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-custom p-6">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Unpredictable Pricing & Timelines</h3>
                  <p className="text-gray-700">
                    Traditional consultancies charge variable, often excessive fees without 
                    transparent timelines, creating budgeting challenges and project delays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-custom p-6 md:p-10 mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">The Industry Challenge</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              The real estate industry needs a dedicated partner who understands RERA's complexities and 
              can provide reliable, transparent services. Without proper guidance, 
              these challenges continue to impact the success and timeline of development projects, 
              costing builders both time and money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
