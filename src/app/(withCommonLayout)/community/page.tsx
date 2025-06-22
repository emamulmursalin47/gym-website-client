'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';


import CommunityHero from '@/src/components/community/CommunityHero';
import CommunityTabs from '@/src/components/community/CommunityTabs';
import { blogPosts, challenges, forumPosts } from '@/src/components/community/communityData';



export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('recent');

  return (
    <div className="min-h-screen">
 
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CommunityHero />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CommunityTabs
              forumPosts={forumPosts}
              blogPosts={blogPosts}
              challenges={challenges}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </motion.div>
        </div>
      </main>

      
    </div>
  );
}