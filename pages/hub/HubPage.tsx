import React from 'react';
import AppCard from '../../components/shared/AppCard';

const HubPage: React.FC = () => {
    return (
        <div className="bg-slate-50 py-12 min-h-[80vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Application Hub</h1>
                    <p className="mt-2 text-slate-600">Access our suite of digital health tools and platforms.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AppCard 
                        title="FSP AI Trainer"
                        description="Practice patient communication for the Fachsprachprüfung exam with our AI-powered simulator."
                        link="/programs/fsp"
                    />
                     <AppCard 
                        title="Data Dashboard"
                        description="Visualize and analyze health data from your programs with our interactive dashboard."
                        link="/dashboard"
                    />
                     <AppCard 
                        title="Resource Library"
                        description="Access training materials, research papers, and clinical guidelines."
                        link="/coming-soon"
                    />
                </div>
            </div>
        </div>
    );
};

export default HubPage;