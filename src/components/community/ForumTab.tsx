import { Card, CardContent } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { Search, Plus } from 'lucide-react';
import ForumPostCard from './ForumPostCard';

interface ForumTabProps {
  posts: any[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categoryFilter: string;
  setCategoryFilter: (filter: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const categories = ['All', 'Training', 'Nutrition', 'Success Stories', 'Form Check', 'Challenges', 'Wellness'];

export default function ForumTab({
  posts,
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy
}: ForumTabProps) {
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
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

      <div className="space-y-4">
        {filteredPosts.map((post, index) => (
          <ForumPostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}