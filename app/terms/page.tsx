'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Scale,
  CreditCard,
  UserCheck,
  Shield,
  AlertTriangle,
  Calendar,
  Mail
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const sections = [
  {
    icon: UserCheck,
    title: 'Membership Terms',
    content: [
      'Membership is non-transferable and for personal use only',
      'Valid photo ID required for facility access',
      'Minimum age requirement is 16 years (parental consent required for minors)',
      'Members must follow all gym rules and safety guidelines',
      'Membership benefits vary by plan type (Basic, Pro, Premium)'
    ]
  },
  {
    icon: CreditCard,
    title: 'Payment & Billing',
    content: [
      'Monthly memberships are billed in advance on the same date each month',
      'Annual memberships are billed upfront with discount applied',
      'Failed payments may result in membership suspension after 7 days',
      'All fees are non-refundable except as required by law',
      'Price changes require 30 days advance notice'
    ]
  },
  {
    icon: Scale,
    title: 'Cancellation Policy',
    content: [
      'Monthly memberships can be cancelled with 30 days written notice',
      'Annual memberships cannot be cancelled except for medical reasons',
      'Cancellation must be submitted in writing or through member portal',
      'No refunds for partial months or unused services',
      'Account must be in good standing to process cancellation'
    ]
  },
  {
    icon: Shield,
    title: 'Facility Rules',
    content: [
      'Proper athletic attire and closed-toe shoes required',
      'Equipment must be wiped down after use',
      'No outside food or beverages (water bottles permitted)',
      'Respectful behavior towards staff and other members required',
      'Photography/recording prohibited without written consent'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Liability & Safety',
    content: [
      'Members exercise at their own risk and assume full responsibility',
      'PowerHouse Gym is not liable for injuries or accidents',
      'Medical clearance recommended before starting any fitness program',
      'Report injuries or equipment issues to staff immediately',
      'Emergency procedures posted throughout the facility'
    ]
  },
  {
    icon: FileText,
    title: 'Intellectual Property',
    content: [
      'All content, logos, and materials are property of PowerHouse Gym',
      'Members may not reproduce or distribute our proprietary content',
      'Workout programs and training materials are for personal use only',
      'Violation of intellectual property rights may result in membership termination',
      'Third-party content used with appropriate licensing'
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-4">
                <FileText className="w-full h-full text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Please read these terms carefully before using PowerHouse Gym facilities and services. 
              By becoming a member, you agree to be bound by these terms and conditions.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-6">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                <Calendar className="w-3 h-3 mr-1" />
                Effective: January 1, 2024
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                Version 2.1
              </Badge>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <Card className="glass border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Agreement Overview</h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    These Terms of Service (&quot;Terms&quot;) govern your use of PowerHouse Gym facilities, 
                    services, and digital platforms. By signing up for a membership or using our 
                    services, you enter into a legally binding agreement with PowerHouse Gym LLC.
                  </p>
                  <p>
                    We reserve the right to modify these terms at any time. Material changes will 
                    be communicated to members via email and posted on our website at least 30 days 
                    before taking effect. Continued use of our services after changes constitutes 
                    acceptance of the new terms.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                >
                  <Card className="glass border-white/20">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 p-2">
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <span>{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <span className="text-slate-300 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <Card className="glass border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Additional Provisions</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Dispute Resolution</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Any disputes will be resolved through binding arbitration in accordance with 
                      the rules of the American Arbitration Association. Class action lawsuits 
                      are waived by all parties.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Governing Law</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      These terms are governed by the laws of the state where the facility is 
                      located, without regard to conflict of law principles. Federal courts 
                      have exclusive jurisdiction.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Severability</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      If any provision of these terms is found to be unenforceable, the remaining 
                      provisions will continue in full force and effect. Invalid provisions will 
                      be replaced with enforceable equivalents.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Force Majeure</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      PowerHouse Gym is not liable for delays or failures due to circumstances 
                      beyond our control, including natural disasters, government actions, or 
                      public health emergencies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12"
          >
            <Card className="glass border-white/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
                <p className="text-slate-300 mb-6">
                  If you have any questions about these Terms of Service or need clarification 
                  on any provisions, please contact our legal team.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="mailto:legal@powerhousegym.com"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Legal Team
                  </a>
                  <a 
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 glass border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Contact Form
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Acknowledgment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12"
          >
            <Card className="glass border-white/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">Important Notice</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      By using PowerHouse Gym facilities and services, you acknowledge that you have 
                      read, understood, and agree to be bound by these Terms of Service. If you do 
                      not agree with any part of these terms, please do not use our services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}