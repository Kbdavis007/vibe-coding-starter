# Technology Stack and Dependencies

## Summary

This document provides a comprehensive overview of the project's technology stack, including frameworks, libraries, tools, and their versions. It serves as the authoritative reference for understanding what technologies are used and how they fit together.

## Core Framework Stack

### Next.js and React

**Next.js**: `^15`
- Latest generation App Router
- Server Components and Server Actions
- Optimized build and bundle
- File-based routing

**React**: `^19`
- Latest React 19 with Concurrent Features
- Suspense and Transitions
- Automatic batching
- Improved Hooks

**React DOM**: `^19`
- Matching React version
- Client-side rendering
- Hydration support

**TypeScript**: `^5`
- Latest stable TypeScript
- Type safety and IntelliSense
- Enhanced developer experience

## UI Component Foundation

### Styling and Design System

**TailwindCSS**: `^3`
- Core utility-first CSS framework
- JIT compilation
- Custom design tokens

**Tailwind Plugins:**
- `tailwindcss-animate`: `^1` - Animation utilities
- `@tailwindcss/forms`: `^0.5` - Form styling
- `@tailwindcss/typography`: `^0.5` - Rich text styling

**Component Utilities:**
- `class-variance-authority`: `^0.7` - Component variant management
- `tailwind-merge`: `^1` - Dynamic class merging
- `clsx`: `^2` - Conditional class composition

**Purpose:**
These tools work together to create a robust, type-safe styling system:
- CVA defines component variants
- `cn()` utility (combining tailwind-merge + clsx) handles conditional classes
- Tailwind provides the utility classes

## Form Management and Validation

### React Hook Form Stack

**React Hook Form**: `^7`
- Performance-optimized form library
- Minimal re-renders
- Built-in validation

**@hookform/resolvers**: `^3`
- Schema validation resolvers
- Integrates with Zod, Yup, etc.

**Zod**: `^3`
- Runtime type validation
- TypeScript type inference
- Schema composition

**Best Practices:**
- Use React Hook Form for all forms
- Define Zod schemas for validation
- Apply schemas on both client and server
- Leverage `@hookform/resolvers/zod` for integration

**Example:**
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const form = useForm({
  resolver: zodResolver(schema),
});
```

## Animation and Interactions

### Motion and Carousel

**Framer Motion**: `^12`
- Advanced animation library
- Gesture handling
- Layout animations
- Variants system

**Embla Carousel React**: `^8`
- Touch-friendly carousels
- Responsive and performant
- Plugin system

**Use Cases:**
- Page transitions (Framer Motion)
- Component animations (Framer Motion)
- Image galleries (Embla Carousel)
- Product showcases (Embla Carousel)

## Data Visualization and Tables

### Analytics and Charts

**Recharts**: `^2`
- React-based chart library
- Composable charts
- Responsive by default

**@tanstack/react-table**: `^8`
- Headless table component
- Sorting, filtering, pagination
- Type-safe API

**Use Cases:**
- Dashboard charts (Recharts)
- Analytics visualizations (Recharts)
- Data tables (TanStack Table)
- Complex data grids (TanStack Table)

## UI Enhancement Libraries

### Icons and Visual Elements

**Lucide React**: `^0.475.0`
- Primary icon system
- Consistent design language
- Tree-shakeable
- Customizable size and color

**@icons-pack/react-simple-icons**: `^12.9.0`
- Brand and social icons
- Facebook, Twitter/X, GitHub, etc.

**Usage:**
```typescript
import { Check, Star, ArrowRight } from 'lucide-react';
import { SiGithub, SiTwitter } from '@icons-pack/react-simple-icons';
```

### Advanced UI Components

**Sonner**: `^1.7.4`
- Toast notification system
- Beautiful default styling
- Promise-based API

**Vaul**: `^1.1.2`
- Mobile drawer component
- Gesture-based
- Accessible

**React Day Picker**: `^8.10.1`
- Date picker component
- Customizable
- Locale support

**React Resizable Panels**: `^2.1.8`
- Resizable layout panels
- Split panes
- Collapsible sections

## Development and Build Tools

### Code Quality

**ESLint**: `^9`
- Latest ESLint version
- Code quality enforcement
- Custom rules

**Prettier**: `^3`
- Automatic code formatting
- Consistent style
- Integration with ESLint

### Build Tools

**Next Bundle Analyzer**: `^15`
- Bundle size analysis
- Optimization insights
- Visual bundle breakdown

**Cross-env**: `^7`
- Cross-platform environment variables
- Works on Windows, macOS, Linux

## Utilities and Helpers

### Date and String Processing

**date-fns**: `^3`
- Date manipulation and formatting
- Lightweight alternative to Moment.js
- Immutable and pure functions

**github-slugger**: `^2`
- URL-safe slug generation
- GitHub-compatible slugs
- Duplicate handling

**Usage:**
```typescript
import { format, addDays } from 'date-fns';
import GithubSlugger from 'github-slugger';

const formatted = format(new Date(), 'yyyy-MM-dd');
const slug = GithubSlugger.slug('My Blog Post Title');
```

### File and Media

**image-size**: `^2`
- Extract image dimensions
- Multiple format support

**probe-image-size**: `^7`
- Remote image metadata
- Stream-based detection

**mime-types**: `^3`
- MIME type detection
- File extension mapping

## Error Handling

**react-error-boundary**: `^6.0.0`
- React error boundaries
- Fallback UI
- Error recovery

**Usage:**
```typescript
import { ErrorBoundary } from 'react-error-boundary';

<ErrorBoundary fallback={<ErrorFallback />}>
  <MyComponent />
</ErrorBoundary>
```

## Dependency Management

### Keeping Dependencies Updated

**When to Update:**
- Security vulnerabilities (immediately)
- Major framework updates (plan and test)
- Minor/patch updates (regularly)

**Update Process:**
1. Check changelog for breaking changes
2. Update `package.json`
3. Run tests
4. Update this documentation
5. Update related instruction files if patterns change

### Version Compatibility

**Current Compatibility Matrix:**
- Next.js 15 requires React 19
- React Hook Form 7 works with React 18+
- TailwindCSS 3 works with all modern frameworks
- TypeScript 5 recommended for all packages

## Import Patterns

### Package Imports

```typescript
// Next.js
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

// React
import { useState, useEffect } from 'react';

// UI Components
import { Button } from '@/components/shared/ui/button';

// Forms
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Icons
import { Check, X, Menu } from 'lucide-react';

// Animations
import { motion } from 'framer-motion';

// Utilities
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
```

## How Copilot Should Use This

When working with dependencies in this repository, Copilot should:

1. **Reference this stack** when suggesting libraries or implementations
2. **Use the documented versions** as the baseline for compatibility
3. **Prefer existing dependencies** over suggesting new ones
4. **Follow established patterns**:
   - React Hook Form + Zod for forms
   - Framer Motion for animations
   - Lucide React for icons
   - TailwindCSS for styling
   - Recharts for data visualization
   - TanStack Table for data tables

5. **Suggest updates to this file** when:
   - New dependencies are added to `package.json`
   - Dependencies are updated to new major versions
   - Usage patterns change for existing dependencies

6. **Import correctly**:
   - Use correct package names
   - Import from documented paths
   - Use named imports where appropriate

7. **Consider compatibility**:
   - Ensure suggested patterns work with React 19
   - Use Next.js 15 App Router conventions
   - Leverage Server Components where appropriate

8. **Recommend best practices** specific to each library as documented in this file

This technology stack represents the approved and tested dependencies for the project. When suggesting code, always use these libraries and follow their documented best practices.
