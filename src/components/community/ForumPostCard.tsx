import { motion } from 'framer-motion';
import { Card, CardContent } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Eye, ThumbsUp, MessageCircle } from 'lucide-react';
import { formatDate } from '@/src/lib/utils';

interface ForumPostCardProps {
  post: any;
  index: number;
}

export default function ForumPostCard({ post, index }: ForumPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="glass border-white/20 group hover:bg-white/5 transition-colors cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.split(' ').map((n: any[]) => n[0]).join('')}</AvatarFallback>
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
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <span className="font-medium text-slate-300">{post.author.name}</span>
                    <Badge variant="secondary" className="text-xs bg-slate-800 text-slate-400">
                      {post.author.badge}
                    </Badge>
                  </div>
                  <span className="hidden sm:inline">•</span>
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
                {post.tags.map((tag: string) => (
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
  );
}