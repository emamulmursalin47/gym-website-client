'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Badge } from '@/src/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import {
  MessageSquare,
  Search,
  Plus,
  Heart,
  Share2,
  Bookmark,
  TrendingUp,
  Users,
  Calendar,
  Award,
  Target,
  Clock,
  Eye,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';
import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';
import Image from 'next/image';

// Mock data
const forumPosts = [
  {
    id: 1,
    title: 'Best Pre-Workout Nutrition Tips',
    content: 'What do you eat before your workouts? I\'ve been experimenting with different foods and timing...',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=150',
      badge: 'Pro Member'
    },
    category: 'Nutrition',
    tags: ['nutrition', 'pre-workout', 'tips'],
    likes: 24,
    replies: 12,
    views: 156,
    createdAt: '2024-01-20T10:30:00Z',
    isPinned: false,
    isHot: true
  },
  {
    id: 2,
    title: 'My 6-Month Transformation Journey',
    content: 'Sharing my progress photos and the workout routine that helped me lose 30 pounds...',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=150',
      badge: 'Transformation Winner'
    },
    category: 'Success Stories',
    tags: ['transformation', 'weight-loss', 'motivation'],
    likes: 89,
    replies: 34,
    views: 542,
    createdAt: '2024-01-19T14:15:00Z',
    isPinned: true,
    isHot: true
  },
  {
    id: 3,
    title: 'Form Check: Deadlift Technique',
    content: 'Could someone review my deadlift form? I want to make sure I\'m doing it correctly...',
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=150',
      badge: 'New Member'
    },
    category: 'Form Check',
    tags: ['deadlift', 'form', 'technique'],
    likes: 15,
    replies: 8,
    views: 98,
    createdAt: '2024-01-19T09:45:00Z',
    isPinned: false,
    isHot: false
  },
  {
    id: 4,
    title: 'Weekly Challenge: 100 Push-ups',
    content: 'Who\'s up for a challenge? Let\'s do 100 push-ups every day this week!',
    author: {
      name: 'David Wilson',
      avatar: 'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=150',
      badge: 'Challenge Master'
    },
    category: 'Challenges',
    tags: ['challenge', 'push-ups', 'weekly'],
    likes: 67,
    replies: 23,
    views: 234,
    createdAt: '2024-01-18T16:20:00Z',
    isPinned: false,
    isHot: true
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'The Science Behind HIIT Training',
    excerpt: 'Discover why high-intensity interval training is one of the most effective workout methods for burning fat and building endurance.',
    author: {
      name: 'Dr. Marcus Williams',
      avatar: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'Head Trainer'
    },
    category: 'Training',
    readTime: 5,
    publishedAt: '2024-01-20T08:00:00Z',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400',
    likes: 156,
    comments: 23
  },
  {
    id: 2,
    title: 'Nutrition Myths Debunked',
    excerpt: 'Separating fact from fiction in the world of fitness nutrition. Learn what really works for optimal performance.',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'Nutrition Specialist'
    },
    category: 'Nutrition',
    readTime: 7,
    publishedAt: '2024-01-18T12:00:00Z',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    likes: 203,
    comments: 45
  },
  {
    id: 3,
    title: 'Building Mental Resilience Through Fitness',
    excerpt: 'How regular exercise can strengthen not just your body, but also your mental fortitude and emotional well-being.',
    author: {
      name: 'Emily Chen',
      avatar: 'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'Wellness Coach'
    },
    category: 'Wellness',
    readTime: 6,
    publishedAt: '2024-01-16T10:30:00Z',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
    likes: 178,
    comments: 31
  }
];

