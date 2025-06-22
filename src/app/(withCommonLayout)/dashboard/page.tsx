'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Badge } from '@/src/components/ui/badge';
import { Progress } from '@/src/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import { 
  User, 
  Calendar, 
  Trophy, 
  Target, 
  Clock, 
  Activity,
  TrendingUp,
  Award,
  Users,
  MessageSquare,
  Settings,
  Bell,
  Plus,
  Play,
  Pause,
  BarChart3
} from 'lucide-react';
import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';

// Mock data - in a real app, this would come from an API
const userStats = {
  totalWorkouts: 45,
  currentStreak: 7,
  monthlyGoal: 20,
  completedWorkouts: 15,
  caloriesBurned: 12500,
  hoursSpent: 34,
};

const upcomingClasses = [
  {
    id: 1,
    name: 'HIIT Cardio Blast',
    trainer: 'Marcus Williams',
    time: '2024-01-15T18:00:00',
    duration: 45,
    spots: 12,
    maxSpots: 15,
    difficulty: 'High',
  },
  {
    id: 2,
    name: 'Yoga Flow',
    trainer: 'Emily Chen',
    time: '2024-01-16T07:30:00',
    duration: 60,
    spots: 8,
    maxSpots: 20,
    difficulty: 'Beginner',
  },
  {
    id: 3,
    name: 'Strength Training',
    trainer: 'Sarah Johnson',
    time: '2024-01-16T19:00:00',
    duration: 60,
    spots: 5,
    maxSpots: 10,
    difficulty: 'Intermediate',
  },
];

const recentWorkouts = [
  {
    id: 1,
    type: 'Cardio',
    duration: 45,
    calories: 380,
    date: '2024-01-10',
    intensity: 'High',
  },
  {
    id: 2,
    type: 'Strength',
    duration: 60,
    calories: 220,
    date: '2024-01-08',
    intensity: 'Medium',
  },
  {
    id: 3,
    type: 'Yoga',
    duration: 75,
    calories: 180,
    date: '2024-01-06',
    intensity: 'Low',
  },
];

const achievements = [
  {
    id: 1,
    title: 'Week Warrior',
    description: '7 days workout streak',
    icon: Trophy,
    earned: true,
    date: '2024-01-10',
  },
  {
    id: 2,
    title: 'Cardio King',
    description: '10 cardio sessions completed',
    icon: Activity,
    earned: true,
    date: '2024-01-05',
  },
  {
    id: 3,
    title: 'Early Bird',
    description: '5 morning workouts',
    icon: Clock,
    earned: false,
    progress: 60,
  },
];

