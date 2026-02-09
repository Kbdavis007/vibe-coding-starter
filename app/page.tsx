import { Navigation } from '@/components/landing/Navigation';
import { HeroSection } from '@/components/landing/HeroSection';
import { ToolsSection } from '@/components/landing/ToolsSection';
import { ContentSplitSection } from '@/components/landing/ContentSplitSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { 
  toolsData, 
  huntTipsData, 
  founderData, 
  aboutLinks,
  socialLinks 
} from '@/data/jobhunter-data';

export default function Page() {
  const aboutLinkColumns = [
    { title: 'Company', links: aboutLinks.company },
    { title: 'Resources', links: aboutLinks.resources },
    { title: 'Legal', links: aboutLinks.legal },
  ];

  const missionText = "At JobHunter07, we believe every job seeker deserves the right tools and guidance to navigate their career journey. We're on a mission to make job hunting less overwhelming and more successful.";

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Navigation overlays the hero */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Tools Section */}
      <ToolsSection tools={toolsData} />

      {/* Content Split Section */}
      <ContentSplitSection 
        huntTips={huntTipsData} 
        founder={founderData}
      />

      {/* About Section */}
      <AboutSection 
        linkColumns={aboutLinkColumns}
        socialLinks={socialLinks}
        missionText={missionText}
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
