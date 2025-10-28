import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="mt-3 text-slate-600">{description}</p>
    </div>
);

const DigitalHealthPage: React.FC = () => {
  return (
    <>
      <div className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Digital Health Solutions
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Designing and delivering human-centered health technology.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              From needs assessment to UX, data architecture, and deployment — for apps and analytics that matter.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Consulting & Product Strategy" description="From needs assessment to UX, data architecture, and deployment — for apps and analytics that matter." />
            <ServiceCard title="Decision Support & Dashboards" description="Clinical decision support tools, monitoring dashboards, and analytics for programs and hospitals." />
            <ServiceCard title="AI Copilots & Language Models" description="German medical language models for FSP; text mining and summarization for public-health intelligence." />
            <ServiceCard title="Data Engineering & Interoperability" description="ETL pipelines, FHIR/HL7 integration, and privacy-preserving data solutions." />
            <ServiceCard title="Diagnostic Tools" description="AI-powered tools to assist in the early detection and diagnosis of diseases from medical imaging and other data sources." />
            <ServiceCard title="Clinical Decision Support Systems" description="Integrating evidence-based knowledge into clinical workflows to enhance decision-making and improve patient outcomes." />
            <ServiceCard title="Hospital Support Systems" description="Developing platforms for hospital management, resource allocation, and patient flow optimization to increase efficiency." />
            <ServiceCard title="Surveillance & Intelligence Systems" description="Deploying real-time systems for disease surveillance, outbreak detection, and public health intelligence to inform timely responses." />
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalHealthPage;