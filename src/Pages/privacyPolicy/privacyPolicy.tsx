import { LegalNav } from "@/components/legal-nav";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <LegalNav />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Apollo, Inc. ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              AI-powered job application platform service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this Privacy Policy carefully. By using our Service,
              you consent to the data practices described in this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Personal Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Name, email address, and contact information</li>
              <li>Resume, CV, and professional experience details</li>
              <li>Job preferences and career objectives</li>
              <li>Educational background and certifications</li>
              <li>Payment and billing information</li>
              <li>Communications with our support team</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Automatically Collected Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain information when you use our
              Service:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                Device information (IP address, browser type, operating system)
              </li>
              <li>Usage data (pages visited, time spent, features used)</li>
              <li>Log files and analytics data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide, maintain, and improve our Service</li>
              <li>Generate personalized CVs and cover letters</li>
              <li>Submit job applications on your behalf</li>
              <li>Process payments and manage your account</li>
              <li>Communicate with you about your account and our Service</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Analyze usage patterns and improve user experience</li>
              <li>Comply with legal obligations and enforce our Terms</li>
              <li>Prevent fraud and ensure platform security</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. How We Share Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              With Your Consent
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We share your information with employers when submitting job
              applications on your behalf, as authorized by you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Service Providers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share information with third-party service providers who
              perform services on our behalf, including payment processing, data
              analysis, and customer support.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Legal Requirements
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may disclose information if required by law or in response to
              valid legal requests from public authorities.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Business Transfers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of that transaction.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the internet or electronic
              storage is 100% secure. We cannot guarantee absolute security of
              your information.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Your Privacy Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Access:</strong> Request access to your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Portability:</strong> Request a copy of your data in a
                portable format
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
              </li>
              <li>
                <strong>Objection:</strong> Object to certain types of
                processing
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, please contact us using the information
              provided at the end of this policy.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to collect and
              track information about your use of our Service. You can control
              cookies through your browser settings, but disabling cookies may
              affect the functionality of our Service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Essential cookies:</strong> Necessary for the Service to
                function
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand how you
                use our Service
              </li>
              <li>
                <strong>Preference cookies:</strong> Remember your settings and
                preferences
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to
              provide our Service and fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required by
              law.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you delete your account, we will delete your personal
              information within 30 days, except where we are required to retain
              it for legal, regulatory, or legitimate business purposes.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Service is not intended for children under 18 years of age. We
              do not knowingly collect personal information from children under
              18. If you become aware that a child has provided us with personal
              information, please contact us immediately.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. We ensure that such transfers comply with
              applicable data protection laws and implement appropriate
              safeguards to protect your information.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. We encourage you
              to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Apollo, Inc.</strong>
              </p>
              <p className="text-gray-700 mb-2">Privacy Officer</p>
              <p className="text-gray-700 mb-2">[Your Address]</p>
              <p className="text-gray-700 mb-2">[City, State, ZIP Code]</p>
              <p className="text-gray-700 mb-2">Email: privacy@apollo.com</p>
              <p className="text-gray-700">Phone: [Your Phone Number]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
