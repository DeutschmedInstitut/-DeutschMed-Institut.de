import React from 'react';
import { Link } from 'react-router-dom';

const BookOpenIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const UserGroupIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const SparklesIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.47-1.47L12.94 18l1.188-.648a2.25 2.25 0 011.47-1.47L16.25 15l.648 1.188a2.25 2.25 0 011.47 1.47L19.56 18l-1.188.648a2.25 2.25 0 01-1.47 1.47z" />
    </svg>
);

const PlatformCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mt-5">{title}</h3>
        <p className="text-slate-600 mt-2">{description}</p>
    </div>
);


const FspProgramPage: React.FC = () => {
    return (
        <>
            <div className="bg-slate-50 py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                            Fachsprachprüfung (FSP) Program
                        </h1>
                        <p className="mt-4 text-lg text-slate-600">
                           Preparing international medical professionals for the German medical language proficiency exam and successful practice in Germany.
                        </p>
                        <div className="mt-8">
                             <Link to="/signup" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                              Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 md:py-24">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900">Explore Our FSP Platform</h2>
                         <p className="mt-4 text-lg text-slate-600">A complete ecosystem of tools designed to ensure your success, from foundational knowledge to real-world simulation.</p>
                    </div>
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <PlatformCard 
                            icon={<BookOpenIcon />}
                            title="FSP Academy"
                            description="Comprehensive online learning portal with video lectures, interactive exercises, and progress tracking."
                        />
                         <PlatformCard 
                            icon={<UserGroupIcon />}
                            title="AI Trainer/Simulator"
                            description="Practice real-world patient encounters with our AI-powered simulator. Get instant feedback on your communication skills."
                        />
                         <PlatformCard 
                            icon={<SparklesIcon />}
                            title="Vocabulary Builder"
                            description="Master essential medical terminology with our spaced-repetition flashcard system and contextual examples."
                        />
                    </div>
                 </div>
            </div>

            <div className="bg-slate-50 py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="p-6 bg-white rounded-lg shadow-md border border-slate-200">
                            <h3 className="font-semibold text-lg text-blue-600">Who is it for?</h3>
                            <p className="mt-2 text-slate-600">International doctors, dentists, and pharmacists who need to pass the FSP to obtain their license to practice medicine in Germany.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md border border-slate-200">
                           <h3 className="font-semibold text-lg text-blue-600">Program Goal</h3>
                           <p className="mt-2 text-slate-600">To equip participants with the advanced medical German language skills and cultural competence required for the FSP exam and clinical settings.</p>
                        </div>
                         <div className="p-6 bg-white rounded-lg shadow-md border border-slate-200">
                           <h3 className="font-semibold text-lg text-blue-600">Format</h3>
                           <p className="mt-2 text-slate-600">Intensive online courses with live tutoring, simulated patient encounters, and comprehensive exam preparation materials.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Curriculum Highlights</h2>
                        <ul className="mt-6 space-y-4 text-slate-600 list-disc list-inside">
                            <li><strong>Medical Terminology:</strong> Comprehensive vocabulary covering anatomy, physiology, pathology, and pharmacology.</li>
                            <li><strong>Doctor-Patient Communication:</strong> Simulated role-plays for history taking, physical examinations, and patient counseling.</li>
                            <li><strong>Medical Documentation:</strong> Training in writing official medical reports (Arztbriefe), prescriptions, and other clinical documents.</li>
                            <li><strong>Exam Simulation:</strong> Mock exams under realistic conditions to build confidence and identify areas for improvement.</li>
                            <li><strong>German Healthcare System:</strong> An overview of the structure, processes, and cultural nuances of the German healthcare system.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FspProgramPage;