import { motion } from 'framer-motion';
import ChallengeCard from './ChallengeCard';

interface ChallengesTabProps {
  challenges: any[];
}

export default function ChallengesTab({ challenges }: ChallengesTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {challenges.map((challenge, index) => (
        <motion.div
          key={challenge.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <ChallengeCard challenge={challenge} />
        </motion.div>
      ))}
    </div>
  );
}