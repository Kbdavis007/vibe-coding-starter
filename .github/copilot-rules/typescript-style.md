# TypeScript Code Style Guide

## Summary

This document defines TypeScript coding conventions and best practices for the project. It covers parameter passing, type safety, imports, functional programming patterns, documentation standards, and code organization.

## Core Principles

- Write type-safe, explicit TypeScript code
- Use functional programming patterns
- Avoid classes; prefer functions and hooks
- Maintain consistency across the codebase
- Prioritize readability and maintainability

## Parameter Passing

### Named Parameters Pattern

**Always pass function parameters as a single object** (named parameters pattern).

This pattern:
- Improves readability
- Makes parameter order irrelevant
- Simplifies adding optional parameters
- Provides self-documenting code

**Examples:**

```typescript
// ✅ Good: Named parameters
function createUser({ id, name, email }: { id: string; name: string; email: string }) {
  return { id, name, email };
}

// Usage is clear and self-documenting
createUser({
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
});

// ❌ Bad: Positional parameters
function createUser(id: string, name: string, email: string) {
  return { id, name, email };
}

// Usage requires remembering parameter order
createUser('123', 'John Doe', 'john@example.com');
```

### Interface for Complex Parameters

For functions with many parameters, define a dedicated interface:

```typescript
// ✅ Good: Dedicated interface
interface CreateUserParams {
  id: string;
  name: string;
  email: string;
  role?: 'admin' | 'user';
  isActive?: boolean;
}

function createUser({ id, name, email, role = 'user', isActive = true }: CreateUserParams) {
  return { id, name, email, role, isActive };
}
```

## Type Safety

### Never Use `any`

**Never use `any` as a type.** Use explicit types, interfaces, or `unknown` with type guards when the type is truly unknown.

```typescript
// ✅ Good: Explicit types
function processData(data: UserData): ProcessedData {
  return { processed: true, data };
}

// ✅ Good: Unknown with type guards
function parseJson(json: string): unknown {
  return JSON.parse(json);
}

function processUnknown(value: unknown) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  if (typeof value === 'number') {
    return value * 2;
  }
  throw new Error('Unsupported type');
}

// ❌ Bad: Using any
function processData(data: any): any {
  return data;
}
```

### Reusable Interfaces

Reuse interfaces across files and place shared interfaces in a `models/` or `types/` directory:

```typescript
// models/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface UserWithProfile extends User {
  profile: UserProfile;
}

// Other files
import { User, UserWithProfile } from '@/models/user';
```

### Type Inference

Leverage TypeScript's type inference where appropriate:

```typescript
// ✅ Good: Let TypeScript infer simple types
const count = 0; // TypeScript infers number
const message = 'Hello'; // TypeScript infers string
const items = ['a', 'b', 'c']; // TypeScript infers string[]

// ✅ Good: Explicit types for complex structures
const user: User = {
  id: '123',
  name: 'John',
  email: 'john@example.com',
  role: 'user',
};
```

## Imports

### Path Aliases

**Use shorter imports via path aliases**, not relative paths:

```typescript
// ✅ Good: Path aliases
import { Button } from '@/components/shared/ui/button';
import { formatDate } from '@/lib/utils/format-date';
import { User } from '@/models/user';

// ❌ Bad: Relative paths
import { Button } from '../../../components/shared/ui/button';
import { formatDate } from '../../lib/utils/format-date';
```

### Named Exports

**Use named exports; do not use index exports or default exports.**

```typescript
// ✅ Good: Named exports
// components/button.tsx
export const Button = () => { /* ... */ };

// Import
import { Button } from '@/components/button';

// ✅ Good: Multiple named exports
// lib/utils.ts
export function formatDate(date: Date): string { /* ... */ }
export function formatCurrency(amount: number): string { /* ... */ }

// Import specific functions
import { formatDate, formatCurrency } from '@/lib/utils';

// ❌ Bad: Default export
// components/button.tsx
export default function Button() { /* ... */ }

// ❌ Bad: Index exports
// components/index.ts
export { Button } from './button';
export { Input } from './input';

// Import (unclear source)
import { Button } from '@/components';
```

### Import Organization

Organize imports in groups:

1. External packages
2. Internal absolute imports
3. Relative imports (if necessary)

```typescript
// ✅ Good: Organized imports
// External packages
import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Internal absolute imports
import { Button } from '@/components/shared/ui/button';
import { formatDate } from '@/lib/utils/format-date';
import { User } from '@/models/user';
```

## Functional Programming

### No Classes

**Do not use classes.** Use functional methods and React hooks instead:

```typescript
// ✅ Good: Functional approach with hooks
function useUserData(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(setUser).finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
}

// ❌ Bad: Class-based approach
class UserDataManager {
  private user: User | null = null;
  private loading = true;

  async loadUser(userId: string) {
    this.loading = true;
    this.user = await fetchUser(userId);
    this.loading = false;
  }
}
```

### Control Flow

**Always wrap `if` statements in curly braces**, even for single-line blocks:

```typescript
// ✅ Good: Curly braces for clarity
if (isActive) {
  doSomething();
}

if (hasError) {
  logError(error);
  return null;
}

// ❌ Bad: No curly braces
if (isActive) doSomething();

if (hasError) return null;
```

## Comments and Documentation

### Minimal Comments

**Do not comment obvious things.** Code should be self-documenting through clear naming and structure:

