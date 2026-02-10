# Project Structure and Organization

## Summary

This document describes the folder structure, file organization, and architectural patterns of the project. Use this as a reference for navigating the codebase, understanding module boundaries, and determining where to place new code.

## Root Directory

The project root contains configuration files and main directories:

**Configuration Files:**
- `package.json` - Project dependencies and npm scripts
- `tsconfig.json` - TypeScript compiler configuration
- `next.config.js` - Next.js framework configuration
- `tailwind.config.js` - Tailwind CSS design system configuration
- `eslint.config.mjs` - ESLint code quality rules
- `postcss.config.js` - PostCSS processing configuration

## Directory Structure

### `/app` - Next.js App Router

Contains all route definitions, layouts, and API endpoints using Next.js App Router conventions.

**Key Files:**
- `page.tsx` - Main landing page
- `layout.tsx` - Root layout component
- `not-found.tsx` - 404 error page
- `seo.tsx` - SEO utilities and metadata generation
- `theme-providers.tsx` - Theme context provider
- `robots.ts` - Robots.txt configuration
- `sitemap.ts` - Sitemap generation

**Route Folders:**
Each subfolder represents a route:
- `about/` - About page
- `api/` - API routes and endpoints
- `careers/` - Careers page
- `cookies/` - Cookie policy
- `dashboard/` - User dashboard
- `faq/` - Frequently asked questions
- `features/` - Features showcase
- `help/` - Help and support
- `press/` - Press resources
- `pricing/` - Pricing plans and comparison
- `privacy/` - Privacy policy
- `security/` - Security information
- `status/` - System status
- `terms/` - Terms of service

### `/components` - React Components

Reusable React components organized by feature and purpose.

#### `/components/landing`

Landing page-specific components for marketing and public pages:
- `HeroSection.tsx` - Hero/banner sections
- `AboutSection.tsx` - About sections
- `ContactSection.tsx` - Contact forms and sections
- `ContentSplitSection.tsx` - Split content layouts
- `Navigation.tsx` - Landing page navigation
- `ToolsSection.tsx` - Tools showcase
- `LandingBand.tsx` - Promotional bands
- `LandingFaq.tsx` - FAQ components
- `LandingFaqCollapsible.tsx` - Collapsible FAQ items
- `LandingMarquee.tsx` - Scrolling marquee elements
- `LandingProductFeature.tsx` - Product feature highlights
- `LandingProductFeatureKeyPoints.tsx` - Key points lists
- `LandingProductFeaturesGrid.tsx` - Feature grid layouts
- `LandingProductProblemSolution.tsx` - Problem/solution sections
- `LandingProductSteps.tsx` - Step-by-step guides
- `LandingProductTour.tsx` - Product tour components
- `LandingProductVideoFeature.tsx` - Video feature sections
- `LandingReadMoreWrapper.tsx` - Read more/expand wrappers
- `index.ts` - Component exports

**Subdirectories:**
- `about/` - About page components
- `app-store-button/` - App store badges
- `bento-grid/` - Bento-style grid layouts
- `blog/` - Blog components
- `card/` - Card components
- `cta/` - Call-to-action sections
- `cta-backgrounds/` - CTA background variants
- `discount/` - Discount badges and banners
- `feature/` - Feature highlight components
- `footer/` - Footer components
- `leading/` - Leading sections
- `navigation/` - Navigation components
- `newsletter/` - Newsletter signup components
- `pricing/` - Pricing components
- `pricing-comparison/` - Pricing comparison tables
- `problem-agitator/` - Problem agitation sections
- `rating/` - Rating displays
- `showcase/` - Product showcases
- `social-proof/` - Social proof elements
- `stats/` - Statistics displays
- `team/` - Team member profiles
- `testimonial/` - Testimonial components

#### `/components/shared`

Shared components used across the entire application:

**Core Components:**
- `Header.tsx` - Main site header with navigation and theme switcher
- `Footer.tsx` - Main site footer with columns and social links
- `MobileNav.tsx` - Mobile navigation drawer
- `ActiveLink.tsx` - Active state link component
- `Link.tsx` - Custom link wrapper
- `Image.tsx` - Optimized image component
- `Analytics.tsx` - Analytics integration
- `PageTitle.tsx` - Page title component
- `ScrollTop.tsx` - Scroll to top button
- `SectionContainer.tsx` - Section wrapper component
- `ThemeSwitch.tsx` - Theme toggle component
- `useThemeSwitch.tsx` - Theme switching custom hook
- `VideoPlayer.tsx` - Video player component
- `SearchProvider.tsx` - Search context provider
- `FooterSupportButton.tsx` - Support button for footer
- `index.ts` - Component exports

#### `/components/shared/ui`

Shadcn UI-based design system primitives:

**UI Components:**
- `button.tsx` - Button with variants and sizes
- `toggle.tsx` - Toggle switch
- `dropdown-menu.tsx` - Dropdown menus
- `menubar.tsx` - Menu bars
- `pagination.tsx` - Pagination controls
- `calendar.tsx` - Date picker calendar
- `card.tsx` - Card containers
- `table.tsx` - Data tables
- `tabs.tsx` - Tab navigation
- `select.tsx` - Select dropdowns
- `sheet.tsx` - Slide-out sheets
- `slider.tsx` - Range sliders
- `switch.tsx` - Toggle switches
- `badge.tsx` - Status badges
- `dialog.tsx` - Modal dialogs
- `alert.tsx` - Alert messages
- `avatar.tsx` - User avatars
- `form.tsx` - Form components
- And many more Shadcn UI primitives

