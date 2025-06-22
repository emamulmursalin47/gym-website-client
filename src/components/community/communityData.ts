export const forumPosts = [
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
  // ... other forum posts
];

export const blogPosts = [
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
  // ... other blog posts
];

export const challenges = [
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
  // ... other challenges
];

export const categories = ['All', 'Training', 'Nutrition', 'Success Stories', 'Form Check', 'Challenges', 'Wellness'];