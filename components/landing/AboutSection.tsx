import Link from 'next/link';
import { Twitter, Linkedin, Github, LucideIcon } from 'lucide-react';

interface LinkItem {
  label: string;
  href: string;
}

interface LinkColumn {
  title: string;
  links: LinkItem[];
}

interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

interface AboutSectionProps {
  linkColumns: LinkColumn[];
  socialLinks: SocialLink[];
  missionText: string;
}

const socialIconMap: Record<string, LucideIcon> = {
  Twitter: Twitter,
  Linkedin: Linkedin,
  Github: Github,
};

export function AboutSection({ linkColumns, socialLinks, missionText }: AboutSectionProps) {
  return (
    <section className="relative bg-primary-900 dark:bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-gray-300 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              {missionText}
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {linkColumns.map((column, index) => (
              <div key={index}>
                <h4 className="font-display text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-400 dark:text-gray-500 hover:text-secondary-400 dark:hover:text-secondary-300 transition-colors duration-200 text-sm md:text-base"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 pt-8 border-t border-primary-800 dark:border-gray-900">
            {socialLinks.map((social) => {
              const IconComponent = socialIconMap[social.icon] || Twitter;
              return (
                <Link
                  key={social.platform}
                  href={social.href}
                  className="text-gray-400 dark:text-gray-500 hover:text-secondary-400 dark:hover:text-secondary-300 transition-colors duration-200"
                  aria-label={social.platform}
                >
                  <IconComponent className="w-6 h-6" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center mt-8">
            <p className="text-gray-500 dark:text-gray-600 text-sm">
              © {new Date().getFullYear()} JobHunter07. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
