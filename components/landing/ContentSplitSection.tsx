import { Star } from 'lucide-react';
import Image from 'next/image';

interface HuntTip {
  id: string;
  title: string;
  excerpt: string;
}

interface FounderInfo {
  name: string;
  title: string;
  bio: string;
  quote: string;
  rating: number;
  image: string;
}

interface ContentSplitSectionProps {
  huntTips: HuntTip[];
  founder: FounderInfo;
}

function HuntTipsCard({ tips }: { tips: HuntTip[] }) {
  return (
    <div className="bg-stone-200 dark:bg-stone-800 rounded-lg p-6 md:p-8 shadow-lg h-full">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 uppercase tracking-wide mb-6">
        Hunt Tips
      </h3>
      
      <div className="space-y-6">
        {tips.map((tip) => (
          <div key={tip.id} className="border-l-4 border-secondary-500 dark:border-secondary-400 pl-4">
            <h4 className="font-semibold text-lg md:text-xl text-primary-800 dark:text-primary-200 mb-2">
              {tip.title}
            </h4>
            <p className="text-primary-700 dark:text-primary-300 text-sm md:text-base leading-relaxed">
              {tip.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FounderStoryCard({ founder }: { founder: FounderInfo }) {
  return (
    <div className="bg-primary-800 dark:bg-primary-950 rounded-lg p-6 md:p-8 shadow-lg h-full">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-6">
        Founder's Story
      </h3>

      <div className="space-y-6">
        {/* Portrait - placeholder for now */}
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-primary-700 dark:bg-primary-900 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-950" />
        </div>

        {/* Name and Title */}
        <div className="text-center">
          <h4 className="font-semibold text-xl md:text-2xl text-white mb-1">
            {founder.name}
          </h4>
          <p className="text-gray-300 dark:text-gray-400 text-sm md:text-base">
            {founder.title}
          </p>
        </div>

        {/* Bio */}
        <p className="text-gray-200 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          {founder.bio}
        </p>

        {/* Quote */}
        <blockquote className="border-l-4 border-secondary-500 dark:border-secondary-400 pl-4 italic text-gray-200 dark:text-gray-300 text-sm md:text-base">
          "{founder.quote}"
        </blockquote>

        {/* Rating */}
        <div className="flex items-center justify-center space-x-1 pt-2">
          {Array.from({ length: founder.rating }).map((_, i) => (
            <Star 
              key={i} 
              className="w-5 h-5 fill-secondary-400 text-secondary-400 dark:fill-secondary-300 dark:text-secondary-300" 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContentSplitSection({ huntTips, founder }: ContentSplitSectionProps) {
  return (
    <section className="relative bg-stone-100 dark:bg-stone-900 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Left: Hunt Tips */}
          <HuntTipsCard tips={huntTips} />

          {/* Right: Founder's Story */}
          <FounderStoryCard founder={founder} />
        </div>
      </div>
    </section>
  );
}
