# Tailwind CSS Styling Practices

## Summary

This document defines the conventions and best practices for using Tailwind CSS throughout the project. It covers class organization, responsive design patterns, color usage, layout techniques, and integration with the design system.

## Core Principles

- Use utility-first approach with Tailwind CSS
- Maintain consistent class organization
- Follow mobile-first responsive design
- Leverage the design system's semantic colors
- Compose with Shadcn UI components
- Use the `cn()` utility for conditional classes

## Class Organization

### Ordering Convention

Organize Tailwind classes in a consistent, logical order:

1. **Layout & Positioning** - `flex`, `grid`, `absolute`, `relative`
2. **Sizing** - `w-full`, `h-screen`, `min-h-0`
3. **Spacing** - `p-4`, `m-6`, `gap-2`
4. **Visual Styles** - `bg-primary-100`, `border`, `rounded`
5. **Typography** - `text-sm`, `font-bold`, `leading-tight`
6. **Interactive States** - `hover:`, `focus:`, `active:`
7. **Responsive Variants** - `md:`, `lg:`, `xl:`

### Example

```tsx
// ✅ Good: Organized by category
className="flex flex-col gap-4 w-full p-6 bg-primary-100/20 text-sm hover:bg-primary-200/30 md:flex-row"

// ❌ Bad: Random order
className="text-sm md:flex-row bg-primary-100/20 flex p-6 gap-4 w-full hover:bg-primary-200/30 flex-col"
```

### Complex Class Strings

For readability, split long class strings:

```tsx
// ✅ Good: Readable with logical grouping
<div
  className={cn(
    // Layout
    "flex flex-col gap-4",
    // Sizing
    "w-full max-w-4xl",
    // Spacing
    "p-6 md:p-8",
    // Visual
    "bg-white dark:bg-gray-900 rounded-lg shadow-lg",
    // Typography
    "text-base leading-relaxed",
    // Responsive
    "md:flex-row lg:gap-8"
  )}
>
```

## Responsive Design

### Mobile-First Approach

Always start with mobile styles, then add responsive variants for larger screens:

```tsx
// ✅ Good: Mobile-first
<div className="text-sm md:text-base lg:text-lg">
  Content
</div>

// ❌ Bad: Desktop-first (requires overrides)
<div className="text-lg md:text-base sm:text-sm">
  Content
</div>
```

### Breakpoint Usage

Use Tailwind's default breakpoints:
- `sm:` - 640px and up (small tablets)
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (laptops)
- `xl:` - 1280px and up (desktops)
- `2xl:` - 1536px and up (large desktops)

### Common Responsive Patterns

**Flex Direction:**
```tsx
<div className="flex flex-col md:flex-row">
  {/* Stacked on mobile, side-by-side on tablet+ */}
</div>
```

**Grid Columns:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* 1 column mobile, 2 tablet, 3 desktop */}
</div>
```

**Spacing:**
```tsx
<div className="p-4 md:p-6 lg:p-8">
  {/* Progressively larger padding */}
</div>
```

**Typography:**
```tsx
<h1 className="text-3xl md:text-5xl lg:text-6xl">
  {/* Responsive heading */}
</h1>
```

## Color System

### Semantic Colors

Use semantic color naming with numeric scales:
- `primary-50` through `primary-950`
- `secondary-50` through `secondary-950`

### Opacity Control

Apply opacity using slash notation:

```tsx
// ✅ Good: Slash notation for opacity
className="bg-primary-100/20 text-primary-900/90"

// ❌ Bad: Opacity utility classes
className="bg-primary-100 bg-opacity-20"
```

### Dark Mode Support

Use `dark:` variant for dark mode styles:

```tsx
// ✅ Good: Explicit dark mode variants
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-gray-100">
    Content
  </p>
</div>
```

### Color Pattern Examples

**Subtle Backgrounds:**
```tsx
className="bg-primary-50/50 dark:bg-primary-950/50"
```

**Emphasized Elements:**
```tsx
className="bg-primary-100/20 dark:bg-primary-900/10"
```

**Text Colors:**
```tsx
className="text-primary-900 dark:text-primary-100"
```

**Borders:**
```tsx
className="border border-primary-200 dark:border-primary-800"
```

## Layout Patterns

### Flexbox

**Common Flex Patterns:**
```tsx
// Vertical stack with spacing
<div className="flex flex-col gap-4">

// Horizontal row with spacing
<div className="flex flex-row gap-6">

// Centered content
<div className="flex items-center justify-center">

// Space between items
<div className="flex items-center justify-between">

// Wrap items
<div className="flex flex-wrap gap-4">
```

### Grid

**Common Grid Patterns:**
```tsx
// Auto-fit columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Equal columns
<div className="grid grid-cols-2 gap-4">

// Responsive gallery
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
```

### Gap Instead of Margin

**Use `gap` utilities for flex/grid children:**

```tsx
// ✅ Good: Use gap
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// ❌ Bad: Manual margins
<div className="flex">
  <div className="mr-4">Item 1</div>
  <div>Item 2</div>
