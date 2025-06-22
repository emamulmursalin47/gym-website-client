import { motion } from 'framer-motion';

export default function CommunityHero() {
  return (
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
  );
}