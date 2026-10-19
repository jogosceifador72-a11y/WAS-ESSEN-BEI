import React from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 -z-50 pointer-events-none overflow-hidden select-none bg-gradient-to-br from-[#F4F7F2] via-[#EBF3EC] to-[#E5EFE7]"
    >
      {/* Primary Top-Right Ambient Aurora (Sage & Emerald) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[15%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#86b595] via-[#5b8c6c] to-[#3a6348] blur-[120px] mix-blend-multiply opacity-50"
      />

      {/* Warm Golden Sunlight Orb (Top-Center / Left) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 35, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[18%] -left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#f3d99f] via-[#c9dfaa] to-[#7db088] blur-[130px] mix-blend-multiply opacity-40"
      />

      {/* Mid-Page Organic Mint & Forest Swirl */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          x: [0, 50, 0],
          y: [0, -45, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[48%] right-[-5%] w-[750px] h-[750px] rounded-full bg-gradient-to-tl from-[#6aa078] via-[#a2cca6] to-[#d6ebd3] blur-[140px] mix-blend-multiply opacity-40"
      />

      {/* Lower Mid-Page Calming Earth & Olive Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[72%] -left-[8%] w-[700px] h-[700px] rounded-full bg-gradient-to-r from-[#98c5a2] via-[#bfe2bf] to-[#edd9b4] blur-[130px] mix-blend-multiply opacity-45"
      />

      {/* Bottom Floating Accent (Warm Sunset Sand) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -35, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-[10%] right-[15%] w-[850px] h-[600px] rounded-full bg-gradient-to-t from-[#c4e3cb] via-[#a8d3b2] to-[#7ea988] blur-[150px] mix-blend-multiply opacity-35"
      />

      {/* Subtle organic texture grain overlay for editorial richness */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(30, 60, 40, 0.8) 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Soft gradient vignette to frame viewport */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#1f3725]/5 pointer-events-none" />
    </div>
  );
};
