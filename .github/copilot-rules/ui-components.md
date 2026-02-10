# UI Components (Shadcn UI)

## Summary

This document explains how to use UI components from the Shadcn UI design system located in `components/shared/ui`. These primitives serve as the foundation for building all user interfaces, dashboards, forms, and interactive elements in this codebase.

## Overview

All UI primitives are imported from `@/components/shared/ui` and are based on [Shadcn UI](https://ui.shadcn.com/docs). These components provide:
- Consistent design language
- Accessibility built-in
- Dark mode support
- Tailwind CSS styling
- Type-safe props
- Composable architecture

## Core Principle

**Always prefer components from `@/components/shared/ui` if available.**

Do not duplicate UI logic or create custom implementations when a suitable component exists. Instead, extend or compose existing components.

## Available UI Components

### Buttons and Actions

**Button** - `components/shared/ui/button.tsx`
```typescript
import { Button } from '@/components/shared/ui/button';

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

**Toggle** - `components/shared/ui/toggle.tsx`
```typescript
import { Toggle } from '@/components/shared/ui/toggle';

<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>
```

### Navigation

**Dropdown Menu** - `components/shared/ui/dropdown-menu.tsx`
```typescript
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/shared/ui/dropdown-menu';

<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

**Menubar** - `components/shared/ui/menubar.tsx`
**Pagination** - `components/shared/ui/pagination.tsx`
**Tabs** - `components/shared/ui/tabs.tsx`

### Forms and Inputs

**Form** - `components/shared/ui/form.tsx`
```typescript
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shared/ui/form';

<Form {...form}>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

**Input** - `components/shared/ui/input.tsx`
**Select** - `components/shared/ui/select.tsx`
**Switch** - `components/shared/ui/switch.tsx`
**Slider** - `components/shared/ui/slider.tsx`
**Calendar** - `components/shared/ui/calendar.tsx`

### Layout and Containers

**Card** - `components/shared/ui/card.tsx`
```typescript
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shared/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

**Sheet** - `components/shared/ui/sheet.tsx` (Slide-out panels)
**Table** - `components/shared/ui/table.tsx`

### Overlays and Modals

**Dialog** - `components/shared/ui/dialog.tsx`
```typescript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shared/ui/dialog';

<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description goes here
      </DialogDescription>
    </DialogHeader>
    {/* Dialog content */}
  </DialogContent>
</Dialog>
```

**Alert** - `components/shared/ui/alert.tsx`

### Display

**Badge** - `components/shared/ui/badge.tsx`
```typescript
import { Badge } from '@/components/shared/ui/badge';

<Badge variant="default">New</Badge>
<Badge variant="secondary">Updated</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Error</Badge>
```

**Avatar** - `components/shared/ui/avatar.tsx`
```typescript
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shared/ui/avatar';

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## Usage Guidelines

### Import Pattern

Always use named imports from the specific component file:

```typescript
// ✅ Good: Named imports from specific files
import { Button } from '@/components/shared/ui/button';
import { Input } from '@/components/shared/ui/input';
import { Dialog, DialogContent } from '@/components/shared/ui/dialog';

// ❌ Bad: Index imports (not supported)
import { Button } from '@/components/shared/ui';
```

### Composition Over Duplication

Extend existing components rather than creating duplicates:

```typescript
// ✅ Good: Extend existing component
import { Button } from '@/components/shared/ui/button';

export function SubmitButton({ children, ...props }) {
  return (
    <Button type="submit" variant="default" {...props}>
      {children}
    </Button>
  );
}

// ❌ Bad: Recreate button logic
export function SubmitButton() {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded">
      Submit
    </button>
  );
}
```

### Styling Components

Use Tailwind classes to customize components:

```typescript
// ✅ Good: Extend with Tailwind
<Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Button
</Button>

// Additional styling through className
<Card className="shadow-2xl border-2 border-primary">
  <CardContent className="space-y-4">
    {/* Content */}
  </CardContent>
</Card>
```

### Variant System

Most components support variants for different styles:

```typescript
// Button variants
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Badge variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

