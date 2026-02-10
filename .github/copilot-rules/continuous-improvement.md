# Continuous Improvement Guidelines

## Summary

This document establishes a framework for continuously evolving and improving repository instructions based on emerging code patterns, best practices, and team feedback. It defines when and how to update instructions to keep them aligned with the evolving codebase.

## Purpose

Repository instructions should evolve alongside the codebase. As new patterns emerge, libraries are adopted, and best practices evolve, instructions must be updated to reflect these changes and guide future development.

## When to Update Instructions

### Triggers for New Instructions

Create new instruction files when:

1. **Repeated Patterns** - A new pattern is used consistently in 3+ files
2. **New Technology** - A new library, framework, or tool is adopted
3. **Preventable Bugs** - Common bugs could be prevented by documenting a pattern
4. **Code Review Feedback** - The same feedback is repeatedly given in code reviews
5. **Security/Performance** - New security or performance patterns emerge
6. **Team Questions** - Developers frequently ask the same questions

**Example:**
If you notice repeated database query patterns like:

```typescript
// Pattern appearing in multiple files
const activeUsers = await prisma.user.findMany({
  select: { id: true, email: true, name: true },
  where: { status: 'ACTIVE', deletedAt: null },
});
```

Consider creating `database-patterns.md` to document:
- Standard select fields
- Common where conditions
- Performance optimization patterns
- Transaction handling

### Triggers for Updating Existing Instructions

Modify existing instruction files when:

1. **Better Examples** - The codebase now contains superior examples
2. **Edge Cases** - New edge cases are discovered
3. **Related Changes** - Related instructions have been updated
4. **Implementation Changes** - The underlying implementation has evolved
5. **Deprecated Patterns** - Old patterns are being phased out
6. **Breaking Changes** - Major dependency updates change best practices

**Example:**
If form validation patterns evolve from manual validation to Zod schemas:

```typescript
// Old pattern (deprecated)
function validateEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

// New pattern (current)
import { z } from 'zod';
const emailSchema = z.string().email();
```

Update `nextjs.md` or relevant instruction files to reflect the new approach.

## Analysis Process

### Pattern Recognition

Regularly analyze the codebase for patterns:

1. **Compare new code with existing instructions**
   - Does new code follow documented patterns?
   - Are there deviations that should become new patterns?

2. **Identify standardization opportunities**
   - Similar implementations across multiple files
   - Inconsistent approaches to the same problem
   - Missing documentation for common patterns

3. **Monitor external references**
   - Documentation links in code comments
   - README references
   - Stack Overflow or GitHub issues mentioned

4. **Check error handling consistency**
   - How are errors handled across the codebase?
   - Are there patterns that should be standardized?

5. **Review test patterns**
   - Testing approaches and coverage
   - Mock patterns and test utilities

### Code Review Insights

Use code reviews as input for instruction updates:

- Track frequently repeated feedback
- Note questions asked by reviewers
- Identify patterns that cause confusion
- Document decisions made during reviews

## Instruction Quality Standards

### Quality Checklist

Every instruction file should be:

- [ ] **Actionable** - Provides clear, specific guidance
- [ ] **Current** - Reflects actual codebase patterns
- [ ] **Accurate** - Examples come from real code
- [ ] **Accessible** - Easy to understand and apply
- [ ] **Referenced** - Links to relevant documentation
- [ ] **Consistent** - Aligns with other instructions
- [ ] **Validated** - Reviewed and approved

### Content Standards

**Good Instructions:**
```markdown
## Form Validation

Use Zod schemas for all form validation:

✅ **Good**
\`\`\`typescript
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

type User = z.infer<typeof userSchema>;
\`\`\`

❌ **Bad**
\`\`\`typescript
// Manual validation (avoid)
if (!email.includes('@')) {
  throw new Error('Invalid email');
}
\`\`\`
```

**Poor Instructions:**
```markdown
## Validation

Validate your data properly. Use appropriate validation libraries.
```

## Maintenance Workflow

### Regular Review Cycle

**Weekly:**
- Review recent pull requests for new patterns
- Note code review feedback
- Identify inconsistencies

**Monthly:**
- Audit all instruction files for accuracy
- Update outdated examples
- Add newly discovered patterns
- Remove deprecated information

**After Major Changes:**
- Dependency upgrades
- Architecture refactors
- New feature launches
- Technology migrations

### Update Process

1. **Identify** the need for change
2. **Draft** the update
3. **Validate** against codebase
4. **Review** with team (if applicable)
5. **Update** the instruction file
6. **Document** the change reason

## Deprecation Process

### Marking Deprecated Patterns

When patterns become outdated:

```markdown
## ~~Old Pattern~~ (Deprecated)

**⚠️ Deprecated:** This pattern is no longer recommended. Use [New Pattern](#new-pattern) instead.

### Migration Path

Update code from:
\`\`\`typescript
// Old approach
\`\`\`

To:
\`\`\`typescript
// New approach
\`\`\`
```

### Removing Obsolete Instructions

Remove instruction files when:
- Pattern is completely eliminated from codebase
- Technology is no longer used
- Instruction is superseded by another

**Before removal:**
1. Verify pattern is no longer used
2. Check for references in other instructions
3. Update cross-references
4. Document removal reason (git commit message)

## Cross-Referencing

### Linking Related Instructions

When instructions relate to each other:

```markdown
## Related Guidelines

- See [TypeScript Style](typescript-style.md) for typing conventions
- See [UI Components](ui-components.md) for component usage
- See [Tailwind Styling](tailwind-styling.md) for styling patterns
```

### Maintaining Links

- Keep links up to date when files are renamed
- Remove broken references
- Add new relevant links when created

## Documentation Updates

### Keeping Examples Current

- **Sync with code** - Examples should match actual implementations
- **Update versions** - Reflect current dependency versions
- **Fix errors** - Correct any bugs in examples
- **Add context** - Explain why examples demonstrate best practices

### External Reference Management

When instructions reference external documentation:

```markdown
## External References

- [Next.js App Router](https://nextjs.org/docs/app) - Official Next.js documentation
- [Zod Documentation](https://zod.dev) - Schema validation
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS
```

**Maintenance:**
- Verify links are not broken (monthly)
- Update to latest documentation versions
- Note when external docs have breaking changes

## How Copilot Should Use This

When assisting with code in this repository, Copilot should:

1. **Monitor for patterns** that should be documented but aren't yet covered by instructions
2. **Suggest instruction updates** when encountering:
   - New patterns used repeatedly
   - Better examples than currently documented
   - Deprecated patterns still in instructions
   - Missing edge cases
3. **Flag inconsistencies** between code and documented instructions
4. **Recommend creating new instructions** when:
   - A new library is adopted across 3+ files
   - Common bugs could be prevented by documentation
   - Team members ask similar questions repeatedly
5. **Apply the latest patterns** from instruction files, not deprecated ones
6. **Reference current examples** from the actual codebase, not outdated instruction examples
7. **Suggest deprecation** of patterns no longer used in the codebase

Copilot should treat instruction files as living documents that evolve with the codebase, not static rules set in stone.
