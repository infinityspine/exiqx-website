'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import SectionDivider from '@/components/ui/SectionDivider'

export default function TermsOfServicePage() {

  return (
    <main className="relative bg-black text-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative py-24 md:py-32 will-change-transform"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.h1
            className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-6"
            variants={fadeUp}
          >
            Terms of Service
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
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          {/* Acceptance of Terms */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                By accessing and using the ExIQx Performance website ("the Site"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Site.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and ExIQx Performance ("we," "our," or "us"). We reserve the right to modify these Terms at any time, and your continued use of the Site after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>
          </motion.div>

          {/* Eligibility */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              2. Eligibility
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                You must be at least 18 years of age to use our training protocols, purchase equipment, or submit personal information through the Site. By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are at least 18 years old</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You will comply with all applicable laws and regulations</li>
                <li>All information you provide is accurate and truthful</li>
              </ul>
            </div>
          </motion.div>

          {/* Use of the Website */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              3. Use of the Website
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Permitted Use</h3>
                <p className="mb-3">
                  You may use the Site for lawful purposes only, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browsing and viewing content for personal, non-commercial purposes</li>
                  <li>Contacting us for inquiries or support</li>
                  <li>Joining our waitlist or subscribing to updates</li>
                  <li>Purchasing products, when available</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Prohibited Conduct</h3>
                <p className="mb-3">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the Site for any illegal or unauthorized purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon our intellectual property rights or the rights of others</li>
                  <li>Transmit viruses, malware, or any harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems or data</li>
                  <li>Interfere with or disrupt the Site's functionality</li>
                  <li>Use automated systems to scrape, crawl, or harvest data from the Site</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Intellectual Property</h3>
                <p>
                  All content on the Site, including text, graphics, logos, images, software, and designs, is the property of ExIQx Performance or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Product Information & Training Disclaimer */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              4. Product Information & Training Disclaimer
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                Our equipment and training protocols are designed for use by qualified individuals who understand proper exercise technique and safety protocols. By using our products or following our training guidance, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Medical Consultation Required:</strong> You are responsible for consulting with a qualified healthcare professional before beginning any exercise program, especially if you have pre-existing medical conditions, injuries, or concerns.
                </li>
                <li>
                  <strong>Proper Use:</strong> Equipment must be used in accordance with provided instructions and safety guidelines. Misuse of equipment can result in serious injury.
                </li>
                <li>
                  <strong>Assumption of Risk:</strong> Exercise and physical training involve inherent risks. You voluntarily assume all risks associated with the use of our products and training protocols.
                </li>
                <li>
                  <strong>No Medical Advice:</strong> Information provided on the Site regarding biomechanics, training, and exercise is for educational purposes only and does not constitute medical, physical therapy, or professional training advice.
                </li>
              </ul>
              <p>
                ExIQx Performance is not responsible for any injuries, damages, or losses resulting from the misuse of our products, failure to follow instructions, or failure to consult appropriate medical professionals.
              </p>
            </div>
          </motion.div>

          {/* Purchases & Payments */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              5. Purchases & Payments
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                If you purchase products through the Site:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Availability:</strong> All purchases are subject to product availability. We reserve the right to limit quantities and refuse orders.
                </li>
                <li>
                  <strong>Pricing:</strong> Prices are displayed in U.S. dollars and are subject to change without notice. We are not responsible for pricing errors and reserve the right to cancel orders placed at incorrect prices.
                </li>
                <li>
                  <strong>Payment Processing:</strong> When ecommerce functionality is available, payments will be processed securely through third-party payment processors (e.g., Stripe). We do not store your full payment card information.
                </li>
                <li>
                  <strong>Order Acceptance:</strong> Your order constitutes an offer to purchase, which we may accept or reject at our discretion.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Shipping, Returns, and Warranty */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              6. Shipping, Returns, and Warranty
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                Policies regarding shipping, returns, and warranty will be published when ecommerce opens. Until that time, please contact us directly at <a href="mailto:contact@exiqxperformance.com" className="text-red-400 hover:text-red-300 underline">contact@exiqxperformance.com</a> for information about product availability, shipping options, and warranty terms.
              </p>
            </div>
          </motion.div>

          {/* User Accounts */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              7. User Accounts
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                If we offer user accounts in the future, you will be responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access or security breach</li>
                <li>Providing accurate and current information</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent or harmful activities.
              </p>
            </div>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              8. Third-Party Services
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                The Site may integrate with or link to third-party services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Hosting and infrastructure providers (e.g., Vercel)</li>
                <li>Analytics and performance monitoring services</li>
                <li>Email service providers</li>
                <li>Payment processors (when applicable)</li>
                <li>Social media platforms</li>
              </ul>
              <p>
                Your use of third-party services is subject to their respective terms and privacy policies. We are not responsible for the practices, content, or policies of third-party services.
              </p>
            </div>
          </motion.div>

          {/* Disclaimers */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              9. Disclaimers
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>Warranties that the Site will be uninterrupted, secure, or error-free</li>
                <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
              </ul>
              <p>
                Training and biomechanics content provided on the Site is for educational purposes only and does not constitute professional medical, physical therapy, or training advice. Always consult qualified professionals before beginning any exercise program.
              </p>
            </div>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              10. Limitation of Liability
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, EXIQX PERFORMANCE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Loss of profits, revenue, data, or use</li>
                <li>Personal injury or property damage</li>
                <li>Business interruption</li>
                <li>Costs of substitute products or services</li>
              </ul>
              <p>
                Our total liability to you for any claims arising from or related to the Site or these Terms shall not exceed the amount you paid to us, if any, in the twelve (12) months preceding the claim.
              </p>
            </div>
          </motion.div>

          {/* Indemnification */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              11. Indemnification
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                You agree to indemnify, defend, and hold harmless ExIQx Performance, its officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your use or misuse of the Site</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your use of our products or training protocols</li>
              </ul>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              12. Governing Law
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Arizona, United States, without regard to its conflict of law provisions. Any disputes arising from or related to these Terms or the Site shall be subject to the exclusive jurisdiction of the state and federal courts located in Arizona.
              </p>
            </div>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              13. Changes to Terms
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be communicated by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting the updated Terms on this page with a new "Last updated" date</li>
                <li>Sending email notifications to registered users, if applicable</li>
                <li>Displaying a prominent notice on the Site</li>
              </ul>
              <p>
                Your continued use of the Site after such changes constitutes acceptance of the updated Terms. If you do not agree to the modified Terms, you must discontinue use of the Site.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div className="mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
              14. Contact
            </h2>
            <div className="space-y-4 text-white/80 font-inter leading-relaxed">
              <p>
                If you have questions about these Terms of Service, please contact us:
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

