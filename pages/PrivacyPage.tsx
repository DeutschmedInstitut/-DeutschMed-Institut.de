import React from 'react';

const PrivacySection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-slate-900 mb-3">{title}</h2>
    <div className="space-y-4 text-slate-600">
      {children}
    </div>
  </div>
);

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <PrivacySection title="1. Introduction">
            <p>DeutschMed Institut ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
          </PrivacySection>
          
          <PrivacySection title="2. Collection of Your Information">
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <p><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register for our programs or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>
            <p><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
          </PrivacySection>
          
          <PrivacySection title="3. Use of Your Information">
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc list-inside">
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Increase the efficiency and operation of the Site.</li>
                <li>Notify you of updates to the Site.</li>
            </ul>
          </PrivacySection>

           <PrivacySection title="4. Security of Your Information">
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
          </PrivacySection>

          <PrivacySection title="5. Contact Us">
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>DeutschMed Institut<br/>123 Health Innovation Str.<br/>Berlin, 10115, Germany<br/><a href="mailto:privacy@deutschmed.de" className="text-blue-600 hover:underline">privacy@deutschmed.de</a></p>
          </PrivacySection>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;