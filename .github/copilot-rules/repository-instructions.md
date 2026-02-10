# Repository Instructions Management

## Summary

This document provides guidelines for organizing and maintaining GitHub Copilot repository instructions. It establishes conventions for file structure, naming, content organization, and best practices to ensure consistent and effective AI assistance across the project.

## File Organization

### Directory Structure

All repository instructions must be placed in the `/copilot-rules/` directory:

```
project-root/
└── copilot-rules/
    ├── repository-instructions.md
    ├── nextjs.md
    ├── typescript-style.md
    └── ...
```

### Naming Conventions

- Use **kebab-case** for all filenames
- Use `.md` extension for all instruction files
- Make names **descriptive** and purpose-driven
- Examples: `typescript-style.md`, `tailwind-styling.md`, `project-structure.md`

## Content Structure

### Required Sections

Each instruction file should include:

1. **Title**: Clear heading describing the rule's purpose
2. **Summary**: Brief overview of what the instruction governs
3. **Rules/Guidelines**: Specific, actionable instructions
4. **Examples**: Code samples showing correct and incorrect patterns
5. **How Copilot Should Use This**: Explicit guidance for AI behavior

### Example Format

```markdown
# [Topic Name]

## Summary
Brief description of what this instruction covers.

## Guidelines
- Specific rule or pattern
- Another important guideline
- Implementation detail

## Examples

✅ **Good**
\`\`\`typescript
// Correct implementation
\`\`\`

❌ **Bad**
\`\`\`typescript
// Incorrect implementation
\`\`\`

## How Copilot Should Use This
Copilot should apply these rules when [specific context]. Always prioritize [key principle].
```

## Writing Effective Instructions

### Clarity and Specificity

- Write clear, actionable instructions
- Avoid ambiguous language
- Be specific about when rules apply
- Provide concrete examples

### Code Examples

Always include code examples demonstrating:
- ✅ Correct implementation
- ❌ Incorrect implementation
- Context-specific usage

Example:

```typescript
// ✅ Good: Use named parameters pattern
function processUser({ id, name }: { id: string; name: string }) {
  return { id, displayName: name };
}

// ❌ Bad: Positional parameters
function processUser(id: string, name: string) {
  return { id, displayName: name };
}
```

### File References

When referencing project files, use relative paths:
- `components/shared/ui/button.tsx`
- `app/layout.tsx`
- `data/config/site.settings.js`

## Content Categories

Organize instructions by purpose:

- **Code Style**: `typescript-style.md`, `tailwind-styling.md`
- **Architecture**: `project-structure.md`
- **Framework Usage**: `nextjs.md`, `ui-components.md`
- **Tech Stack**: `tech-stack.md`
- **Process**: `continuous-improvement.md`

## Best Practices

### Instruction Creation Checklist

- [ ] File placed in `/copilot-rules/` directory
- [ ] Filename uses kebab-case with `.md` extension
- [ ] Includes clear title and summary
- [ ] Contains specific, actionable guidelines
- [ ] Provides both good and bad examples
- [ ] References relevant project files
- [ ] Follows consistent Markdown formatting
- [ ] Includes "How Copilot Should Use This" section

### Maintenance Guidelines

- **Review Regularly**: Keep instructions current with codebase changes
- **Update Examples**: Ensure code samples reflect actual project patterns
- **Cross-Reference**: Link related instructions together
- **Document Changes**: Update instructions when patterns evolve
- **Remove Outdated**: Delete or mark deprecated patterns

## Forbidden Practices

**Never:**
- Reference Cursor IDE or `.mdc` files
- Use Cursor-specific syntax or commands
- Place instruction files outside `/copilot-rules/`
- Create files without clear purpose
- Include IDE-specific metadata
- Use ambiguous or vague language

## How Copilot Should Use This

When assisting with code in this repository, Copilot should:

1. **Follow all guidelines** in the `/copilot-rules/` directory
2. **Prioritize consistency** with existing patterns shown in examples
3. **Apply context-specific rules** based on file type and location
4. **Reference examples** when suggesting implementations
5. **Maintain the established** code style, architecture, and conventions
6. **Suggest improvements** that align with documented best practices
7. **Ask for clarification** when instructions conflict or are unclear

Copilot should treat these instructions as the authoritative source for project conventions, coding standards, and architectural decisions.
