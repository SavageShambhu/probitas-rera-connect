
import { useState } from "react";

const faqs = [
  {
    question: "What is MahaRERA and why do I need it?",
    answer: "MahaRERA (Maharashtra Real Estate Regulatory Authority) is a regulatory body established under the Real Estate (Regulation and Development) Act, 2016. Any real estate project in Maharashtra above 500 square meters or with more than 8 apartments must be registered with MahaRERA before being marketed or sold."
  },
  {
    question: "How does your client-employee model work?",
    answer: "At Probitas, we assign a dedicated employee to each client project. This employee becomes your single point of contact throughout the RERA registration process. They handle document review, form submission, tracking, and communication with RERA authorities on your behalf, ensuring consistent, accountable service."
  },
  {
    question: "Can you explain your tiered pricing model?",
    answer: "We offer three pricing tiers: Basic (one-time service for a single project), Standard (subscription for up to 3 projects with regular tracking), and Premium (unlimited projects for larger firms with priority support and detailed reporting). Each tier is designed to accommodate different business sizes and project volumes with transparent, predictable pricing."
  },
  {
    question: "What documents are required for MahaRERA registration?",
    answer: "Required documents include land title documents, approved building plans, proforma of agreements, details of real estate agents, architects, and contractors involved, estimated project completion timeline, and various declarations from the promoter. Our team guides you through preparing all necessary paperwork."
  },
  {
    question: "What happens if my project is not registered with MahaRERA?",
    answer: "Unregistered projects face severe penalties including up to 10% of the project cost or even imprisonment. Additionally, you cannot market, advertise, or sell any units in an unregistered project."
  },
  {
    question: "How does Probitas charge for its services?",
    answer: "Unlike variable fees charged by individual agents, Probitas operates on a transparent fixed percentage fee structure that is consistently lower than market rates. This allows you to budget accurately without worrying about unexpected costs."
  },
  {
    question: "How is Probitas different from other RERA consultants?",
    answer: "Probitas employs salaried regional experts rather than commission-based agents. We provide direct authority assistance, eliminating inefficient intermediaries. Our fixed, transparent fee structure, dedicated employee model, and accountability for results set us apart from traditional consultants."
  },
  {
    question: "Do you handle RERA compliance for ongoing projects?",
    answer: "Yes, we provide comprehensive support for ongoing projects including quarterly updates, annual renewals, and addressing any compliance issues that may arise during the project lifecycle."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="section-padding section-spacing bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="text-primary">FAQ</span>s About Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common questions about RERA compliance and our client-focused approach
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 bg-white rounded-xl shadow-sm border ${
                openIndex === index ? "border-primary" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-4 md:p-6 text-left"
              >
                <h3 className={`font-bold text-lg ${openIndex === index ? "text-primary" : "text-gray-800"}`}>
                  {faq.question}
                </h3>
                <div className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
                <div className="p-4 md:p-6 pt-0 md:pt-0 text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
