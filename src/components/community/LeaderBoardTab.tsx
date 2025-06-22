import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/src/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Badge } from '@/src/components/ui/badge';

export default function LeaderboardTab() {
  const leaderboardData = [
    { rank: 1, name: 'Sarah Johnson', points: 2450, badge: 'Consistency Champion', avatar: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { rank: 2, name: 'Michael Chen', points: 2380, badge: 'Transformation Star', avatar: 'https://images.pexels.com/photos/3931192/pexels-photo-3931192.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { rank: 3, name: 'Emily Rodriguez', points: 2290, badge: 'Community Helper', avatar: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { rank: 4, name: 'David Wilson', points: 2150, badge: 'Challenge Master', avatar: 'https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { rank: 5, name: 'Jessica Martinez', points: 2080, badge: 'Motivation Queen', avatar: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=150' }
  ];

  return (
    <Card className="glass border-white/20">
      <CardHeader>
        <CardTitle>Monthly Leaderboard</CardTitle>
        <CardDescription>
          Top performers this month based on workout consistency and community engagement
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboardData.map((user) => (
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
  );
}