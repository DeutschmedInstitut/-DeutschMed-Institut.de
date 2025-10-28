import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Get in Touch</h1>
          <p className="mt-4 text-lg text-slate-600">
            We'd love to hear from you. Whether you have a question about our programs, a potential partnership, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" rows={5} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div>
              <button className="w-full px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                Send Message
              </button>
            </div>
          </div>
          <div className="space-y-6 text-slate-600">
            <h3 className="text-xl font-semibold text-slate-900">Contact Information</h3>
            <p><strong>Address:</strong><br />123 Health Innovation Str.<br />Berlin, 10115, Germany</p>
            <p><strong>Email:</strong><br /><a href="mailto:contact@deutschmed.de" className="text-blue-600 hover:underline">contact@deutschmed.de</a></p>
            <p><strong>Phone:</strong><br />+49 (0)30 123 456 78</p>
            <p>We are also active on social media. Follow us for the latest updates on our work and research.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;