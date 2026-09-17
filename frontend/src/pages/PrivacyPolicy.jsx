import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange mb-4 block">Legal</span>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-400 font-medium mb-12">Last updated: September 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed font-medium">
          <p>
            Sunrise School Rajkot ("we", "us", "our") is committed to protecting the privacy of parents, students,
            and visitors to this website. This policy explains what information we collect through this site, how
            we use it, and how you can contact us about it.
          </p>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-3">Information We Collect</h2>
            <p>
              When you submit the Contact form or the Admission Inquiry form on this website, we collect the
              information you provide directly, which may include: student name, parent/guardian name, phone
              number, email address, class/grade of interest, and any message or requirements you enter.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-3">How We Use It</h2>
            <p>
              We use this information solely to respond to your inquiry, process admission-related requests, and
              communicate with you about admissions, school updates, or the query you raised. We do not sell or
              rent this information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-3">Data Retention & Security</h2>
            <p>
              Inquiry and contact submissions are stored securely and retained only as long as needed to respond to
              your request and maintain admissions records. We take reasonable technical measures to protect this
              data from unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-3">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of the personal data you've submitted to us at
              any time by contacting us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-3">Contact Us</h2>
            <p>
              For any questions about this policy or your data, reach us at{' '}
              <a href="mailto:sunriseschool8261@gmail.com" className="text-brand-blue hover:text-brand-orange transition-colors">
                sunriseschool8261@gmail.com
              </a>{' '}
              or{' '}
              <a href="tel:+918799140051" className="text-brand-blue hover:text-brand-orange transition-colors">
                +91 87991 40051
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
