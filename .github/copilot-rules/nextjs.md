# Next.js Development Guidelines

## Summary

This document defines best practices for building applications with Next.js App Router, React, TypeScript, Shadcn UI, and TailwindCSS. It covers code style, architecture patterns, component development, form handling, error management, accessibility, and security.

## Core Principles

- Write concise, technical TypeScript code
- Use functional and declarative programming patterns
- Avoid classes; prefer hooks and functional components
- Prioritize iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`)

## Code Organization

### File Structure

Structure files in this order:
1. Exported component
2. Subcomponents
3. Helper functions
4. Static content/constants

### Naming Conventions

**Directories:**
- Use lowercase with dashes: `components/auth-wizard`, `app/user-profile`

**Exports:**
- Use **named exports**; avoid default exports
- Example: `export const Button = () => {}`

**Variables and Functions:**
- Use camelCase for variables and functions
- Use PascalCase for React components and constructors

## TypeScript Rules

- No unused variables
- Use curly braces for all multi-line `if` statements
- Always handle error parameters in `try/catch` blocks and error callbacks
- Use explicit types; avoid `any`

Example:

```typescript
// ✅ Good
try {
  const result = await fetchData();
  processResult(result);
} catch (error) {
  console.error('Failed to fetch data:', error);
  throw new Error('Data fetch failed');
}

// ❌ Bad
try {
  const result = await fetchData();
} catch (error) {
  // Unhandled error
}
```

## React Best Practices

### Hooks

- Implement hooks correctly: `useState`, `useEffect`, `useContext`, `useReducer`, `useMemo`, `useCallback`
- Follow the Rules of Hooks:
  - Only call hooks at the top level
  - Only call hooks from React functions
- Create custom hooks to extract reusable component logic

### Component Patterns

- Prefer composition over inheritance
- Use `children` prop and render props pattern for flexible, reusable components
- Prefer controlled components over uncontrolled components
- Implement error boundaries to catch and handle errors gracefully

### Performance

- Implement `React.lazy()` and `Suspense` for code splitting
- Use dynamic loading for non-critical components
- Use cleanup functions in `useEffect` to prevent memory leaks

### Conditional Rendering

- Use short-circuit evaluation and ternary operators
- Example: `{isLoading && <Spinner />}`

### Refs

- Use refs sparingly and mainly for DOM access
- Avoid using refs for state management

## UI and Styling

### Component Foundation

- Use Shadcn UI for component foundations from `components/shared/ui`
- Import components: `import { Button } from '@/components/shared/ui/button'`

### Responsive Design

- Implement responsive design with Tailwind CSS
- Use a **mobile-first approach**
- Apply responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

Example:

```tsx
<div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-8">
  {/* Content */}
</div>
```

### Dark Mode

- Implement dark mode support using Tailwind's `dark:` variant
- Example: `className="bg-white dark:bg-gray-900"`

## Forms and Validation

### Form Implementation

- Use controlled components for form inputs
- Implement both client-side and server-side validation
- Use React Hook Form for complex forms
- Use Zod for schema validation

Example:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

function MyForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission
  };

  return <form onSubmit={handleSubmit(onSubmit)}>...</form>;
}
```

## Page Metadata

Use the Shipixen utility for all page metadata generation:

```typescript
import { genPageMetadata } from '@/app/seo';

export const metadata = genPageMetadata({
  title: 'Home',
  description: 'Welcome to our application!'
});
```

Reference: `app/seo.tsx`

## Error Handling

### Best Practices

- Prioritize error handling and edge cases
- Handle errors at the beginning of functions
- Use early returns for error conditions to avoid deeply nested `if` statements
- Place the happy path last in the function for improved readability
- Avoid unnecessary `else` statements; use if-return pattern instead
- Use guard clauses to handle preconditions and invalid states early
- Implement proper error logging and user-friendly error messages

Example:

```typescript
// ✅ Good: Early returns, clear error handling
function processUser({ id, name }: { id: string; name: string }) {
  if (!id) {
    throw new Error('User ID is required');
  }

  if (!name) {
    throw new Error('User name is required');
  }

  // Happy path
  return {
    id,
    displayName: name.trim(),
  };
}

// ❌ Bad: Nested conditions, unclear flow
function processUser({ id, name }: { id: string; name: string }) {
  if (id) {
    if (name) {
      return { id, displayName: name.trim() };
    } else {
      throw new Error('User name is required');
    }
  } else {
    throw new Error('User ID is required');
  }
}
```

## Accessibility

- Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.)
- Implement proper ARIA attributes when semantic HTML is insufficient
- Ensure keyboard navigation support for all interactive elements
- Test with screen readers

Example:

```tsx
// ✅ Good: Semantic HTML with proper ARIA
<button
  type="button"
  aria-label="Close dialog"
  onClick={handleClose}
>
  <XIcon />
</button>

// ❌ Bad: Non-semantic element without accessibility
<div onClick={handleClose}>
  <XIcon />
</div>
```

## Security

- **Sanitize user inputs** to prevent XSS attacks
- Use `dangerouslySetInnerHTML` sparingly and only with sanitized content
- Validate data on both client and server
- Use environment variables for sensitive data
- Never expose API keys in client-side code

Example:

```tsx
// ✅ Good: Sanitized content
import DOMPurify from 'dompurify';

function SafeContent({ html }: { html: string }) {
  const sanitized = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}

// ❌ Bad: Unsanitized user content
function UnsafeContent({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
```

## Next.js Specific

### Data Fetching

Follow Next.js App Router conventions:
- Use Server Components by default
- Use `async/await` in Server Components for data fetching
- Use Client Components (`'use client'`) only when necessary (interactivity, hooks, browser APIs)

### Routing

- Leverage App Router file-based routing
- Use route groups for organization: `(auth)`, `(dashboard)`
- Implement dynamic routes: `[id]`, `[slug]`

## External References

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)

## How Copilot Should Use This

When working on Next.js projects in this repository, Copilot should:

1. **Always prefer** functional components and hooks over class components
2. **Use named exports** exclusively; avoid default exports
3. **Apply the file structure** pattern: exported component, subcomponents, helpers, static content
4. **Implement proper error handling** with early returns and guard clauses
5. **Use Shadcn UI components** from `components/shared/ui` as the foundation
6. **Follow mobile-first** responsive design with Tailwind CSS
7. **Use `genPageMetadata`** from `app/seo.tsx` for all page metadata
8. **Apply React Hook Form with Zod** for form handling and validation
9. **Ensure accessibility** with semantic HTML and proper ARIA attributes
10. **Sanitize user input** to prevent security vulnerabilities
11. **Suggest Server Components** by default; only use Client Components when needed

These guidelines should be applied to all React, TypeScript, and Next.js code suggestions and generations.