All primitives support:
- Accessibility (ARIA attributes, keyboard navigation)
- Theme variants (light/dark mode)
- Customization via Tailwind CSS
- Composability

#### `/components/search`

Search-related components:
- `SearchButton.tsx` - Search trigger button

#### `/components/icons`

SVG icon components:
- `PricingCheckIcon.tsx` - Checkmark for pricing features
- `ThreadsIcon.tsx` - Threads social icon
- `TiktokIcon.tsx` - TikTok social icon
- `XIcon.tsx` - X/Twitter social icon

### `/css` - Stylesheets

Global CSS and styling:
- `globals.css` - Global styles, Tailwind imports, and custom CSS

### `/data` - Data and Configuration

Application data and configuration files.

#### `/data/config`

**Core Configuration Files:**
- `site.settings.js` - Main site configuration (title, description, analytics, search settings) - imported as `siteConfig`
- `siteSettingsInterface.ts` - TypeScript interface for site configuration
- `metadata.js` - SEO metadata (title, description, domain, social links, theme)
- `footerLinks.ts` - Footer navigation structure and links
- `headerNavLinks.ts` - Header navigation links (references `siteConfig`)
- `colors.js` - Semantic color palette for Tailwind
- `pricingData.tsx` - Pricing tiers, frequencies, and plan details
- `pricingDataInterface.ts` - TypeScript interface for pricing data
- `searchLinks.ts` - Quick navigation and search links

These configuration files are imported throughout the application to ensure consistent navigation, theming, and business logic.

#### `/data/authors`

Author profile data:
- `default.md` - Default author information

**Other Data Files:**
- `app-info.ts` - Application metadata
- `jobhunter-data.ts` - Job-related data

### `/lib` - Utility Functions

Shared utility functions and helpers:
- `utils.ts` - Common utility functions

### `/public` - Static Assets

Static files served directly:
- `static/` - Images, fonts, and other static assets
- `appInfo.js` - Client-side application information

### `/scripts` - Build Scripts

Build-time scripts and automation:
- `generateAppInfo.mjs` - Generates application metadata

### `/demo` - Demo Examples

Example implementations and demos:
- `basic-examples/` - Basic usage examples
- `form-examples/` - Form implementation examples

## Module Boundaries

### Import Patterns

**Absolute Imports:**
Use path aliases for cleaner imports:
- `@/components/...` - Components directory
- `@/lib/...` - Library/utilities
- `@/data/...` - Data and configuration
- `@/app/...` - App router pages

**Examples:**
```typescript
// ✅ Good: Absolute imports
import { Button } from '@/components/shared/ui/button';
import { siteConfig } from '@/data/config/site.settings';
import { cn } from '@/lib/utils';

// ❌ Bad: Relative imports
import { Button } from '../../../components/shared/ui/button';
```

### Configuration Usage

Import configuration from centralized locations:

```typescript
// Site configuration
import { siteConfig } from '@/data/config/site.settings';

// Navigation links
import headerNavLinks from '@/data/config/headerNavLinks';
import footerLinks from '@/data/config/footerLinks';

// Metadata
import { genPageMetadata } from '@/app/seo';

// Pricing data
import pricingData from '@/data/config/pricingData';
```

## File Placement Guidelines

**When creating new files:**

1. **Components**: Place in appropriate subdirectory of `/components`
   - Shared UI primitives → `/components/shared/ui`
   - Landing page elements → `/components/landing`
   - Shared utilities → `/components/shared`

2. **Pages/Routes**: Place in `/app` following Next.js App Router conventions
   - `/app/my-page/page.tsx` creates `/my-page` route

3. **Configuration**: Place in `/data/config`
   - Site-wide settings → `/data/config`

4. **Utilities**: Place in `/lib`
   - Shared helper functions → `/lib`

5. **Static Assets**: Place in `/public/static`

## How Copilot Should Use This

When working in this repository, Copilot should:

1. **Reference this structure** when suggesting file locations for new code
2. **Use absolute imports** with `@/` path aliases, never relative paths
3. **Import configuration** from `/data/config` for site settings, navigation, pricing, and metadata
4. **Place components** in the correct subdirectory based on their purpose:
   - Shadcn UI primitives → `components/shared/ui`
   - Landing page components → `components/landing`
   - Shared utilities → `components/shared`
5. **Follow Next.js App Router** conventions for routes in `/app`
6. **Understand that**:
   - `components/shared/ui` contains design system primitives
   - `components/landing` contains marketing components
   - `data/config` is the single source of truth for configuration
   - `app/` uses Next.js App Router file-based routing
7. **Suggest appropriate locations** for new files based on their purpose and this structure
8. **Import from centralized config** rather than hardcoding values

This structure should guide all file organization, import statements, and architectural decisions.
