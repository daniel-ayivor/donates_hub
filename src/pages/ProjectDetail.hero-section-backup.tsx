/**
 * BACKUP: Hero Section from ProjectDetail.tsx
 * Date: February 2, 2026
 * 
 * This is a backup of the hero section (lines 368-417)
 * Original component: ProjectDetail.tsx
 * Section: Hero Section with minimal header
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Hero Section Component - BACKUP
 * This section displays project header information with:
 * - Back navigation
 * - Category badge
 * - Project title and subtitle
 * - Location, date, and beneficiary info
 */

interface HeroSectionProps {
  project: {
    category: string;
    title: string;
    subtitle: string;
    location: string;
    date: string;
    beneficiary: string;
  };
}

const HeroSectionBackup: React.FC<HeroSectionProps> = ({ project }) => {
  return (
    <section className="relative py-20 bg-brand-blue">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/impact"
          className="inline-flex items-center text-white hover:text-yellow-200 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Impact Stories
        </Link>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <div className="mb-4">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl sm:text-2xl text-yellow-100 mb-6">{project.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-yellow-300" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-yellow-300" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-yellow-300" />
              <span>{project.beneficiary}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionBackup;
