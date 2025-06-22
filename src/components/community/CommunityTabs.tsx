import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import ForumTab from './ForumTab';
import BlogTab from './BlogTab';
import ChallengesTab from './ChallengesTab';
import LeaderboardTab from './LeaderBoardTab';

interface CommunityTabsProps {
  forumPosts: any[];
  blogPosts: any[];
  challenges: any[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categoryFilter: string;
  setCategoryFilter: (filter: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function CommunityTabs({
  forumPosts,
  blogPosts,
  challenges,
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy
}: CommunityTabsProps) {
  return (
    <Tabs defaultValue="forum" className="space-y-8">
      <TabsList className="glass border-white/20 grid w-full grid-cols-4">
        <TabsTrigger value="forum">Forum</TabsTrigger>
        <TabsTrigger value="blog">Blog</TabsTrigger>
        <TabsTrigger value="challenges">Challenges</TabsTrigger>
        <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
      </TabsList>

      <TabsContent value="forum">
        <ForumTab 
          posts={forumPosts}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </TabsContent>

      <TabsContent value="blog">
        <BlogTab posts={blogPosts} />
      </TabsContent>

      <TabsContent value="challenges">
        <ChallengesTab challenges={challenges} />
      </TabsContent>

      <TabsContent value="leaderboard">
        <LeaderboardTab />
      </TabsContent>
    </Tabs>
  );
}