import { LegalNav } from "@/components/legal-nav";
import usePrivacy from "@/stores/usePrivacy";

const TermsAndConditions = () => {
  const { showPrivacy } = usePrivacy();

  return (
    <div className="h-full overflow-y-auto scroll-auto bg-background text-foreground">
      <LegalNav />

      {/* Header */}
      <div className="bg-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">
            {showPrivacy ? "Privacy Policy" : "Terms and Conditions"}
          </h1>
          <p className="text-xl">
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
          {!showPrivacy ? (
            <>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className=" leading-relaxed mb-4">
                  Welcome to Apollo ("we," "our," or "us"). These Terms and
                  Conditions ("Terms") govern your use of our website located at
                  [your-domain.com] and our AI-powered job application platform
                  service (the "Service") operated by Apollo, Inc.
                </p>
                <p className="leading-relaxed mb-4">
                  By accessing or using our Service, you agree to be bound by
                  these Terms. If you disagree with any part of these terms,
                  then you may not access the Service.
                </p>
                <p className="leading-relaxed">
                  These Terms apply to all visitors, users, and others who
                  access or use the Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold  mb-4">
                  2. Acceptance of Terms
                </h2>
                <p className="leading-relaxed mb-4">
                  By creating an account or using our Service, you acknowledge
                  that you have read, understood, and agree to be bound by these
                  Terms and our Privacy Policy, which is incorporated herein by
                  reference.
                </p>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms at any time. We
                  will notify you of any changes by posting the new Terms on
                  this page and updating the "Last updated" date. Your continued
                  use of the Service after such modifications constitutes your
                  acceptance of the updated Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
                <p className="leading-relaxed mb-4">
                  You must be at least 18 years old to use our Service. By using
                  the Service, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>You are at least 18 years of age</li>
                  <li>You have the legal capacity to enter into these Terms</li>
                  <li>
                    You are not prohibited from using the Service under
                    applicable law
                  </li>
                  <li>
                    You will comply with all applicable laws and regulations
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  4. Account Registration and Security
                </h2>
                <p className="leading-relaxed mb-4">
                  To access certain features of the Service, you must register
                  for an account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    Provide accurate, current, and complete information during
                    registration
                  </li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>
                    Accept responsibility for all activities under your account
                  </li>
                  <li>
                    Notify us immediately of any unauthorized use of your
                    account
                  </li>
                </ul>
                <p className=" leading-relaxed">
                  We reserve the right to suspend or terminate your account if
                  any information provided is inaccurate, false, or incomplete.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  5. Service Description
                </h2>
                <p className="leading-relaxed mb-4">
                  Apollo provides an AI-powered platform that automates job
                  application processes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Generating tailored CVs and resumes</li>
                  <li>Writing personalized cover letters</li>
                  <li>Submitting job applications on your behalf</li>
                  <li>Tracking application status and responses</li>
                </ul>
                <p className="leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of the Service at any time, with or without notice.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold  mb-4">
                  6. User Responsibilities and Prohibited Uses
                </h2>
                <p className="leading-relaxed mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Submit false, misleading, or fraudulent information</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Service
                  </li>
                  <li>
                    Use the Service for any unlawful or prohibited purpose
                  </li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>Spam or send unsolicited communications</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold  mb-4">7. Payment Terms</h2>
                <p className="leading-relaxed mb-4">
                  <strong>Subscription Plans:</strong> We offer various
                  subscription plans with different features and pricing. All
                  fees are non-refundable except as required by law.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>Billing:</strong> Subscription fees are billed in
                  advance on a monthly or annual basis. You authorize us to
                  charge your payment method for all applicable fees.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>Price Changes:</strong> We may change our pricing at
                  any time. We will provide at least 30 days' notice of any
                  price increases.
                </p>
                <p className="leading-relaxed">
                  <strong>Cancellation:</strong> You may cancel your
                  subscription at any time. Cancellation will take effect at the
                  end of your current billing period.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">
                  8. Intellectual Property Rights
                </h2>
                <p className="leading-relaxed mb-4">
                  The Service and its original content, features, and
                  functionality are owned by Apollo, Inc. and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
                <p className="leading-relaxed mb-4">
                  You retain ownership of any content you provide to the
                  Service, including your resume, personal information, and job
                  preferences. By using the Service, you grant us a limited,
                  non-exclusive license to use this content solely to provide
                  the Service to you.
                </p>
                <p className="leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative
                  works of, publicly display, publicly perform, republish,
                  download, store, or transmit any of our content without our
                  prior written consent.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">9. Privacy</h2>
                <p className="leading-relaxed mb-4">
                  Your privacy is important to us. Our Privacy Policy explains
                  how we collect, use, and protect your information when you use
                  our Service. By using the Service, you agree to the collection
                  and use of information in accordance with our Privacy Policy.
                </p>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your
                  personal information, but we cannot guarantee absolute
                  security of data transmitted over the internet.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">10. Disclaimers</h2>
                <p className="leading-relaxed mb-4">
                  THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
                  BASIS. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
                  BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>The Service will meet your specific requirements</li>
                  <li>
                    The Service will be uninterrupted, timely, secure, or
                    error-free
                  </li>
                  <li>
                    The results obtained from using the Service will be accurate
                    or reliable
                  </li>
                  <li>
                    Any job applications submitted will result in employment
                    opportunities
                  </li>
                </ul>
                <p className=" leading-relaxed">
                  We do not guarantee that our AI-generated content will be
                  accepted by employers or that you will receive job offers
                  through our Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold  mb-4">
                  11. Limitation of Liability
                </h2>
                <p className=" leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
                  APOLLO, INC., ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc pl-6space-y-2 mb-4">
                  <li>
                    Loss of profits, data, use, goodwill, or other intangible
                    losses
                  </li>
                  <li>
                    Damages resulting from your use or inability to use the
                    Service
                  </li>
                  <li>
                    Damages resulting from any unauthorized access to your
                    account
                  </li>
                  <li>Damages resulting from any conduct of third parties</li>
                </ul>
                <p className=" leading-relaxed">
                  Our total liability to you for all claims arising from or
                  relating to the Service shall not exceed the amount you paid
                  us in the 12 months preceding the claim, or $100, whichever is
                  greater.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold  mb-4">
                  12. Indemnification
                </h2>
                <p className=" leading-relaxed">
                  You agree to defend, indemnify, and hold harmless Apollo, Inc.
                  and its officers, directors, employees, and agents from and
                  against any claims, damages, obligations, losses, liabilities,
                  costs, or debt, and expenses (including attorney's fees)
                  arising from your use of the Service, violation of these
                  Terms, or infringement of any third-party rights.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold  mb-4">13. Termination</h2>
                <p className=" leading-relaxed mb-4">
                  We may terminate or suspend your account and access to the
                  Service immediately, without prior notice, for any reason,
                  including if you breach these Terms.
                </p>
                <p className=" leading-relaxed mb-4">
                  You may terminate your account at any time by contacting us or
                  through your account settings.
                </p>
                <p className=" leading-relaxed">
                  Upon termination, your right to use the Service will cease
                  immediately, and we may delete your account and data.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold  mb-4">
                  14. Dispute Resolution and Arbitration
                </h2>
                <p className=" leading-relaxed mb-4">
                  <strong>Binding Arbitration:</strong> Any dispute arising from
                  or relating to these Terms or the Service shall be resolved
                  through binding arbitration in accordance with the Commercial
                  Arbitration Rules of the American Arbitration Association.
                </p>
                <p className=" leading-relaxed mb-4">
                  <strong>Class Action Waiver:</strong> You agree that any
                  arbitration shall be conducted in your individual capacity
                  only and not as a class action or other representative action.
                </p>
                <p className=" leading-relaxed">
                  <strong>Governing Law:</strong> These Terms shall be governed
                  by and construed in accordance with the laws of the State of
                  [Your State], without regard to its conflict of law
                  provisions.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold  mb-4">15. Severability</h2>
                <p className=" leading-relaxed">
                  If any provision of these Terms is held to be invalid or
                  unenforceable, the remaining provisions will remain in full
                  force and effect. The invalid or unenforceable provision will
                  be replaced with a valid provision that most closely matches
                  the intent of the original provision.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold  mb-4">
                  16. Entire Agreement
                </h2>
                <p className=" leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the
                  entire agreement between you and Apollo, Inc. regarding the
                  Service and supersede all prior agreements and understandings,
                  whether written or oral.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Apollo, Inc. ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our
                  AI-powered job application platform service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Please read this Privacy Policy carefully. By using our
                  Service, you consent to the data practices described in this
                  policy.
                </p>
              </section>

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
                    Device information (IP address, browser type, operating
                    system)
                  </li>
                  <li>Usage data (pages visited, time spent, features used)</li>
                  <li>Log files and analytics data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

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
                  <li>
                    Communicate with you about your account and our Service
                  </li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Analyze usage patterns and improve user experience</li>
                  <li>Comply with legal obligations and enforce our Terms</li>
                  <li>Prevent fraud and ensure platform security</li>
                </ul>
              </section>

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
                  We may share information with third-party service providers
                  who perform services on our behalf, including payment
                  processing, data analysis, and customer support.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Legal Requirements
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may disclose information if required by law or in response
                  to valid legal requests from public authorities.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Business Transfers
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of that transaction.
                </p>
              </section>

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
                  However, no method of transmission over the internet or
                  electronic storage is 100% secure. We cannot guarantee
                  absolute security of your information.
                </p>
              </section>

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
                    <strong>Correction:</strong> Request correction of
                    inaccurate information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request a copy of your data in
                    a portable format
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of
                    processing
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to certain types of
                    processing
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To exercise these rights, please contact us using the
                  information provided at the end of this policy.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to collect
                  and track information about your use of our Service. You can
                  control cookies through your browser settings, but disabling
                  cookies may affect the functionality of our Service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We use the following types of cookies:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Essential cookies:</strong> Necessary for the
                    Service to function
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> Help us understand how
                    you use our Service
                  </li>
                  <li>
                    <strong>Preference cookies:</strong> Remember your settings
                    and preferences
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We retain your personal information for as long as necessary
                  to provide our Service and fulfill the purposes outlined in
                  this Privacy Policy, unless a longer retention period is
                  required by law.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When you delete your account, we will delete your personal
                  information within 30 days, except where we are required to
                  retain it for legal, regulatory, or legitimate business
                  purposes.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our Service is not intended for children under 18 years of
                  age. We do not knowingly collect personal information from
                  children under 18. If you become aware that a child has
                  provided us with personal information, please contact us
                  immediately.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. International Data Transfers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure that such transfers
                  comply with applicable data protection laws and implement
                  appropriate safeguards to protect your information.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date. We encourage
                  you to review this Privacy Policy periodically.
                </p>
              </section>
            </>
          )}
          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold  mb-4">
              17. Contact Information
            </h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Apollo, Inc.</strong>
              </p>
              <p className="text-gray-700 mb-2">[Your Address]</p>
              <p className="text-gray-700 mb-2">[City, State, ZIP Code]</p>
              <p className="text-gray-700 mb-2">Email: legal@apollo.com</p>
              <p className="text-gray-700">Phone: [Your Phone Number]</p>
            </div>
          </section>

          {/* Acknowledgment */}
          {!showPrivacy && (
            <section className="mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p className="text-blue-800 font-medium mb-2">Acknowledgment</p>
                <p className="text-blue-700">
                  By using our Service, you acknowledge that you have read these
                  Terms and Conditions, understand them, and agree to be bound
                  by them. If you do not agree to these Terms, you must not use
                  our Service.
                </p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
