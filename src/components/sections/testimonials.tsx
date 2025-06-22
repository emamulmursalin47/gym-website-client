'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/src/components/ui/card';

const testimonials = [
  {
    name: 'Jessica Martinez',
    role: 'Marketing Executive',
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'PowerHouse Gym completely transformed my life. The trainers are incredibly knowledgeable and supportive. I\'ve lost 30 pounds and gained so much confidence!',
    achievement: 'Lost 30 lbs in 4 months',
  },
  {
    name: 'Michael Thompson',
    role: 'Software Engineer',
    image: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'The 24/7 access is perfect for my schedule. The equipment is top-notch and the atmosphere is motivating. Best gym investment I\'ve ever made.',
    achievement: 'Built 15 lbs of muscle',
  },
  {
    name: 'Amanda Foster',
    role: 'Teacher',
    image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'The group classes are amazing and the community is so welcoming. I\'ve made great friends and achieved fitness goals I never thought possible.',
    achievement: 'Completed first marathon',
  },
  {
    name: 'Robert Kim',
    role: 'Business Owner',
    image: 'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'PowerHouse helped me get back in shape after years of neglecting my health. The personal training sessions were game-changing.',
    achievement: 'Improved health markers',
  },
  {
    name: 'Lisa Chen',
    role: 'Nurse',
    image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'As a healthcare worker, I appreciate the cleanliness and safety protocols. The stress relief I get from my workouts here is invaluable.',
    achievement: 'Reduced stress levels',
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Chef',
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'The nutrition coaching combined with the workout plans helped me completely change my relationship with food and fitness.',
    achievement: 'Lost 45 lbs, gained energy',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
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
            Success{' '}
            <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Real transformations from real people. See how PowerHouse Gym has helped 
            thousands of members achieve their fitness goals and transform their lives.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="glass border-white/10 h-full group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-blue-500 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Achievement Badge */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-medium">
                      {testimonial.achievement}
                    </span>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-blue-500/50 transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:opacity-0 transition-opacity duration-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-400 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 lg:mt-24"
        >
          {[
            { value: '98%', label: 'Member Satisfaction' },
            { value: '5,000+', label: 'Success Stories' },
            { value: '50M+', label: 'Pounds Lost' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}