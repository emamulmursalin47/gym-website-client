'use client';

import { motion } from 'framer-motion';
import { Button } from '@/src/components/ui/button';
import { Badge } from '@/src/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 29,
    period: 'month',
    description: 'Perfect for getting started on your fitness journey',
    icon: Zap,
    popular: false,
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Basic mobile app',
      'Community forum access',
      'Email support',
    ],
    gradient: 'from-slate-600 to-slate-700',
    buttonClass: 'btn-secondary',
  },
  {
    name: 'Pro',
    price: 59,
    period: 'month',
    description: 'Most popular choice for serious fitness enthusiasts',
    icon: Star,
    popular: true,
    features: [
      'Everything in Basic',
      'Group fitness classes',
      '2 personal training sessions/month',
      'Nutrition consultation',
      'Premium mobile app features',
      'Priority booking',
      'Guest passes (2/month)',
    ],
    gradient: 'from-blue-600 to-cyan-600',
    buttonClass: 'btn-primary',
  },
  {
    name: 'Premium',
    price: 99,
    period: 'month',
    description: 'Ultimate fitness experience with exclusive benefits',
    icon: Crown,
    popular: false,
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      'Premium locker with towel service',
      'Massage therapy (2 sessions/month)',
      'Nutrition meal planning',
      'VIP parking',
      'Guest passes (unlimited)',
      '24/7 concierge support',
    ],
    gradient: 'from-purple-600 to-pink-600',
    buttonClass: 'btn-primary',
  },
];

export function MembershipPlans() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your{' '}
            <span className="gradient-text">Membership</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Select the perfect plan that fits your fitness goals and lifestyle. 
            All memberships include access to our world-class facilities.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative glass-card ${
                  plan.popular ? 'ring-2 ring-blue-500/50 scale-105' : ''
                } group`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 text-sm font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                  
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl lg:text-5xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-slate-400 text-lg ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${plan.buttonClass} text-lg py-3 group-hover:scale-105 transition-transform duration-300`}
                  size="lg"
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </Button>

                {/* Background Decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-slate-400 text-sm">
            All plans include a 7-day free trial. No setup fees. Cancel anytime.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            * Personal training sessions are subject to trainer availability
          </p>
        </motion.div>
      </div>
    </section>
  );
}