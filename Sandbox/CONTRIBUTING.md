# Contributing

Thank you for contributing! This guide explains the preferred workflow, coding conventions, and checklist for adding components or exercises.

## Workflow

1. Fork or branch off the main branch.
2. Create a branch with a descriptive name: `feat/<short-description>` or `fix/<short-description>`.
3. Make changes in small, focused commits.
4. Run the dev server locally and verify behavior.
5. Open a pull request with a clear description and screenshots if UI changes are involved.

## Branching & PRs

- Base branches on `main`.
- Use feature branches for new components or exercises.
- Include a short description of the implementation and any steps to test in the PR body.

## Coding conventions

- Add `"use client"` at the top of files that use hooks or browser APIs.
- Name component folders in PascalCase and use an `index.jsx` file to export the component.
- Keep components small and single-purpose.
- Use module CSS (`*.module.css`) for component-scoped styles.

## File & export pattern

- Component folder example:

```
src/component/MyComponent/
  index.jsx
  MyComponent.module.css
```

- Export default from `index.jsx` so consumers can import with `@/component/MyComponent`.

## Adding an exercise checklist

- [ ] Add folder under `src/app/exercises/<kebab-name>`
- [ ] Add `page.js` that imports `ExerciseView` and the Demo component
- [ ] If showing source code, use `getSourceCode` from `@/component/CodeBlock/CodeBlockServer`
- [ ] Verify the exercise works in dev and looks good in the sidebar (if applicable)

## Tests & verification

- There are no automated tests in this repo by default. Manually verify changes by running `npm run dev` and checking the page.

## Commit message style

- Use short, imperative commit messages: `Add debounce demo` or `Fix todo item toggle`.

## Style & linting

- The project uses basic ESLint configuration. Run the linter and fix warnings before submitting a PR.

## Questions

If you're unsure about structure or design, open an issue or ask maintainers via the pull request comments.
