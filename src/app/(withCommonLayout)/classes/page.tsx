'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Badge } from '@/src/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import {
  Calendar,
  Clock,
  Users,
  Star,
  Search,
  Filter,
  MapPin,
  Zap,
  Heart,
  Dumbbell,
  Activity
} from 'lucide-react';
import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';
import Image from 'next/image';

// Mock data
const classes = [
  {
    id: 1,
    name: 'HIIT Cardio Blast',
    description: 'High-intensity interval training to boost your cardiovascular fitness and burn calories fast.',
    trainer: {
      name: 'Marcus Williams',
      avatar: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8
    },
    category: 'Cardio',
    difficulty: 'High',
    duration: 45,
    maxCapacity: 15,
    currentEnrollment: 12,
    schedule: [
      { day: 'Monday', time: '18:00' },
      { day: 'Wednesday', time: '18:00' },
      { day: 'Friday', time: '18:00' }
    ],
    location: 'Studio A',
    price: 25,
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400',
    features: ['Calorie Burn', 'Cardio Boost', 'Full Body']
  },
  {
    id: 2,
    name: 'Yoga Flow',
    description: 'Gentle flowing yoga sequences to improve flexibility, balance, and mental clarity.',
    trainer: {
      name: 'Emily Chen',
      avatar: 'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5.0
    },
    category: 'Yoga',
    difficulty: 'Beginner',
    duration: 60,
    maxCapacity: 20,
    currentEnrollment: 18,
    schedule: [
      { day: 'Tuesday', time: '07:30' },
      { day: 'Thursday', time: '07:30' },
      { day: 'Saturday', time: '09:00' }
    ],
    location: 'Studio B',
    price: 20,
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
    features: ['Flexibility', 'Mindfulness', 'Stress Relief']
  },
  {
    id: 3,
    name: 'Strength Training',
    description: 'Build muscle and increase strength with progressive weight training techniques.',
    trainer: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9
    },
    category: 'Strength',
    difficulty: 'Intermediate',
    duration: 60,
    maxCapacity: 10,
    currentEnrollment: 8,
    schedule: [
      { day: 'Monday', time: '19:00' },
      { day: 'Wednesday', time: '19:00' },
      { day: 'Friday', time: '19:00' }
    ],
    location: 'Weight Room',
    price: 30,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
    features: ['Muscle Building', 'Strength', 'Progressive Training']
  },
  {
    id: 4,
    name: 'Pilates Core',
    description: 'Strengthen your core and improve posture with precise Pilates movements.',
    trainer: {
      name: 'Emily Chen',
      avatar: 'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5.0
    },
    category: 'Pilates',
    difficulty: 'Intermediate',
    duration: 50,
    maxCapacity: 12,
    currentEnrollment: 12,
    schedule: [
      { day: 'Tuesday', time: '12:00' },
      { day: 'Thursday', time: '12:00' },
      { day: 'Saturday', time: '10:30' }
    ],
    location: 'Studio C',
    price: 25,
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
    features: ['Core Strength', 'Posture', 'Flexibility']
  },
  {
    id: 5,
    name: 'Spin Class',
    description: 'High-energy cycling workout with motivating music and challenging intervals.',
    trainer: {
      name: 'Marcus Williams',
      avatar: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8
    },
    category: 'Cardio',
    difficulty: 'High',
    duration: 45,
    maxCapacity: 20,
    currentEnrollment: 16,
    schedule: [
      { day: 'Monday', time: '06:30' },
      { day: 'Wednesday', time: '06:30' },
      { day: 'Friday', time: '06:30' }
    ],
    location: 'Spin Studio',
    price: 22,
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400',
    features: ['Cardio', 'Endurance', 'Music Driven']
  },
  {
    id: 6,
    name: 'Functional Training',
    description: 'Real-world movement patterns to improve daily life activities and athletic performance.',
    trainer: {
      name: 'David Rodriguez',
      avatar: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9
    },
    category: 'Functional',
    difficulty: 'Intermediate',
    duration: 55,
    maxCapacity: 12,
    currentEnrollment: 9,
    schedule: [
      { day: 'Tuesday', time: '17:30' },
      { day: 'Thursday', time: '17:30' },
      { day: 'Saturday', time: '11:00' }
    ],
    location: 'Functional Area',
    price: 28,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
    features: ['Functional Movement', 'Athletic Performance', 'Mobility']
  }
];

const categories = ['All', 'Cardio', 'Strength', 'Yoga', 'Pilates', 'Functional'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'High'];

