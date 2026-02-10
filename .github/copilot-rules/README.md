# GitHub Copilot Repository Instructions

This directory contains GitHub Copilot-optimized repository instructions that define coding standards, architectural patterns, and best practices for this project.

## Overview

These instructions follow GitHub's official [Repository Instructions specification](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions) and replace the previous Cursor-style `.mdc` files with clean, structured Markdown optimized for GitHub Copilot.

## Available Instructions

### Core Guidelines

**[repository-instructions.md](repository-instructions.md)**
- File organization and naming conventions
- Content structure and formatting
- Writing effective instructions
- Maintenance guidelines

### Framework and Technology

**[nextjs.md](nextjs.md)**
- Next.js App Router best practices
- React patterns and hooks
- Code organization and structure
- Error handling and validation
- Accessibility and security

**[typescript-style.md](typescript-style.md)**
- TypeScript coding conventions
- Parameter passing patterns
- Type safety rules
- Import organization
- Functional programming practices

**[tech-stack.md](tech-stack.md)**
- Complete dependency list with versions
- Framework and library usage
- Integration patterns
- Best practices for each technology

### UI and Styling

**[ui-components.md](ui-components.md)**
- Shadcn UI component usage
- Design system primitives
- Component composition
- Form integration
- Accessibility standards

**[tailwind-styling.md](tailwind-styling.md)**
- Tailwind CSS conventions
- Class organization
- Responsive design patterns
- Color system and dark mode
- Layout techniques

**[landing-components.md](landing-components.md)**
- Landing page component library
- Marketing page patterns
- Section composition
- Data-driven approach

### Architecture and Organization

**[project-structure.md](project-structure.md)**
- Directory structure
- File organization
- Module boundaries
- Import patterns
- Configuration management

### Process and Workflow

**[continuous-improvement.md](continuous-improvement.md)**
- Instruction evolution guidelines
- Pattern recognition
- Update triggers
- Deprecation process
- Quality standards

**[tools.md](tools.md)**
- Development tools integration
- Documentation retrieval (Context7)
- Browser verification (Playwright)
- Testing workflows

## How to Use

### For Developers

When working in this repository:
1. Reference these instructions for coding standards
2. Follow the documented patterns and conventions
3. Suggest updates when patterns evolve
4. Keep instructions in sync with the codebase

### For GitHub Copilot

GitHub Copilot uses these instructions to:
- Understand project conventions
- Generate consistent code
- Suggest appropriate patterns
- Maintain architectural standards
- Follow established best practices

## Migration from Cursor

This directory replaces the previous `.cursor/rules/` system with GitHub Copilot-native instructions:

### Changes Made

1. **Format**: Converted from `.mdc` to `.md`
2. **Location**: Moved from `.cursor/rules/` to `copilot-rules/`
3. **Syntax**: Removed Cursor-specific syntax and metadata
4. **Structure**: Reorganized following GitHub's Repository Instructions specification
5. **Tone**: Rewritten for clarity, directness, and actionability

### File Mapping

| Original Cursor File | New Copilot File |
|---------------------|------------------|
| `cursor-rules.mdc` | `repository-instructions.md` |
| `nextjs.mdc` | `nextjs.md` |
| `project-structure.mdc` | `project-structure.md` |
| `landing-components.mdc` | `landing-components.md` |
| `self-improve.mdc` | `continuous-improvement.md` |
| `tailwind-styling.mdc` | `tailwind-styling.md` |
| `tools.mdc` | `tools.md` |
| `tech-stack-dependencies.mdc` | `tech-stack.md` |
| `ui-components.mdc` | `ui-components.md` |
| `typescript-style.mdc` | `typescript-style.md` |

## Maintenance

### Keeping Instructions Current

- **Regular Review**: Update instructions when patterns evolve
- **Version Updates**: Sync with dependency upgrades
- **Pattern Recognition**: Document emerging patterns
- **Deprecation**: Remove outdated information
- **Cross-Reference**: Maintain links between related instructions

See [continuous-improvement.md](continuous-improvement.md) for detailed maintenance guidelines.

## Contributing

When updating instructions:
1. Follow the structure defined in [repository-instructions.md](repository-instructions.md)
2. Use clear, actionable language
3. Provide code examples (good and bad)
4. Include "How Copilot Should Use This" section
5. Keep cross-references updated

## External References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Repository Instructions Guide](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Last Updated**: February 2026  
**Copilot Compatibility**: GitHub Copilot for VS Code