## Integration with Forms

### React Hook Form Integration

Shadcn UI Form components integrate seamlessly with React Hook Form:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/shared/ui/form';
import { Input } from '@/components/shared/ui/input';
import { Button } from '@/components/shared/ui/button';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Log In</Button>
      </form>
    </Form>
  );
}
```

## Accessibility

All Shadcn UI components include:
- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility

When customizing components, maintain these accessibility features:

```typescript
// ✅ Good: Maintains accessibility
<Button aria-label="Close dialog" onClick={handleClose}>
  <X className="h-4 w-4" />
</Button>

// ❌ Bad: Missing accessibility
<div onClick={handleClose}>
  <X className="h-4 w-4" />
</div>
```

## Dark Mode Support

All components automatically support dark mode through Tailwind's `dark:` variants:

```typescript
// Components automatically adapt to dark mode
<Card className="bg-white dark:bg-gray-900">
  <CardContent className="text-gray-900 dark:text-gray-100">
    Content adapts to theme
  </CardContent>
</Card>
```

## When to Create Custom Components

Only create custom UI components when:
1. No suitable `@/components/shared/ui` component exists
2. You need highly specialized behavior not covered by composition
3. You're creating a compound component that combines multiple UI primitives

**Example of valid custom component:**

```typescript
// Custom component that composes UI primitives
import { Card, CardHeader, CardTitle, CardContent } from '@/components/shared/ui/card';
import { Button } from '@/components/shared/ui/button';
import { Badge } from '@/components/shared/ui/badge';

export function PricingCard({ plan, price, features, highlighted }) {
  return (
    <Card className={highlighted ? 'border-primary shadow-lg' : ''}>
      <CardHeader>
        {highlighted && <Badge>Popular</Badge>}
        <CardTitle>{plan}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">${price}</div>
        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <Button className="w-full mt-6">Choose Plan</Button>
      </CardContent>
    </Card>
  );
}
```

## Component Reference

For complete component APIs, props, and advanced usage, refer to:
- **Official Documentation**: [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- **Component Source**: `components/shared/ui/[component-name].tsx`

## Best Practices

### Do's

- ✅ Import from `@/components/shared/ui/[component]`
- ✅ Use composition to extend functionality
- ✅ Apply Tailwind classes via `className` prop
- ✅ Follow accessibility patterns
- ✅ Support dark mode with `dark:` variants
- ✅ Use appropriate variants for different contexts
- ✅ Leverage the Form components for React Hook Form integration

### Don'ts

- ❌ Create duplicate UI components
- ❌ Use inline styles instead of Tailwind
- ❌ Import from index files (use specific component paths)
- ❌ Ignore accessibility attributes
- ❌ Hardcode colors (use design tokens)
- ❌ Override component internals (use composition instead)
- ❌ Use non-semantic HTML when components provide semantic alternatives

## Example: Complete Form

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shared/ui/form';
import { Input } from '@/components/shared/ui/input';
import { Button } from '@/components/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shared/ui/card';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18),
});

export function UserForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      age: 18,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>User Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Your full name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
```

## How Copilot Should Use This

When building user interfaces in this repository, Copilot should:

1. **Always check** `components/shared/ui` for existing components before creating new ones
2. **Import UI primitives** from `@/components/shared/ui/[component-name]`
3. **Use named imports** for all UI components
4. **Compose components** by wrapping or combining UI primitives
5. **Extend with Tailwind** classes via the `className` prop
6. **Use appropriate variants** (default, outline, ghost, etc.) for different contexts
7. **Integrate forms** using the Form component with React Hook Form
8. **Maintain accessibility** by preserving ARIA attributes and semantic HTML
9. **Support dark mode** by applying `dark:` variants where needed
10. **Reference Shadcn UI docs** at https://ui.shadcn.com/docs for component APIs

When suggesting UI implementations:
- Default to Shadcn UI components from `@/components/shared/ui`
- Only suggest custom components for truly unique use cases
- Always compose with existing primitives rather than recreating functionality

These UI components are the foundation of the design system and should be used consistently throughout the application.