export default function ClassesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'high':
      case 'advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cardio':
        return Heart;
      case 'strength':
        return Dumbbell;
      case 'yoga':
      case 'pilates':
        return Activity;
      case 'functional':
        return Zap;
      default:
        return Activity;
    }
  };

  const getCapacityPercentage = (current: number, max: number) => {
    return (current / max) * 100;
  };

  const filteredClasses = classes.filter(classItem => {
    const matchesSearch = classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classItem.trainer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || classItem.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === 'All' || classItem.difficulty === difficultyFilter;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
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
              Fitness <span className="gradient-text">Classes</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Join our expert-led fitness classes designed to challenge, motivate, and transform your body. 
              From high-intensity workouts to mindful yoga sessions, find the perfect class for your fitness journey.
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
                      placeholder="Search classes or trainers..."
                      className="pl-10 bg-white/5 border-white/20"
                      value={searchTerm}
                      onChange={(e:any) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full lg:w-40 bg-white/5 border-white/20">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/20">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                    <SelectTrigger className="w-full lg:w-40 bg-white/5 border-white/20">
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent className="glass border-white/20">
                      {difficulties.map((difficulty) => (
                        <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem, index) => {
              const CategoryIcon = getCategoryIcon(classItem.category);
              return (
                <motion.div
                  key={classItem.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass border-white/20 group overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={classItem.image}
                        alt={classItem.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={500}
                        height={500}

                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-black/60 text-white border-none">
                          ${classItem.price}
                        </Badge>
                      </div>

                      {/* Category Icon */}
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <CategoryIcon className="h-5 w-5 text-white" />
                        </div>
                      </div>

                      {/* Capacity Status */}
                      <div className="absolute bottom-4 left-4">
                        {classItem.currentEnrollment >= classItem.maxCapacity ? (
                          <Badge className="bg-red-500/80 text-white border-none">
                            Full
                          </Badge>
                        ) : (
                          <Badge className="bg-green-500/80 text-white border-none">
                            {classItem.maxCapacity - classItem.currentEnrollment} spots left
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-6 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                            {classItem.name}
                          </h3>
                          <Badge className={getDifficultyColor(classItem.difficulty)}>
                            {classItem.difficulty}
                          </Badge>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {classItem.description}
                        </p>
                      </div>

                      {/* Trainer */}
                      <div className="flex items-center space-x-3 mb-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={classItem.trainer.avatar} alt={classItem.trainer.name} />
                          <AvatarFallback>{classItem.trainer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium text-white">{classItem.trainer.name}</div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-yellow-400">{classItem.trainer.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-4 text-sm text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{classItem.duration} min</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{classItem.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <Users className="h-4 w-4" />
                          <span>{classItem.currentEnrollment}/{classItem.maxCapacity} enrolled</span>
                          <div className="flex-1 bg-slate-700 rounded-full h-2 ml-2">
                            <div
                              className={`h-2 rounded-full ${
                                getCapacityPercentage(classItem.currentEnrollment, classItem.maxCapacity) >= 100
                                  ? 'bg-red-500'
                                  : getCapacityPercentage(classItem.currentEnrollment, classItem.maxCapacity) >= 80
                                  ? 'bg-orange-500'
                                  : 'bg-green-500'
                              }`}
                              style={{
                                width: `${Math.min(getCapacityPercentage(classItem.currentEnrollment, classItem.maxCapacity), 100)}%`
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {classItem.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs bg-slate-800 text-slate-300">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Schedule */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-white mb-2">Schedule</h4>
                        <div className="space-y-1">
                          {classItem.schedule.map((session, idx) => (
                            <div key={idx} className="flex items-center justify-between text-sm">
                              <span className="text-slate-400">{session.day}</span>
                              <span className="text-white">{session.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto">
                        <Button 
                          className={`w-full ${
                            classItem.currentEnrollment >= classItem.maxCapacity 
                              ? 'btn-secondary opacity-50 cursor-not-allowed' 
                              : 'btn-primary'
                          }`}
                          disabled={classItem.currentEnrollment >= classItem.maxCapacity}
                        >
                          {classItem.currentEnrollment >= classItem.maxCapacity ? (
                            'Class Full'
                          ) : (
                            <>
                              <Calendar className="w-4 h-4 mr-2" />
                              Book Class
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredClasses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-slate-400 mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No classes found matching your criteria</p>
                <p className="text-sm">Try adjusting your filters or search terms</p>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}