# Development Tools Integration

## Summary

This document describes how to leverage external tools and services for enhanced development workflows, including documentation retrieval and browser-based feature verification.

## Documentation Retrieval

### Context7 MCP Server

When users request code examples, setup instructions, configuration steps, or library/API documentation, use the Context7 MCP server to retrieve accurate, up-to-date information.

**Use Context7 for:**
- Library documentation (React, Next.js, Tailwind, etc.)
- API references
- Setup and configuration guides
- Code examples from official sources
- Best practices from documentation
- Migration guides
- Framework-specific patterns

**Example Scenarios:**
- "How do I configure React Hook Form with Zod?"
- "Show me examples of Next.js server actions"
- "What are the available props for Framer Motion?"
- "How do I set up authentication with NextAuth?"

**Benefits:**
- Always get current documentation
- Avoid outdated or incorrect examples
- Reference official sources
- Ensure best practices

## Browser Verification

### Playwright MCP Server

Use the Playwright MCP server to verify features in the browser and ensure implemented functionality works as expected.

**Use Playwright for:**
- Testing UI implementations
- Verifying responsive design
- Checking interactive features
- Validating forms and inputs
- Testing navigation flows
- Checking console for errors
- Verifying accessibility features
- Testing dark mode functionality

**Verification Checklist:**
1. **Visual Verification** - Does the UI render correctly?
2. **Console Errors** - Are there any JavaScript errors?
3. **Responsive Design** - Does it work on different screen sizes?
4. **Interactivity** - Do buttons, forms, and links work?
5. **Navigation** - Can users navigate the app?
6. **Dark Mode** - Does dark mode switch properly?
7. **Accessibility** - Are ARIA attributes present and functional?

**Example Workflow:**
```typescript
// After implementing a new feature:
// 1. Start the development server
// 2. Use Playwright to navigate to the page
// 3. Interact with the feature
// 4. Check for console errors
// 5. Verify responsive behavior
// 6. Test dark mode
```

## Development Workflow Integration

### When to Use Tools

**During Development:**
- Use Context7 when implementing new features with unfamiliar libraries
- Use Playwright to test features as you build them
- Verify each major component before moving to the next

**During Code Review:**
- Use Playwright to verify pull request changes
- Check for console errors in new implementations
- Validate responsive design and accessibility

**During Debugging:**
- Use Context7 to verify correct API usage
- Use Playwright to reproduce and diagnose issues
- Check browser console for runtime errors

## Best Practices

### Documentation Lookup

**Do:**
- ✅ Request specific documentation sections
- ✅ Ask for code examples relevant to your use case
- ✅ Verify version-specific features
- ✅ Check for migration guides when upgrading

**Don't:**
- ❌ Assume API signatures without checking
- ❌ Use outdated patterns from memory
- ❌ Skip documentation for complex features
- ❌ Ignore official best practices

### Browser Testing

**Do:**
- ✅ Test on multiple viewport sizes
- ✅ Check console for errors and warnings
- ✅ Verify both light and dark modes
- ✅ Test keyboard navigation
- ✅ Validate form submissions
- ✅ Check network requests in DevTools

**Don't:**
- ❌ Assume features work without testing
- ❌ Ignore console warnings
- ❌ Test only on desktop
- ❌ Skip accessibility checks
- ❌ Forget to test error states

## Integration Examples

### Example 1: Implementing a New Form

```typescript
// 1. Use Context7 to get React Hook Form + Zod documentation
// 2. Implement the form following best practices
// 3. Use Playwright to:
//    - Verify form renders correctly
//    - Test validation by submitting invalid data
//    - Test successful submission
//    - Check for console errors
//    - Verify accessibility
```

### Example 2: Adding Animation

```typescript
// 1. Use Context7 to get Framer Motion documentation
// 2. Implement animations following examples
// 3. Use Playwright to:
//    - Verify animations trigger correctly
//    - Test on different screen sizes
//    - Check performance in console
//    - Verify reduced motion preferences
```

### Example 3: Debugging an Issue

```typescript
// 1. Use Playwright to reproduce the issue
// 2. Check console for error messages
// 3. Use Context7 to look up error messages or API docs
// 4. Fix the issue
// 5. Use Playwright to verify the fix
```

## Tool Configuration

### Available Tools

**Context7:**
- Documentation search and retrieval
- Code examples
- API references
- Best practices

**Playwright:**
- Browser automation
- UI testing
- Console monitoring
- Screenshot capture
- Network request inspection

## How Copilot Should Use This

When assisting with development in this repository, Copilot should:

1. **Use Context7** to retrieve documentation when:
   - Implementing features with libraries or frameworks
   - User asks about specific APIs or configurations
   - Uncertain about current best practices
   - Need code examples for complex features
   - Verifying library version compatibility

2. **Use Playwright** to verify:
   - New UI implementations render correctly
   - Interactive features work as expected
   - No console errors are present
   - Responsive design works across breakpoints
   - Dark mode functions properly
   - Forms validate and submit correctly
   - Navigation flows work end-to-end

3. **Follow this workflow**:
   - Research with Context7 → Implement → Verify with Playwright → Iterate

4. **Suggest tool usage** when:
   - User is implementing a new feature
   - Debugging an issue
   - Uncertain about API usage
   - Need to verify functionality

5. **Recommend testing** after:
   - Creating new components
   - Modifying existing features
   - Adding interactivity
   - Implementing forms
   - Changing responsive layouts

These tools ensure code quality, correctness, and adherence to best practices throughout the development process.
