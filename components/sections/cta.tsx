'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Gift } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card border-2 border-white/20 relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full translate-y-12 -translate-x-12" />

            {/* Special Offer Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Gift className="h-4 w-4" />
              <span>Limited Time Offer</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              Ready to{' '}
              <span className="gradient-text">Transform</span>{' '}
              Your Life?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Join thousands of members who have already transformed their lives at PowerHouse Gym. 
              Start your fitness journey today with our exclusive membership offer.
            </motion.p>

            {/* Offer Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">7 Days</div>
                <div className="text-sm text-slate-400">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">$0</div>
                <div className="text-sm text-slate-400">Setup Fee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">30%</div>
                <div className="text-sm text-slate-400">Off First Month</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="btn-primary text-lg px-8 py-4 relative overflow-hidden group" asChild>
                  <Link href="/register">
                    <span className="relative z-10 flex items-center">
                      Claim Your Offer
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="btn-secondary text-lg px-8 py-4 relative overflow-hidden group"
                  asChild
                >
                  <Link href="/tour">
                    <span className="relative z-10 flex items-center">
                      <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Take a Tour
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Fine Print */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-xs text-slate-500 mt-6"
            >
              *Offer valid for new members only. Terms and conditions apply. Limited time offer.
            </motion.p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12 text-sm text-slate-400"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>No Long-term Contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Money-back Guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}