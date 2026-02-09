import { LucideIcon, Map, Binoculars, Target } from 'lucide-react';

interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
}

const iconMap: Record<string, LucideIcon> = {
  Map: Map,
  Binoculars: Binoculars,
  Target: Target,
};

function ToolCard({ icon, title, description }: ToolCardProps) {
  const IconComponent = iconMap[icon] || Map;

  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 md:p-8">
      {/* Icon */}
      <div className="flex items-center justify-center">
        <IconComponent 
          className="w-16 h-16 md:w-20 md:h-20 text-secondary-400 dark:text-secondary-300" 
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-200 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}

interface ToolsSectionProps {
  tools: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
  }>;
}

export function ToolsSection({ tools }: ToolsSectionProps) {
  return (
    <section 
      id="tools"
      className="relative bg-primary-700 dark:bg-primary-900 py-16 md:py-24 lg:py-32"
    >
      {/* Torn Paper Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-primary-800 dark:bg-primary-950" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2rem))' }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
            Tools
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
            />
          ))}
        </div>
      </div>

      {/* Torn Paper Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-stone-100 dark:bg-stone-900" 
           style={{ clipPath: 'polygon(0 0, 100% 2rem, 100% 100%, 0% 100%)' }} 
      />
    </section>
  );
}
