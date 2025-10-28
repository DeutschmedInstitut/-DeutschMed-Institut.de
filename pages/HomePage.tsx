import React from 'react';
import { Link } from 'react-router-dom';

const StatCard: React.FC<{ value: string; label: string; }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl lg:text-5xl font-bold text-blue-600">{value}</p>
        <p className="text-sm lg:text-base text-slate-500 mt-2">{label}</p>
    </div>
);

const ServiceCard: React.FC<{ title: string; description: string; to: string; buttonText: string; }> = ({ title, description, to, buttonText }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
        <p className="mt-4 text-slate-600 flex-grow">{description}</p>
        <Link to={to} className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors self-start">
            {buttonText}
        </Link>
    </div>
);


const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Accelerating <span className="text-blue-600">Digital Health</span> Capacity
            </h1>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-slate-600">
              We build skills, solutions, and research that advance care delivery, public health, and health systems performance.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/programs" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                Explore Programs
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg shadow-md hover:bg-slate-100 transition-colors">
                Partner with Us
              </Link>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                <StatCard value="10k+" label="Learners supported" />
                <StatCard value="30+" label="Countries engaged" />
                <StatCard value="100+" label="Courses & workshops" />
                <StatCard value="15+" label="Years experience" />
              </div>
          </div>
        </div>
      </div>

      {/* Sub-header bar */}
      <div className="border-y border-slate-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600 text-center md:text-left">
          <div><span className="font-bold text-slate-800">Capacity Building:</span> Global Health • AI in Health • Occupational Health • Medical Studies</div>
          <div><span className="font-bold text-slate-800">Digital Health:</span> Surveillance • Apps • Data • Dashboards • Diagnostics</div>
          <div><span className="font-bold text-slate-800">Research:</span> Program Evaluations • Trials • Policy Analysis</div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
                title="Capacity Building"
                description="Modular trainings for clinicians and public health teams — from medical studies and epidemiology fundamentals to AI in healthcare and occupational health."
                to="/programs"
                buttonText="View Programs"
            />
            <ServiceCard 
                title="Digital Health Solutions"
                description="We design and implement tools: surveillance systems, diagnostics, decision support, data pipelines, dashboards, and AI copilots for health services."
                to="/digital-health"
                buttonText="Explore Solutions"
            />
            <ServiceCard 
                title="Research & Evaluation"
                description="Rigorous evaluations, evidence syntheses, and operational research to drive policy and practice."
                to="/research"
                buttonText="Our Research"
            />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="pb-24">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-12 rounded-2xl shadow-xl">
              <div>
                <h2 className="text-3xl font-bold text-slate-800">Trusted by global partners</h2>
                <p className="mt-4 text-slate-600">
                  Experience across international organizations, research institutes, universities, multilateral organizations, and government health programs.
                </p>
                <div className="mt-8 flex gap-4">
                  <Link to="/about" className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg shadow-md hover:bg-slate-100 transition-colors">
                    About DeutschMed
                  </Link>
                  <Link to="/contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                    Start a project
                  </Link>
                </div>
              </div>
              <div className="text-slate-700">
                <ul className="space-y-3 list-disc list-inside">
                  <li>Global health program evaluations & guidelines</li>
                  <li>Health and medical surveillance and intelligence programs</li>
                  <li>AI-assisted education tools for medical German/FSP</li>
                  <li>Health systems analytics & dashboards</li>
                </ul>
              </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default HomePage;