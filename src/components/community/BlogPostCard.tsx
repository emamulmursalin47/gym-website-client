import { Card, CardContent } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Heart, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { formatDate } from '@/src/lib/utils';

interface BlogPostCardProps {
  post: any;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
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
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.split(' ').map((n: any[]) => n[0]).join('')}</AvatarFallback>
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
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-slate-500 gap-2">
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
  );
}