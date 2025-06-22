import { Card, CardContent } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { Target, Award } from 'lucide-react';
import Image from 'next/image';

interface ChallengeCardProps {
  challenge: any;
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
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

  return (
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
  );
}