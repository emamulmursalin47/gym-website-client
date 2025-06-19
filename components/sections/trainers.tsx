'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Award, 
  Calendar,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const trainers = [
  {
    name: 'Sarah Johnson',
    title: 'Head Personal Trainer',
    specialty: 'Strength Training & Nutrition',
    experience: '8 years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Certified strength and conditioning specialist with expertise in Olympic lifting and sports nutrition.',
    certifications: ['NASM-CPT', 'CSCS', 'Precision Nutrition'],
    achievements: ['Regional Powerlifting Champion', '500+ Client Transformations'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Marcus Williams',
    title: 'HIIT & Cardio Specialist',
    specialty: 'High-Intensity Training',
    experience: '6 years',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Former professional athlete specializing in high-intensity interval training and athletic performance.',
    certifications: ['ACSM-CPT', 'TRX Certified', 'Kettlebell Instructor'],
    achievements: ['Former Olympic Sprinter', 'Master Trainer Certification'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Emily Chen',
    title: 'Yoga & Wellness Coach',
    specialty: 'Mind-Body Connection',
    experience: '10 years',
    rating: 5.0,
    image: 'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Certified yoga instructor and wellness coach focusing on holistic health and stress management.',
    certifications: ['RYT-500', 'Meditation Teacher', 'Health Coach'],
    achievements: ['International Yoga Alliance', '1000+ Hours Training'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'David Rodriguez',
    title: 'Functional Training Expert',
    specialty: 'Rehabilitation & Mobility',
    experience: '12 years',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Physical therapist turned trainer, specializing in injury prevention and functional movement patterns.',
    certifications: ['DPT', 'FMS', 'SFMA'],
    achievements: ['Licensed Physical Therapist', 'Movement Specialist'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
];

export function Trainers() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent" />
      
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
            Meet Your{' '}
            <span className="gradient-text">Expert Trainers</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our certified professionals are dedicated to helping you achieve your fitness goals 
            with personalized training programs and expert guidance.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/60 text-white border-none">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {trainer.rating}
                  </Badge>
                </div>

                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a href={trainer.social.instagram} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a href={trainer.social.twitter} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                    <a href={trainer.social.linkedin} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {trainer.name}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium mb-2">{trainer.title}</p>
                  <p className="text-slate-400 text-sm">{trainer.specialty}</p>
                </div>

                <div className="text-xs text-slate-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-3 h-3" />
                    <span>{trainer.experience} experience</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {trainer.bio}
                </p>

                {/* Certifications */}
                <div className="flex flex-wrap gap-1">
                  {trainer.certifications.slice(0, 2).map((cert) => (
                    <Badge key={cert} variant="secondary" className="text-xs bg-slate-800 text-slate-300">
                      {cert}
                    </Badge>
                  ))}
                  {trainer.certifications.length > 2 && (
                    <Badge variant="secondary" className="text-xs bg-slate-800 text-slate-300">
                      +{trainer.certifications.length - 2}
                    </Badge>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  size="sm" 
                  className="w-full btn-secondary group-hover:btn-primary transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Session
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <Button className="btn-primary text-lg px-8 py-4">
            View All Trainers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}