</div>
```

### Container Widths

Use semantic container classes:

```tsx
// Standard containers
className="container mx-auto"           // Default container
className="max-w-sm mx-auto"            // Small (384px)
className="max-w-md mx-auto"            // Medium (448px)
className="max-w-lg mx-auto"            // Large (512px)
className="max-w-xl mx-auto"            // Extra Large (576px)
className="max-w-2xl mx-auto"           // 2XL (672px)
className="max-w-4xl mx-auto"           // 4XL (896px)
className="max-w-6xl mx-auto"           // 6XL (1152px)
className="max-w-7xl mx-auto"           // 7XL (1280px)

// Custom project containers (if defined)
className="container-narrow"            // Narrow content
className="container-wide"              // Wide content
className="container-ultrawide"         // Ultra-wide content
```

## Visual Design Patterns

### Gradients

Use gradients for visual interest:

```tsx
// Subtle background gradient
className="bg-gradient-to-r from-gray-50/5 via-gray-100/60 to-gray-50/5"

// Bold hero gradient
className="bg-gradient-to-br from-primary-500 to-secondary-600"

// Dark mode gradient
className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-950 dark:to-black"
```

### Shadows

```tsx
// Subtle shadow
className="shadow-sm"

// Standard shadow
className="shadow-md"

// Elevated shadow
className="shadow-lg"

// Dramatic shadow
className="shadow-2xl"

// Colored shadow
className="shadow-lg shadow-primary-500/50"
```

### Borders and Rounding

```tsx
// Standard border
className="border border-gray-200 dark:border-gray-800"

// Rounded corners
className="rounded-lg"          // Large radius
className="rounded-xl"          // Extra large
className="rounded-full"        // Full circle/pill

// Border on specific sides
className="border-b border-gray-200"
```

## Component Styling Approach

### Shadcn UI + Tailwind

Combine Shadcn UI for behavior with Tailwind for styling:

```tsx
import { Button } from '@/components/shared/ui/button';

// ✅ Good: Extend Shadcn component with Tailwind
<Button className="bg-primary-600 hover:bg-primary-700">
  Click Me
</Button>
```

### Conditional Classes with `cn()`

Use the `cn()` utility for conditional classes:

```tsx
import { cn } from '@/lib/utils';

function Alert({ variant, children }: { variant: 'info' | 'error'; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg",
        variant === 'info' && "bg-blue-100 text-blue-900",
        variant === 'error' && "bg-red-100 text-red-900"
      )}
    >
      {children}
    </div>
  );
}
```

### Class Variance Authority (CVA)

Use CVA for complex component variants:

```tsx
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700",
        outline: "border border-primary-600 text-primary-600 hover:bg-primary-50",
        ghost: "hover:bg-primary-100 text-primary-600",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

function Button({ variant, size, className, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
```

## Best Practices

### Do's

- ✅ Use utility classes directly in JSX
- ✅ Follow the class organization order
- ✅ Use `gap` instead of margins for flex/grid children
- ✅ Apply mobile-first responsive design
- ✅ Use semantic color names with opacity
- ✅ Leverage `cn()` for conditional classes
- ✅ Use CVA for component variants
- ✅ Support dark mode with `dark:` variants
- ✅ Prefer composition over custom CSS

### Don'ts

- ❌ Write custom CSS when Tailwind utilities exist
- ❌ Use inline styles (`style={{}}`)
- ❌ Create arbitrary class names
- ❌ Mix Tailwind with other CSS frameworks
- ❌ Use `@apply` in CSS files (use utilities directly)
- ❌ Hardcode colors (use design tokens)
- ❌ Forget dark mode variants
- ❌ Use desktop-first responsive approach

## Accessibility Considerations

Always include accessibility classes:

```tsx
// Focus states
className="focus:outline-none focus:ring-2 focus:ring-primary-500"

// Screen reader only
className="sr-only"

// Visible focus indicator
className="focus-visible:ring-2 focus-visible:ring-primary-500"
```

## Performance Tips

- Use Tailwind's JIT mode (enabled by default in Tailwind v3+)
- Purge unused styles in production (configured in `tailwind.config.js`)
- Avoid deeply nested conditionals in `cn()`
- Use CVA for complex variants instead of inline conditionals

## How Copilot Should Use This

When styling components in this repository, Copilot should:

1. **Always use Tailwind utilities** instead of custom CSS
2. **Organize classes** in the documented order: layout → sizing → spacing → visual → typography → states → responsive
3. **Apply mobile-first** responsive design with breakpoints
4. **Support dark mode** with `dark:` variants on all color-related classes
5. **Use `cn()` utility** from `@/lib/utils` for conditional classes
6. **Use `gap`** for spacing flex/grid children, not margins
7. **Apply semantic colors** (primary-*, secondary-*) with opacity using slash notation
8. **Leverage CVA** for complex component variants
9. **Extend Shadcn UI components** with Tailwind classes rather than creating from scratch
10. **Include accessibility** classes (focus states, screen reader text)
11. **Follow the color system** for consistent theming across the app

These conventions ensure consistent, maintainable, and performant styling throughout the application.
