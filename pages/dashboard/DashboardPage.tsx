import React from 'react';
import { Link } from 'react-router-dom';

const StatCard: React.FC<{ title: string; value: string; }> = ({ title, value }) => (
    <div className="bg-white p-6 rounded-lg border border-slate-200">
        <h3 className="text-sm font-medium text-slate-500 truncate">{title}</h3>
        <p className="mt-1 text-3xl font-semibold text-slate-900">{value}</p>
    </div>
);

const DashboardPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-full py-10">
            <header>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-slate-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                        <StatCard title="Active Projects" value="12" />
                        <StatCard title="Program Participants" value="1,204" />
                        <StatCard title="Data Points Analyzed" value="3.4M" />
                    </div>
                    
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-slate-200">
                            <h2 className="text-xl font-semibold text-slate-900">Recent Activity</h2>
                            <p className="mt-4 text-slate-600">
                                This is where a chart or a list of recent activities would go.
                            </p>
                            <div className="mt-6 h-64 bg-slate-100 rounded-md flex items-center justify-center">
                                <span className="text-slate-500">Chart Placeholder</span>
                            </div>
                        </div>
                         <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col">
                            <h2 className="text-xl font-semibold text-slate-900">Billing & Subscription</h2>
                            <p className="mt-4 text-slate-600 flex-grow">You are currently on the <strong>Free Plan</strong>. Upgrade to unlock advanced features, unlimited projects, and priority support.</p>
                            <Link to="/coming-soon" className="mt-6 inline-block w-full text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                                Upgrade Plan
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;