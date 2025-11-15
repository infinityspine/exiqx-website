'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import SectionDivider from '@/components/ui/SectionDivider'

export default function PrivacyPolicyPage() {

  return (
    <main className="relative bg-black text-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative will-change-transform"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        style={{ 
          transform: 'translateZ(0)',
          paddingTop: 'clamp(8rem, 12vw, 10rem)'
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            className="font-display text-5xl font-extrabold uppercase tracking-tight text-white mb-12"
            variants={fadeUp}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-lg text-white/70 font-inter leading-relaxed"
            variants={fadeUp}
          >
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </motion.p>
        </div>
      </motion.section>

      <SectionDivider />

      {/* Content */}
      <motion.section
        className="relative py-20 md:py-28 will-change-transform"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              1. Introduction
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                ExIQx Performance ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p>
                This policy applies to all information collected through our website, including any data you provide when contacting us, joining our waitlist, or using our services. By using our website, you consent to the data practices described in this policy.
              </p>
            </div>
          </motion.div>

          {/* Information We Collect */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              2. Information We Collect
            </h2>
            <div className="space-y-6 text-white/80 font-inter leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Information You Provide Directly</h3>
                <p className="mb-3">
                  We collect information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Messages and communications sent through our contact forms</li>
                  <li>Waitlist sign-up information</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
                <p className="mb-3">
                  When you visit our website, we automatically collect certain information about your device and browsing behavior:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and general location data</li>
                  <li>Browser type and version</li>
                  <li>Device information (operating system, screen resolution)</li>
                  <li>Pages visited, time spent on pages, and navigation patterns</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Cookies and Tracking Technologies</h3>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience, analyze site usage, and assist in marketing efforts. You can control cookie preferences through your browser settings.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              3. How We Use Your Information
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To operate, maintain, and improve our website and services</li>
                <li>To process and fulfill orders, if applicable</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To analyze website usage and optimize user experience</li>
                <li>To comply with legal obligations and enforce our terms</li>
              </ul>
            </div>
          </motion.div>

          {/* How We Share Information */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              4. How We Share Information
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our users (e.g., hosting providers, analytics services, email service providers).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or governmental authority, or to protect our rights, property, or safety.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information with your explicit consent for specific purposes.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Cookies & Tracking */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              5. Cookies & Tracking Technologies
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                Cookies are small text files stored on your device when you visit a website. We use cookies to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Improve website functionality and performance</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Note that disabling cookies may limit certain website functionality.
              </p>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              6. Data Security
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Secure data transmission using encryption (HTTPS/SSL)</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Secure hosting infrastructure</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </motion.div>

          {/* Your Rights & Choices */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              7. Your Rights & Choices
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request access to the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing emails by clicking the unsubscribe link in any email or contacting us directly
                </li>
                <li>
                  <strong>Cookie Preferences:</strong> Manage cookie settings through your browser
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:contact@exiqxperformance.com" className="text-red-400 hover:text-red-300 underline">contact@exiqxperformance.com</a>.
              </p>
            </div>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              8. Children's Privacy
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately, and we will take steps to delete such information.
              </p>
            </div>
          </motion.div>

          {/* International Transfers */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              9. International Transfers
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                Your information may be transferred to and processed in the United States or other countries where our service providers operate. By using our website, you consent to the transfer of your information to the United States and other jurisdictions that may have different data protection laws than your country of residence.
              </p>
            </div>
          </motion.div>

          {/* Updates to Policy */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              10. Updates to This Policy
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting the updated policy on this page with a new "Last updated" date</li>
                <li>Sending an email notification to registered users, if applicable</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p>
                Your continued use of our website after such changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              11. Contact Information
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <p>
                <strong>ExIQx Performance</strong><br />
                Email: <a href="mailto:contact@exiqxperformance.com" className="text-red-400 hover:text-red-300 underline">contact@exiqxperformance.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}