```typescript
// ✅ Good: Self-documenting code
function calculateTotalPrice({ items, taxRate }: { items: Item[]; taxRate: number }): number {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

// ❌ Bad: Obvious comments
function calculateTotalPrice({ items, taxRate }: { items: Item[]; taxRate: number }): number {
  // Calculate the subtotal by summing all item prices
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  
  // Calculate tax
  const tax = subtotal * taxRate;
  
  // Return total
  return subtotal + tax;
}
```

### No Change Logs in Comments

**Do not explain changes in comments.** Use version control (git) for change history:

```typescript
// ❌ Bad: Change history in comments
function processUser(user: User) {
  // Updated 2024-01-15: Added email validation
  // Fixed 2024-01-20: Handle null emails
  // Changed 2024-02-01: Switched to new validation library
  validateEmail(user.email);
}

// ✅ Good: No change history, just code
function processUser(user: User) {
  validateEmail(user.email);
}
```

### Document Complex Logic

**Only document extraordinary changes or complex logic:**

```typescript
// ✅ Good: Documents non-obvious logic
function calculateDiscount({ price, userTier }: { price: number; userTier: string }): number {
  // Apply tiered discount structure:
  // - Bronze: 5%
  // - Silver: 10% + bonus 2% on orders over $100
  // - Gold: 15% + bonus 5% on orders over $100
  const baseDiscount = TIER_DISCOUNTS[userTier] || 0;
  const bonusDiscount = price > 100 ? TIER_BONUS[userTier] || 0 : 0;
  
  return price * (baseDiscount + bonusDiscount);
}
```

### JSDoc for Public APIs

Use JSDoc for top-level functions, especially those exported as public APIs:

```typescript
/**
 * Formats a date according to the specified format string.
 * 
 * @param date - The date to format
 * @param format - The format string (e.g., 'yyyy-MM-dd')
 * @returns Formatted date string
 * 
 * @example
 * formatDate(new Date(), 'yyyy-MM-dd') // '2024-01-15'
 */
export function formatDate(date: Date, format: string): string {
  // Implementation
}
```

## File Organization

### Schemas

**Reuse schemas for forms and validation.** Place shared schemas in a `schemas/` directory:

```typescript
// schemas/user.ts
import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  age: z.number().min(18).max(120),
});

export type UserFormData = z.infer<typeof userSchema>;

// Usage in multiple components
import { userSchema, UserFormData } from '@/schemas/user';
```

### Utility Functions

**Place small utility functions under `lib/utils/function-name.ts`:**

```typescript
// lib/utils/format-date.ts
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// lib/utils/format-currency.ts
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

// Import where needed
import { formatDate } from '@/lib/utils/format-date';
import { formatCurrency } from '@/lib/utils/format-currency';
```

### Models and Types

Place shared interfaces and types in `models/` or `types/`:

```typescript
// models/product.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface ProductWithInventory extends Product {
  stockLevel: number;
  reorderPoint: number;
}

// Usage
import { Product, ProductWithInventory } from '@/models/product';
```

## Naming Conventions

### Variables and Functions

- Use **camelCase** for variables and functions
- Use descriptive names with auxiliary verbs

```typescript
// ✅ Good
const isLoading = true;
const hasError = false;
const shouldRedirect = true;

function fetchUserData() { /* ... */ }
function validateForm() { /* ... */ }

// ❌ Bad
const loading = true;
const error = false;
const redirect = true;

function getData() { /* ... */ }
function validate() { /* ... */ }
```

### Components and Constructors

- Use **PascalCase** for React components and type constructors

```typescript
// ✅ Good
export const UserProfile = () => { /* ... */ };
export const ProductCard = () => { /* ... */ };

interface UserData { /* ... */ }
type ProductVariant = 'default' | 'featured';

// ❌ Bad
export const userProfile = () => { /* ... */ };
export const product_card = () => { /* ... */ };
```

## Best Practices Summary

### Do's

- ✅ Use named parameters pattern for functions
- ✅ Avoid `any`; use explicit types or `unknown` with type guards
- ✅ Use path aliases (`@/`) for imports
- ✅ Use named exports; avoid default exports
- ✅ Write functional code; avoid classes
- ✅ Wrap all `if` statements in curly braces
- ✅ Keep comments minimal and meaningful
- ✅ Reuse schemas and types across files
- ✅ Organize utilities in `lib/utils/`
- ✅ Use camelCase for variables, PascalCase for components

### Don'ts

- ❌ Use positional parameters for functions
- ❌ Use `any` type
- ❌ Use relative imports like `../../`
- ❌ Use default exports or index exports
- ❌ Write class-based code
- ❌ Write single-line `if` without braces
- ❌ Add obvious or change log comments
- ❌ Duplicate types and schemas
- ❌ Use inconsistent naming conventions

## How Copilot Should Use This

When writing TypeScript code in this repository, Copilot should:

1. **Always use named parameters** pattern for functions with 2+ parameters
2. **Never suggest `any`**; use explicit types or `unknown` with type guards
3. **Use path aliases** (`@/`) for all imports
4. **Use named exports** exclusively; avoid default exports
5. **Generate functional code** with hooks, not classes
6. **Wrap all `if` statements** in curly braces
7. **Avoid unnecessary comments**; write self-documenting code
8. **Suggest extracting** repeated types/schemas to `models/` or `schemas/`
9. **Place utilities** in `lib/utils/[function-name].ts`
10. **Follow naming conventions**: camelCase for variables/functions, PascalCase for components/types

These conventions ensure consistency, type safety, and maintainability across the entire TypeScript codebase.
