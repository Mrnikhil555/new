import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';
import { GameType } from '../types';

interface LevelProgressProps {
  gameType: GameType;
  currentLevel: number;
  highestLevel: number;
  totalScore: number;
}

const LevelProgress: React.FC<LevelProgressProps> = ({
  gameType,
  currentLevel,
  highestLevel,
  totalScore
}) => {
  const getDifficultyLabel = (level: number) => {
    if (level <= 5000) return 'Easy';
    if (level <= 10000) return 'Medium';
    if (level <= 15000) return 'Hard';
    return 'Extreme';
  };

  const getDifficultyColor = (level: number) => {
    if (level <= 5000) return 'text-green-400';
    if (level <= 10000) return 'text-yellow-400';
    if (level <= 15000) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <div>
            <div className="text-sm opacity-75">Current Level</div>
            <div className="text-xl font-bold">{currentLevel}</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Star className="w-6 h-6 text-purple-400" />
          <div>
            <div className="text-sm opacity-75">Highest Level</div>
            <div className="text-xl font-bold">{highestLevel}</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Award className="w-6 h-6 text-blue-400" />
          <div>
            <div className="text-sm opacity-75">Total Score</div>
            <div className="text-xl font-bold">{totalScore}</div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm opacity-75">Difficulty:</span>
        <span className={`font-bold ${getDifficultyColor(currentLevel)}`}>
          {getDifficultyLabel(currentLevel)}
        </span>
      </div>
    </motion.div>
  );
};

export default LevelProgress;