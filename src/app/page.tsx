import React from 'react';
import HeroSection from '@/components/features/home/HeroSection';
import LawSection from '@/components/features/home/LawSection';
import HowItWorksSection from '@/components/features/home/HowItWorksSection';
import ApplicationsSection from '@/components/features/home/ApplicationsSection';
import ArticlesSection from '@/components/features/home/ArticlesSection';
import ConclusionSection from '@/components/features/home/ConclusionSection';

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <HeroSection />
      <LawSection />
      <HowItWorksSection />
      <ArticlesSection />
      <ApplicationsSection />
      <ConclusionSection />
    </div>
  );
}