export default function DashboardPage() {
  const [activeTimer, setActiveTimer] = useState(false);
  const [timerTime, setTimerTime] = useState(0);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

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

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  Welcome back, <span className="gradient-text">John</span>!
                </h1>
                <p className="text-slate-400">
                  Ready to crush your fitness goals today?
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                <Button className="btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Log Workout
                </Button>
                <Button variant="ghost" className="btn-secondary">
                  <Bell className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <Card className="glass border-white/20 group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Total Workouts</p>
                    <p className="text-2xl font-bold text-white">{userStats.totalWorkouts}</p>
                  </div>
                  <Activity className="h-8 w-8 text-blue-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Current Streak</p>
                    <p className="text-2xl font-bold text-white">{userStats.currentStreak} days</p>
                  </div>
                  <Trophy className="h-8 w-8 text-orange-500 group-hover:text-orange-400 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Calories Burned</p>
                    <p className="text-2xl font-bold text-white">{userStats.caloriesBurned.toLocaleString()}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-500 group-hover:text-green-400 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Hours Spent</p>
                    <p className="text-2xl font-bold text-white">{userStats.hoursSpent}h</p>
                  </div>
                  <Clock className="h-8 w-8 text-purple-500 group-hover:text-purple-400 transition-colors" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Monthly Progress */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-blue-500" />
                      <span>Monthly Goal Progress</span>
                    </CardTitle>
                    <CardDescription>
                      {userStats.completedWorkouts} of {userStats.monthlyGoal} workouts completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Progress 
                        value={(userStats.completedWorkouts / userStats.monthlyGoal) * 100} 
                        className="h-3"
                      />
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>{userStats.completedWorkouts} completed</span>
                        <span>{userStats.monthlyGoal - userStats.completedWorkouts} remaining</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Workout Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Tabs defaultValue="upcoming" className="space-y-6">
                  <TabsList className="glass border-white/20">
                    <TabsTrigger value="upcoming">Upcoming Classes</TabsTrigger>
                    <TabsTrigger value="recent">Recent Workouts</TabsTrigger>
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  </TabsList>

                  <TabsContent value="upcoming" className="space-y-4">
                    {upcomingClasses.map((class_) => (
                      <Card key={class_.id} className="glass border-white/20 group hover:bg-white/5 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                                  {class_.name}
                                </h3>
                                <Badge className={`text-xs ${getDifficultyColor(class_.difficulty)}`}>
                                  {class_.difficulty}
                                </Badge>
                              </div>
                              <p className="text-sm text-slate-400 mb-1">
                                with {class_.trainer}
                              </p>
                              <p className="text-sm text-slate-500">
                                {formatDate(class_.time)} • {class_.duration} min
                              </p>
                              <div className="flex items-center space-x-4 mt-3 text-xs text-slate-400">
                                <span>{class_.spots}/{class_.maxSpots} spots available</span>
                                <Progress 
                                  value={(class_.spots / class_.maxSpots) * 100} 
                                  className="w-20 h-1"
                                />
                              </div>
                            </div>
                            <Button size="sm" className="btn-primary">
                              Book Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="recent" className="space-y-4">
                    {recentWorkouts.map((workout) => (
                      <Card key={workout.id} className="glass border-white/20">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-white mb-1">{workout.type}</h3>
                              <p className="text-sm text-slate-400">
                                {new Date(workout.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-slate-300">
                                {workout.duration} min • {workout.calories} cal
                              </div>
                              <Badge className={`text-xs mt-1 ${getDifficultyColor(workout.intensity)}`}>
                                {workout.intensity}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="achievements" className="space-y-4">
                    {achievements.map((achievement) => {
                      const Icon = achievement.icon;
                      return (
                        <Card key={achievement.id} className="glass border-white/20">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                achievement.earned 
                                  ? 'bg-gradient-to-br from-yellow-500 to-orange-500' 
                                  : 'bg-slate-700'
                              }`}>
                                <Icon className="h-6 w-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-white mb-1">
                                  {achievement.title}
                                </h3>
                                <p className="text-sm text-slate-400 mb-2">
                                  {achievement.description}
                                </p>
                                {achievement.earned ? (
                                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                    Earned {new Date(achievement.date!).toLocaleDateString()}
                                  </Badge>
                                ) : (
                                  <div className="space-y-2">
                                    <Progress value={achievement.progress} className="h-2" />
                                    <p className="text-xs text-slate-500">
                                      {achievement.progress}% complete
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass border-white/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full btn-secondary justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book a Class
                    </Button>
                    <Button className="w-full btn-secondary justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Find Workout Buddy
                    </Button>
                    <Button className="w-full btn-secondary justify-start">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Community Forum
                    </Button>
                    <Button className="w-full btn-secondary justify-start">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Workout Timer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="glass border-white/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Workout Timer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="text-3xl font-mono font-bold text-white">
                      {Math.floor(timerTime / 60).toString().padStart(2, '0')}:
                      {(timerTime % 60).toString().padStart(2, '0')}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        onClick={() => setActiveTimer(!activeTimer)}
                        className={activeTimer ? 'btn-secondary' : 'btn-primary'}
                      >
                        {activeTimer ? (
                          <>
                            <Pause className="w-4 h-4 mr-2" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Start
                          </>
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setTimerTime(0);
                          setActiveTimer(false);
                        }}
                        className="btn-secondary"
                      >
                        Reset
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Membership Status */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="glass border-white/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Membership Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Plan</span>
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                        Pro
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Next Billing</span>
                      <span className="text-white">Jan 25, 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Personal Training</span>
                      <span className="text-white">2 sessions left</span>
                    </div>
                    <Button className="w-full btn-secondary">
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}