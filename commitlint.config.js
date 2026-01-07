export default {
  extends: ["@commitlint/config-conventional"],
  // Keep conventional commit type validation but allow JIRA format in subject
  "type-empty": [2, "never"],
  "subject-empty": [2, "never"],

  // Standard conventional commit types
  "type-enum": [
    2,
    "always",
    [
      "feat", // New feature
      "fix", // Bug fix
      "docs", // Documentation
      "style", // Code style
      "refactor", // Code refactoring
      "perf", // Performance improvement
      "test", // Tests
      "chore", // Build process or auxiliary tool changes
      "ci", // CI configuration
      "build", // Build system changes
      "revert", // Revert previous commit
    ],
  ],
};
