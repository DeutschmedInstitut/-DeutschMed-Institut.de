import React from 'react';

const ProgramCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600 mt-3 flex-grow">{description}</p>
        <button className="mt-6 self-start px-6 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full hover:bg-blue-200 transition-colors">
          Learn More
        </button>
    </div>
);

const ProgramsPage: React.FC = () => {
    return (
        <div className="bg-slate-50 py-20 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-12">
                     <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Our Programs
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        Building global health capacity through targeted training and education designed for real-world impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProgramCard 
                        title="AI in Healthcare"
                        description="A practical course for clinicians and public health professionals on applying machine learning and AI tools to improve diagnostics, treatment, and population health management."
                    />
                     <ProgramCard 
                        title="Clinical Research & Biostatistics"
                        description="Master the fundamentals of study design, data analysis, and evidence interpretation. Essential skills for clinical research and evidence-based practice."
                    />
                     <ProgramCard 
                        title="Public Health Leadership"
                        description="Develop the strategic management and leadership skills needed to lead public health organizations, manage complex health programs, and drive policy change."
                    />
                     <ProgramCard 
                        title="Digital Health Implementation"
                        description="Learn to design, deploy, and scale digital health interventions. Covers topics from user-centered design and interoperability to M&E of digital tools."
                    />
                    <ProgramCard 
                        title="Global Health Foundations"
                        description="A foundational course on key global health challenges, health systems, and equity, focusing on program design and M&E in low- and middle-income countries."
                    />
                     <ProgramCard 
                        title="Health Systems Strengthening"
                        description="A comprehensive overview of health system building blocks and strategies to improve health service delivery, financing, and governance."
                    />
                    <ProgramCard 
                        title="Occupational Health"
                        description="Training for professionals on workplace health and safety, risk assessment, and the promotion of well-being in corporate and industrial settings."
                    />
                    <ProgramCard 
                        title="Medical Studies Foundation"
                        description="Provides a comprehensive foundation for aspiring medical professionals, covering core sciences, ethics, and an introduction to clinical practice."
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgramsPage;