# Landing Page Components

## Summary

This document provides guidelines for building public-facing pages (landing, features, contact, etc.) using the landing page component library. These components are designed for rapid, consistent, and visually appealing landing page development with built-in responsive design and dark mode support.

## When to Use Landing Components

Use landing page components when building:
- Marketing landing pages
- Feature showcase pages
- Contact pages
- About pages
- Pricing pages
- Any public-facing content pages under `/app`

## Component Source

### Import Locations

**Landing Components:**
```typescript
import {
  LandingPrimaryImageCtaSection,
  LandingProductFeaturesGrid,
  LandingProductFeature,
  LandingTestimonialGrid,
  LandingPricingSection,
  // ... more components
} from '@/components/landing';
```

**UI Primitives:**
```typescript
import { Button } from '@/components/shared/ui/button';
```

**Icons:**
```typescript
import { Check, Star, ArrowRight } from 'lucide-react';
```

**Images:**
```typescript
import Image from 'next/image';
```

### Available Components

#### Layout & Structure
- `LandingHeader`, `LandingHeaderMenuItem` - Page headers and navigation
- `LandingFooter`, `LandingFooterColumn`, `LandingFooterLink` - Page footers
- `LandingSectionContainer` - Section wrappers

#### Hero & CTA Sections
- `LandingPrimaryImageCtaSection` - Hero sections with images and CTAs
- `LandingSaleCtaSection` - Sales-focused call-to-action sections
- `LandingBandSection` - Promotional bands

#### Content Sections
- `ContentSplitSection` - Split content layouts
- `AboutSection` - About sections
- `ContactSection` - Contact forms and information
- `ToolsSection` - Tools showcase

#### Features & Benefits
- `LandingProductFeaturesGrid` - Grid layouts for features
- `LandingProductFeature` - Individual feature cards
- `LandingProductFeatureKeyPoints` - Key points lists
- `LandingFeatureList` - Simple feature lists

#### Product Tours
- `LandingProductTourSection` - Product tour container
- `LandingProductTourList` - Tour navigation list
- `LandingProductTourTrigger` - Tour step triggers
- `LandingProductTourContent` - Tour step content

#### Video & Media
- `LandingProductVideoFeature` - Video feature sections

#### Steps & Process
- `LandingProductSteps` - Step-by-step guides

#### Problem/Solution
- `LandingProductProblemSolution` - Problem/solution presentations

#### Social Proof
- `LandingTestimonialGrid` - Testimonial layouts
- `LandingMarquee` - Scrolling social proof
- `LandingSocialProof` - Social proof elements
- `LandingRating` - Rating displays
- `LandingStats` - Statistics sections

#### Pricing
- `LandingPricingSection` - Pricing section container
- `LandingPricingPlan` - Individual pricing plans
- `LandingPricingComparison` - Pricing comparison tables

#### FAQ
- `LandingFaqSection` - FAQ container
- `LandingFaqCollapsibleSection` - Collapsible FAQ sections

#### Utilities
- `LandingReadMoreWrapper` - Expandable content
- `LandingBentoGrid` - Bento-style layouts
- `LandingCard` - Card components
- `LandingShowcase` - Product showcases

## Documentation Reference

**Official Documentation:** [Shipixen Landing Page Components](https://shipixen.com/boilerplate-documentation/landing-page-components)

Always refer to this documentation for:
- Component props and API
- Usage examples
- Advanced patterns
- Best practices

## Typical Landing Page Structure

A well-structured landing page should compose sections in a logical, user-friendly order:

```tsx
export default function LandingPage() {
  return (
    <>
      {/* Header with navigation */}
      <LandingHeader>
        <LandingHeaderMenuItem href="/">Home</LandingHeaderMenuItem>
        <LandingHeaderMenuItem href="/features">Features</LandingHeaderMenuItem>
        <LandingHeaderMenuItem href="/pricing">Pricing</LandingHeaderMenuItem>
      </LandingHeader>

      {/* Hero section */}
      <LandingPrimaryImageCtaSection
        title="Transform Your Business"
        description="The all-in-one platform for modern teams"
        imageSrc="/hero-image.jpg"
        imageAlt="Product screenshot"
      />

      {/* Features grid */}
      <LandingProductFeaturesGrid
        title="Powerful Features"
        description="Everything you need to succeed"
      >
        <LandingProductFeature
          title="Fast Performance"
          description="Lightning-fast load times"
          icon={<Zap />}
        />
        {/* More features... */}
      </LandingProductFeaturesGrid>

      {/* Product tour */}
      <LandingProductTourSection>
        <LandingProductTourList>
          <LandingProductTourTrigger>Step 1</LandingProductTourTrigger>
          <LandingProductTourContent>
            Content for step 1
          </LandingProductTourContent>
        </LandingProductTourList>
      </LandingProductTourSection>

      {/* Testimonials */}
      <LandingTestimonialGrid
        title="What Our Customers Say"
        testimonials={testimonialData}
      />

      {/* Pricing */}
      <LandingPricingSection
        title="Simple Pricing"
        description="Choose the plan that's right for you"
      >
        <LandingPricingPlan
          title="Starter"
          price="$9"
          features={['Feature 1', 'Feature 2']}
        />
        {/* More plans... */}
      </LandingPricingSection>

      {/* FAQ */}
      <LandingFaqCollapsibleSection
        title="Frequently Asked Questions"
        faqs={faqData}
      />

      {/* Final CTA */}
      <LandingSaleCtaSection
        title="Ready to Get Started?"
        description="Join thousands of satisfied customers"
      />

      {/* Footer */}
      <LandingFooter>
        <LandingFooterColumn title="Product">
          <LandingFooterLink href="/features">Features</LandingFooterLink>
          <LandingFooterLink href="/pricing">Pricing</LandingFooterLink>
        </LandingFooterColumn>
        {/* More footer columns... */}
      </LandingFooter>
    </>
  );
}
```

## Data-Driven Approach

Use arrays for repeating content and map over them:

```typescript
const features = [
  {
    title: 'Fast Performance',
    description: 'Lightning-fast load times',
    icon: Zap,
  },
  {
    title: 'Secure by Default',
    description: 'Enterprise-grade security',
    icon: Shield,
  },
  // More features...
];

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO at Company',
    content: 'This product changed our business!',
    avatar: '/avatars/john.jpg',
  },
  // More testimonials...
];

const faqs = [
  {
    question: 'How does it work?',
    answer: 'It works by...',
  },
  // More FAQs...
];

// In component
<LandingProductFeaturesGrid>
  {features.map((feature) => (
    <LandingProductFeature
      key={feature.title}
      title={feature.title}
      description={feature.description}
      icon={<feature.icon />}
    />
  ))}
</LandingProductFeaturesGrid>
```

## Styling Best Practices

### Mobile-First Responsive Design

```tsx
<LandingPrimaryImageCtaSection
  className="py-12 md:py-24 lg:py-32"
  titleClassName="text-3xl md:text-5xl lg:text-6xl"
/>
```

### Dark Mode Support

All landing components support dark mode automatically. Apply dark mode variants as needed:

```tsx
<div className="bg-white dark:bg-gray-900">
  <h2 className="text-gray-900 dark:text-white">
    Your Title
  </h2>
</div>
```

### Tailwind CSS Classes

Follow the project's Tailwind styling conventions (see `tailwind-styling.md`):
- Layout/positioning first
- Then sizing, spacing, colors
- Typography
- Interactive states
- Responsive variants last

## Integration with Other Systems

### Navigation

Integrate with header navigation configuration:

```typescript
import headerNavLinks from '@/data/config/headerNavLinks';

<LandingHeader>
  {headerNavLinks.map((link) => (
    <LandingHeaderMenuItem key={link.href} href={link.href}>
      {link.title}
    </LandingHeaderMenuItem>
  ))}
</LandingHeader>
```

### Pricing Data

Use centralized pricing configuration:

```typescript
import pricingData from '@/data/config/pricingData';

<LandingPricingSection>
  {pricingData.plans.map((plan) => (
    <LandingPricingPlan
      key={plan.id}
      title={plan.name}
      price={plan.price}
      features={plan.features}
    />
  ))}
</LandingPricingSection>
```

## Best Practices

1. **Use only documented props** - Don't try to pass undocumented props
2. **Compose sections logically** - Hero → Features → Social Proof → Pricing → FAQ → CTA
3. **Follow project conventions**:
   - Use `@/` absolute imports
   - Follow Next.js and React best practices (see `nextjs.md`)
   - Apply Tailwind styling conventions (see `tailwind-styling.md`)
4. **Leverage data arrays** - Map over arrays for repeating content
5. **Implement responsive design** - Mobile-first approach with breakpoints
6. **Support dark mode** - Use dark mode variants consistently
7. **Optimize images** - Use Next.js `Image` component for all images
8. **Ensure accessibility** - Landing components include ARIA attributes, but verify semantic HTML

## Example: Complete Feature Page

```tsx
import {
  LandingPrimaryImageCtaSection,
  LandingProductFeaturesGrid,
  LandingProductFeature,
} from '@/components/landing';
import { Zap, Shield, Globe } from 'lucide-react';

const features = [
  { title: 'Fast', description: 'Lightning speed', icon: Zap },
  { title: 'Secure', description: 'Bank-level security', icon: Shield },
  { title: 'Global', description: 'Worldwide CDN', icon: Globe },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <LandingPrimaryImageCtaSection
        title="Powerful Features"
        description="Everything you need in one place"
        imageSrc="/features-hero.jpg"
        imageAlt="Features overview"
        withBackground
        variant="primary"
      />

      <LandingProductFeaturesGrid
        title="Built for Performance"
        description="Optimized for speed, security, and scale"
      >
        {features.map((feature) => (
          <LandingProductFeature
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={<feature.icon className="w-6 h-6" />}
          />
        ))}
      </LandingProductFeaturesGrid>
    </div>
  );
}
```

## How Copilot Should Use This

When building landing pages or public marketing pages in this repository, Copilot should:

1. **Import components** from `@/components/landing` for all landing page UI
2. **Follow the logical section order**: Hero → Features → Tour → Social Proof → Pricing → FAQ → CTA → Footer
3. **Use data arrays** and map over them for repeating content (features, testimonials, FAQs, pricing)
4. **Apply responsive design** with mobile-first Tailwind classes
5. **Support dark mode** with `dark:` variants
6. **Reference the official documentation** at https://shipixen.com/boilerplate-documentation/landing-page-components for component APIs
7. **Integrate with centralized config**:
   - Navigation links from `data/config/headerNavLinks.ts`
   - Footer links from `data/config/footerLinks.ts`
   - Pricing from `data/config/pricingData.tsx`
8. **Compose with UI primitives** from `components/shared/ui` (buttons, inputs, etc.)
9. **Follow project conventions** from `nextjs.md` and `tailwind-styling.md`
10. **Use `lucide-react` for icons** and `next/image` for images

These components should be the default choice for all public-facing pages, marketing content, and landing pages.
