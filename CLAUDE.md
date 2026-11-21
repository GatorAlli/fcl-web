@AGENTS.md

The project file structure, stack, working agreements, skills table, and commands all live in
`AGENTS.md` — that file is canonical. This file only adds Claude Code-specific notes that don't
apply to other agents.

## Claude Code-only notes

- **Format-on-save is automatic.** `.claude/settings.json` registers a `PostToolUse` hook
  (`Edit|Write|MultiEdit`) that runs `.claude/hooks/format.mjs`, which Prettier-formats the
  touched file for supported extensions. Other agents must run `npx prettier --write <file>`
  manually per AGENTS.md §2(a).
- **Skills are symlinked.** `.claude/skills/<name>` are symlinks into `.agents/skills/<name>`
  (the actual installed skill content) so Claude Code can discover them. Don't edit the symlinks
  directly — edit/update skills via `npx skills add ...` against `.agents/skills`.
