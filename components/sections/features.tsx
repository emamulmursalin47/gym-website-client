'use client';

import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Users, 
  Clock, 
  Trophy, 
  Heart, 
  Zap,
  Target,
  Shield
} from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'State-of-the-Art Equipment',
    description: 'Latest fitness technology and premium equipment from leading brands to maximize your workout efficiency.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Expert Personal Trainers',
    description: 'Certified professionals dedicated to helping you achieve your fitness goals with personalized training programs.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Work out on your schedule with round-the-clock access to all facilities and amenities.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Trophy,
    title: 'Group Classes',
    description: 'Join energizing group fitness classes led by experienced instructors for motivation and community.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Wellness Programs',
    description: 'Comprehensive health and wellness programs including nutrition counseling and lifestyle coaching.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Zap,
    title: 'High-Intensity Training',
    description: 'Specialized HIIT and functional training areas designed for maximum calorie burn and strength building.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Advanced progress tracking and goal-setting tools to monitor your fitness journey and celebrate achievements.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'Clean, sanitized facilities with safety protocols and emergency equipment for your peace of mind.',
    gradient: 'from-teal-500 to-cyan-500',
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
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
            Why Choose{' '}
            <span className="gradient-text">PowerHouse</span>?
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Experience fitness like never before with our premium facilities, expert guidance, 
            and community-driven approach to achieving your health and wellness goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card group cursor-pointer relative overflow-hidden"
              >
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Explore All Features
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}