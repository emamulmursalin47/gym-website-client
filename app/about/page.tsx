'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Award,
  Target,
  Heart,
  Dumbbell,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';

const stats = [
  { icon: Users, value: '5,000+', label: 'Happy Members' },
  { icon: Award, value: '50+', label: 'Expert Trainers' },
  { icon: Calendar, value: '8', label: 'Years of Excellence' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
];

const values = [
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'We help you set and achieve realistic fitness goals with personalized plans and expert guidance.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'Building a supportive community where everyone feels welcome and motivated to succeed.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to providing the highest quality equipment, training, and facilities.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Inclusive',
    description: 'Welcoming fitness enthusiasts of all levels, from beginners to professional athletes.',
    gradient: 'from-purple-500 to-indigo-500',
  },
];

const team = [
  {
    name: 'John Mitchell',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Former professional athlete with 15+ years in fitness industry leadership.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Training',
    image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Certified strength coach specializing in performance optimization and injury prevention.',
  },
  {
    name: 'Marcus Williams',
    role: 'Operations Director',
    image: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Business operations expert ensuring smooth daily operations and member satisfaction.',
  },
  {
    name: 'Emily Chen',
    role: 'Wellness Coordinator',
    image: 'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Holistic wellness expert focusing on mental health and lifestyle coaching.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-gym-hero bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="gradient-text">PowerHouse</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Since 2016, PowerHouse Gym has been transforming lives through fitness. 
                We&apos;re more than just a gym – we&lsquo;re a community dedicated to helping you 
                achieve your health and wellness goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-slate-400 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    PowerHouse Gym was born from a simple belief: everyone deserves access to 
                    world-class fitness facilities and expert guidance, regardless of their 
                    starting point or fitness level.
                  </p>
                  <p>
                    Founded in 2016 by former professional athlete John Mitchell, we started 
                    with a vision to create more than just a gym. We wanted to build a community 
                    where people could transform not just their bodies, but their entire lives.
                  </p>
                  <p>
                    Today, we&apos;re proud to serve over 5,000 members with state-of-the-art equipment, 
                    expert trainers, and a supportive community that celebrates every victory, 
                    no matter how small.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="PowerHouse Gym Interior"
                    className="w-full h-96 object-cover"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Dumbbell className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                These core values guide everything we do and shape the experience 
                we create for our members every day.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="glass border-white/20 h-full group">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                          {value.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Our passionate team of fitness professionals and support staff 
                are here to help you succeed on your fitness journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass border-white/20 group overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {member.name}
                      </h3>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-3">
                        {member.role}
                      </Badge>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-white/20">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Visit Us Today</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-blue-500" />
                          <span className="text-slate-300">123 Fitness Street, Health City, HC 12345</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-blue-500" />
                          <span className="text-slate-300">(555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-blue-500" />
                          <span className="text-slate-300">info@powerhousegym.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-blue-500" />
                          <span className="text-slate-300">Mon-Sun: 5:00 AM - 11:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center lg:text-right">
                      <h3 className="text-2xl font-bold text-white mb-6">Ready to Start?</h3>
                      <p className="text-slate-400 mb-6">
                        Join thousands of members who have already transformed their lives at PowerHouse Gym.
                      </p>
                      <Button className="btn-primary text-lg px-8 py-4">
                        Start Your Journey
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}