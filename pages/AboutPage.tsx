import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="max-w-3xl">
    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">{title}</h1>
    <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
  </div>
);

const TeamMemberCard: React.FC<{ title: string; }> = ({ title }) => (
  <div className="text-center">
    <div className="mx-auto h-32 w-32 rounded-full bg-slate-200 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    </div>
    <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="text-sm text-slate-500">Details can be added later</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="About DeutschMed Institut"
            subtitle="Innovating at the intersection of health, technology, and education to build a healthier future for all."
          />
        </div>
      </div>

      <div className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-slate-600 text-lg">
                Our mission is to strengthen health systems and improve public health outcomes globally. We achieve this by developing cutting-edge digital health solutions, delivering high-impact capacity building programs, and conducting rigorous research that informs policy and practice. We believe in a collaborative, human-centered approach to solve the most pressing health challenges.
              </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Meet Our Leadership</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in medicine, public health, data science, and technology.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMemberCard title="Founder & CEO" />
            <TeamMemberCard title="Head of Research" />
            <TeamMemberCard title="Director of Digital Health" />
            <TeamMemberCard title="Head of Programs" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;