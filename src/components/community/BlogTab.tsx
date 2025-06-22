import { motion } from 'framer-motion';
import BlogPostCard from './BlogPostCard';

interface BlogTabProps {
  posts: any[];
}

export default function BlogTab({ posts }: BlogTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <BlogPostCard post={post} />
        </motion.div>
      ))}
    </div>
  );
}