const challenges = [
  {
    id: 1,
    title: '30-Day Plank Challenge',
    description: 'Build core strength with progressive plank holds',
    participants: 234,
    duration: '30 days',
    difficulty: 'Beginner',
    startDate: '2024-02-01',
    reward: 'Challenge Badge + 10% off next month',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    title: 'February Cardio Blast',
    description: 'Complete 20 hours of cardio this month',
    participants: 156,
    duration: '28 days',
    difficulty: 'Intermediate',
    startDate: '2024-02-01',
    reward: 'Free Personal Training Session',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const categories = ['All', 'Training', 'Nutrition', 'Success Stories', 'Form Check', 'Challenges', 'Wellness'];

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('recent');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
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
              Fitness <span className="gradient-text">Community</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow fitness enthusiasts, share your journey, get expert advice, 
              and stay motivated with our supportive community.
            </p>
          </motion.div>

          {/* Community Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Tabs defaultValue="forum" className="space-y-8">
              <TabsList className="glass border-white/20 grid w-full grid-cols-4">
                <TabsTrigger value="forum">Forum</TabsTrigger>
                <TabsTrigger value="blog">Blog</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              </TabsList>

              {/* Forum Tab */}
              <TabsContent value="forum" className="space-y-6">
                {/* Forum Filters */}
                <Card className="glass border-white/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          placeholder="Search discussions..."
                          className="pl-10 bg-white/5 border-white/20"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
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
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full lg:w-32 bg-white/5 border-white/20">
                          <SelectValue placeholder="Sort" />
                        </SelectTrigger>
                        <SelectContent className="glass border-white/20">
                          <SelectItem value="recent">Recent</SelectItem>
                          <SelectItem value="popular">Popular</SelectItem>
                          <SelectItem value="trending">Trending</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="btn-primary">
                        <Plus className="w-4 h-4 mr-2" />
                        New Post
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Forum Posts */}
                <div className="space-y-4">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="glass border-white/20 group hover:bg-white/5 transition-colors cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={post.author.avatar} alt={post.author.name} />
                              <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-2">
                                {post.isPinned && (
                                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                                    Pinned
                                  </Badge>
                                )}
                                {post.isHot && (
                                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    Hot
                                  </Badge>
                                )}
                                <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-400">
                                  {post.category}
                                </Badge>
                              </div>
                              
                              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {post.title}
                              </h3>
                              
                              <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                                {post.content}
                              </p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-slate-500">
                                  <div className="flex items-center space-x-1">
                                    <span className="font-medium text-slate-300">{post.author.name}</span>
                                    <Badge variant="secondary" className="text-xs bg-slate-800 text-slate-400">
                                      {post.author.badge}
                                    </Badge>
                                  </div>
                                  <span>•</span>
                                  <span>{formatDate(post.createdAt)}</span>
                                </div>
                                
                                <div className="flex items-center space-x-4 text-sm text-slate-500">
                                  <div className="flex items-center space-x-1">
                                    <Eye className="h-4 w-4" />
                                    <span>{post.views}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>{post.likes}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <MessageCircle className="h-4 w-4" />
                                    <span>{post.replies}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-1 mt-3">
                                {post.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs bg-slate-800 text-slate-400">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Blog Tab */}
              <TabsContent value="blog" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="glass border-white/20 group overflow-hidden h-full">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            width={500}
                            height={500}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-black/60 text-white border-none">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardContent className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                            {post.title}
                          </h3>
                          
                          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="text-sm font-medium text-white">{post.author.name}</div>
                                <div className="text-xs text-slate-400">{post.author.role}</div>
                              </div>
                            </div>
                            <div className="text-sm text-slate-400">
                              {post.readTime} min read
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-slate-500">
                            <span>{formatDate(post.publishedAt)}</span>
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Heart className="h-4 w-4" />
                                <span>{post.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="h-4 w-4" />
                                <span>{post.comments}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Challenges Tab */}
              <TabsContent value="challenges" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={challenge.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="glass border-white/20 group overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={challenge.image}
                            alt={challenge.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            width={500}
                            height={500}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute top-4 right-4">
                            <Badge className={getDifficultyColor(challenge.difficulty)}>
                              {challenge.difficulty}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                            {challenge.title}
                          </h3>
                          
                          <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            {challenge.description}
                          </p>
                          
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-400">Duration</span>
                              <span className="text-white">{challenge.duration}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-400">Participants</span>
                              <span className="text-white">{challenge.participants} joined</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-400">Starts</span>
                              <span className="text-white">{new Date(challenge.startDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-3 mb-4">
                            <div className="flex items-center space-x-2 mb-1">
                              <Award className="h-4 w-4 text-yellow-400" />
                              <span className="text-sm font-medium text-yellow-400">Reward</span>
                            </div>
                            <p className="text-sm text-slate-300">{challenge.reward}</p>
                          </div>
                          
                          <Button className="w-full btn-primary">
                            <Target className="w-4 h-4 mr-2" />
                            Join Challenge
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Leaderboard Tab */}
              <TabsContent value="leaderboard" className="space-y-6">
                <Card className="glass border-white/20">
                  <CardHeader>
                    <CardTitle>Monthly Leaderboard</CardTitle>
                    <CardDescription>
                      Top performers this month based on workout consistency and community engagement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { rank: 1, name: 'Sarah Johnson', points: 2450, badge: 'Consistency Champion', avatar: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=150' },
                        { rank: 2, name: 'Michael Chen', points: 2380, badge: 'Transformation Star', avatar: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=150' },
                        { rank: 3, name: 'Emily Rodriguez', points: 2290, badge: 'Community Helper', avatar: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=150' },
                        { rank: 4, name: 'David Wilson', points: 2150, badge: 'Challenge Master', avatar: 'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=150' },
                        { rank: 5, name: 'Jessica Martinez', points: 2080, badge: 'Motivation Queen', avatar: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=150' }
                      ].map((user) => (
                        <div key={user.rank} className="flex items-center justify-between p-4 glass rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                              user.rank === 1 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                              user.rank === 2 ? 'bg-gradient-to-br from-slate-400 to-slate-500' :
                              user.rank === 3 ? 'bg-gradient-to-br from-orange-600 to-orange-700' :
                              'bg-slate-700'
                            }`}>
                              {user.rank}
                            </div>
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-white">{user.name}</div>
                              <Badge variant="secondary" className="text-xs bg-slate-800 text-slate-400">
                                {user.badge}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-white">{user.points}</div>
                            <div className="text-xs text-slate-400">points</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}