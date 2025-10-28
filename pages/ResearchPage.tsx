import React from 'react';

const Publication: React.FC<{ title: string; authors: string; journal: string }> = ({ title, authors, journal }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
        <h4 className="font-semibold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-500 mt-1">{authors}</p>
        <p className="text-sm text-slate-500 mt-2 italic">{journal}</p>
    </div>
);


const ResearchPage: React.FC = () => {
    return (
        <>
            <div className="bg-slate-50 py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                            Research & Evaluation
                        </h1>
                        <p className="mt-4 text-lg text-slate-600">
                            Generating rigorous evidence to inform policy, strengthen programs, and improve health outcomes worldwide.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 text-center">Our Focus Areas</h2>
                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-white rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold">Program Evaluations</h3>
                            <p className="mt-2 text-slate-600">Assessing the impact and effectiveness of health interventions.</p>
                        </div>
                        <div className="p-8 bg-white rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold">Clinical Trials</h3>
                            <p className="mt-2 text-slate-600">Conducting trials for new diagnostics, treatments, and digital health tools.</p>
                        </div>
                         <div className="p-8 bg-white rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold">Health Systems Research</h3>
                            <p className="mt-2 text-slate-600">Analyzing health system performance and policy implementation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                         <h2 className="text-3xl font-bold text-slate-900">Featured Publications</h2>
                         <p className="mt-4 text-lg text-slate-600">
                            Our work contributes to the global evidence base.
                        </p>
                    </div>
                    <div className="mt-12 max-w-4xl mx-auto space-y-6">
                        <Publication 
                            title="Effectiveness of an AI-powered diagnostic tool for tuberculosis detection in primary care settings: a randomized controlled trial."
                            authors="Schmidt A, Meier K, et al."
                            journal="The Lancet Digital Health, 2023"
                        />
                        <Publication 
                            title="Impact of a mobile health intervention on maternal and child health outcomes in rural Kenya."
                            authors="Bauer L, Weber M, et al."
                            journal="Journal of Global Health, 2022"
                        />
                         <Publication 
                            title="Cost-effectiveness of community-based surveillance systems for early outbreak detection."
                            authors="Meier K, Schmidt A, et al."
                            journal="Health Policy and Planning, 2021"
                        />
                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                          View All Publications
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResearchPage;