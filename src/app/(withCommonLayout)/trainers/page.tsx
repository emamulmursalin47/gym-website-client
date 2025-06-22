'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Badge } from '@/src/components/ui/badge';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import {
  Calendar,
  Star,
  Search,
  Award,
  Users,
  Clock,
  MessageSquare,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle
} from 'lucide-react';

import Image from 'next/image';

// Mock data
const trainers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Head Personal Trainer',
    specialties: ['Strength Training', 'Nutrition', 'Weight Loss'],
    certifications: ['NASM-CPT', 'CSCS', 'Precision Nutrition'],
    experience: 8,
    rating: 4.9,
    totalReviews: 156,
    hourlyRate: 85,
    image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Certified strength and conditioning specialist with expertise in Olympic lifting and sports nutrition. Passionate about helping clients achieve their fitness goals through personalized training programs.',
    achievements: ['Regional Powerlifting Champion', '500+ Client Transformations', 'Nutrition Specialist'],
    availability: 'Available',
    languages: ['English', 'Spanish'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
    stats: {
      clients: 45,
      sessions: 1200,
      years: 8
    }
  },
  {
    id: 2,
    name: 'Marcus Williams',
    title: 'HIIT & Cardio Specialist',
    specialties: ['HIIT', 'Cardio', 'Athletic Performance', 'Endurance'],
    certifications: ['ACSM-CPT', 'TRX Certified', 'Kettlebell Instructor'],
    experience: 6,
    rating: 4.8,
    totalReviews: 98,
    hourlyRate: 75,
    image: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Former professional athlete specializing in high-intensity interval training and athletic performance. Expert in helping clients improve cardiovascular fitness and endurance.',
    achievements: ['Former Olympic Sprinter', 'Master Trainer Certification', 'Sports Performance Coach'],
    availability: 'Available',
    languages: ['English'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
    stats: {
      clients: 38,
      sessions: 890,
      years: 6
    }
  },
  {
    id: 3,
    name: 'Emily Chen',
    title: 'Yoga & Wellness Coach',
    specialties: ['Yoga', 'Pilates', 'Mindfulness', 'Stress Management'],
    certifications: ['RYT-500', 'Pilates Instructor', 'Meditation Teacher'],
    experience: 10,
    rating: 5.0,
    totalReviews: 203,
    hourlyRate: 90,
    image: 'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Certified yoga instructor and wellness coach focusing on holistic health and stress management. Specializes in helping clients find balance between physical fitness and mental well-being.',
    achievements: ['International Yoga Alliance', '1000+ Hours Training', 'Wellness Specialist'],
    availability: 'Limited',
    languages: ['English', 'Mandarin'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
    stats: {
      clients: 52,
      sessions: 1500,
      years: 10
    }
  },
  {
    id: 4,
    name: 'David Rodriguez',
    title: 'Functional Training Expert',
    specialties: ['Functional Training', 'Rehabilitation', 'Mobility', 'Injury Prevention'],
    certifications: ['DPT', 'FMS', 'SFMA', 'Corrective Exercise'],
    experience: 12,
    rating: 4.9,
    totalReviews: 134,
    hourlyRate: 95,
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Physical therapist turned trainer, specializing in injury prevention and functional movement patterns. Expert in helping clients move better and live pain-free.',
    achievements: ['Licensed Physical Therapist', 'Movement Specialist', 'Rehabilitation Expert'],
    availability: 'Available',
    languages: ['English', 'Spanish'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
    stats: {
      clients: 35,
      sessions: 980,
      years: 12
    }
  },
  {
    id: 5,
    name: 'Jessica Martinez',
    title: 'Women\'s Fitness Specialist',
    specialties: ['Women\'s Fitness', 'Prenatal Training', 'Postnatal Recovery', 'Body Composition'],
    certifications: ['NASM-CPT', 'Pre/Postnatal Specialist', 'Nutrition Coach'],
    experience: 7,
    rating: 4.9,
    totalReviews: 167,
    hourlyRate: 80,
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Specialized in women\'s fitness with expertise in prenatal and postnatal training. Passionate about empowering women through all stages of their fitness journey.',
    achievements: ['Women\'s Fitness Specialist', 'Prenatal Training Expert', 'Body Transformation Coach'],
    availability: 'Available',
    languages: ['English', 'Spanish'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
    stats: {
      clients: 42,
      sessions: 1100,
      years: 7
    }
  },
  {
    id: 6,
    name: 'Alex Thompson',
    title: 'Sports Performance Coach',
    specialties: ['Sports Performance', 'Athletic Training', 'Speed & Agility', 'Plyometrics'],
    certifications: ['CSCS', 'USATF Level 2', 'Speed & Agility Specialist'],
    experience: 9,
    rating: 4.8,
    totalReviews: 89,
    hourlyRate: 88,
    image: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Former collegiate athlete specializing in sports performance and athletic development. Expert in helping athletes reach their peak performance potential.',
    achievements: ['Collegiate Track Coach', 'Performance Specialist', 'Athletic Development Expert'],
    availability: 'Available',
    languages: ['English'],
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
    stats: {
      clients: 28,
      sessions: 750,
      years: 9
    }
  }
];

const specialties = ['All', 'Strength Training', 'HIIT', 'Yoga', 'Functional Training', 'Sports Performance', 'Women\'s Fitness'];
const availability = ['All', 'Available', 'Limited', 'Busy'];

export default function TrainersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Limited':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Busy':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const filteredTrainers = trainers.filter(trainer => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trainer.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty = specialtyFilter === 'All' || 
                            trainer.specialties.some(s => s.includes(specialtyFilter));
    const matchesAvailability = availabilityFilter === 'All' || trainer.availability === availabilityFilter;
    
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });

  return (
    <div className="min-h-screen">
 
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Expert <span className="gradient-text">Trainers</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Work with certified fitness professionals who are passionate about helping you achieve your goals. 
              Our trainers bring years of experience and specialized expertise to guide your fitness journey.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Card className="glass border-white/20">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search trainers or specialties..."
                      className="pl-10 bg-white/5 border-white/20"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                    <SelectTrigger className="w-full lg:w-48 bg-white/5 border-white/20">
                      <SelectValue placeholder="Specialty" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/20">
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                    <SelectTrigger className="w-full lg:w-40 bg-white/5 border-white/20">
                      <SelectValue placeholder="Availability" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/20">
                      {availability.map((avail) => (
                        <SelectItem key={avail} value={avail}>{avail}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Trainers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass border-white/20 group overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      width={500}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Availability Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className={getAvailabilityColor(trainer.availability)}>
                        {trainer.availability}
                      </Badge>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-1 bg-black/60 rounded-full px-2 py-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-white text-sm font-medium">{trainer.rating}</span>
                      </div>
                    </div>

                    {/* Social Links */}
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

                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {trainer.name}
                      </h3>
                      <p className="text-blue-400 text-sm font-medium mb-2">{trainer.title}</p>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{trainer.experience} years</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{trainer.stats.clients} clients</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {trainer.bio}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {trainer.specialties.slice(0, 3).map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="text-xs bg-blue-500/20 text-blue-400">
                            {specialty}
                          </Badge>
                        ))}
                        {trainer.specialties.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-slate-800 text-slate-300">
                            +{trainer.specialties.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Certifications</h4>
                      <div className="flex flex-wrap gap-1">
                        {trainer.certifications.slice(0, 2).map((cert) => (
                          <Badge key={cert} variant="outline" className="text-xs border-green-500/30 text-green-400">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {cert}
                          </Badge>
                        ))}
                        {trainer.certifications.length > 2 && (
                          <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
                            +{trainer.certifications.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mb-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-white">{trainer.totalReviews}</div>
                          <div className="text-xs text-slate-400">Reviews</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{trainer.stats.sessions}</div>
                          <div className="text-xs text-slate-400">Sessions</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">${trainer.hourlyRate}</div>
                          <div className="text-xs text-slate-400">Per Hour</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto space-y-2">
                      <Button className="w-full btn-primary">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Session
                      </Button>
                      <Button variant="ghost" className="w-full btn-secondary">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredTrainers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-slate-400 mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No trainers found matching your criteria</p>
                <p className="text-sm">Try adjusting your filters or search terms</p>
              </div>
            </motion.div>
          )}
        </div>
      </main>


    </div>
  );
}