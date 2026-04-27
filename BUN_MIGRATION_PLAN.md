# Appium to Bun Migration Plan

This document outlines the strategic plan to refactor the Appium monorepo to run natively on the **Bun** runtime. The goal is to leverage Bun's superior performance in process management (`Bun.spawn`), file I/O (`Bun.file`), and overall execution speed.

## Phase 1: Environment & Dependency Alignment
*Estimated Effort: Low*

- [x] **Workspace Management**: 
    - Use `pnpm` with `pnpm-workspace.yaml` for stable workspace symlinking (crucial for `tsc`).
    - Use `bun` as the primary runtime for execution (`bun run start`).
- [x] **Tooling Update**:
    - Update `package.json` engines to include `bun`.
    - Create `bunfig.toml` for runtime configuration.
- [ ] **GitHub Actions**:
    - Add `oven-sh/setup-bun` to CI workflows to support parallel testing in both Node and Bun during the transition.

## Phase 2: Core Support Layer (`@appium/support`)
*Estimated Effort: Medium*

This package is the foundation. Migrating it first ensures all other packages benefit from Bun's native APIs.

- [x] **File System (`fs.ts`)**: 
    - Replace `node:fs/promises` wrappers with `Bun.file()` and `Bun.write()`.
- [x] **Process Management (`process.ts`)**:
    - Refactor internal wrappers to prefer `Bun.spawn` over `node:child_process`.
- [x] **Hashing & Crypto**:
    - Use `Bun.hash` for internal file integrity checks instead of `node:crypto`.

## Phase 3: Process Execution Optimization (`teen_process`)
*Estimated Effort: High*

Appium's performance is heavily tied to how fast it can execute system commands (ADB, xcrun, etc.).

- [x] **Refactor `teen_process` dependency**:
    - Since `teen_process` is a separate package, create a "Bun-native" bridge or monkey-patch it to use `Bun.spawn`.
    - `Bun.spawn` is significantly faster than `child_process.exec` because it avoids the overhead of a subshell where possible.

## Phase 4: Server Optimization (`@appium/base-driver`)
*Estimated Effort: Medium*

Appium currently uses `Express`. Bun has built-in Express compatibility, but the ultimate goal is `Bun.serve`.

- [ ] **Step 1: Compatibility Mode**: Ensure the current Express setup runs without issues on `bun`.
- [ ] **Step 2: Native Transition**: Evaluate migrating the core listener in `packages/base-driver/lib/express/server.ts` to `Bun.serve` for faster HTTP handling.

## Phase 5: Test Suite Migration
*Estimated Effort: High*

- [ ] **Test Runner**:
    - Transition from `mocha` to `bun test`.
    - Rewrite `mocha` hooks (before/after) to `bun test` equivalents.
- [ ] **Assertions**:
    - `chai` can still be used, but `expect` from `bun test` is faster and built-in.

## Phase 6: Main Entry Point & CLI (`appium`)
*Estimated Effort: Medium*

- [x] **Bootstrap Refactor**:
    - Update `packages/appium/index.js` to detect the Bun runtime.
    - Ensure dynamic loading of drivers/plugins works via Bun's `import()` (which is significantly faster than Node's).

---

## Performance Metrics & Goals
The success of this refactor will be measured by:
1. **Server Start Time**: Goal < 500ms.
2. **Session Creation Latency**: Goal 20% reduction.
3. **Test Execution Time**: Goal 30% reduction in CI.

## Risks & Mitigations
- **Native Modules**: Some Appium dependencies might rely on C++ addons. *Mitigation: Bun's N-API support is mature, but we will maintain a Node.js fallback.*
- **Plugin Ecosystem**: Third-party drivers might still expect a Node environment. *Mitigation: Ensure the `AppiumDriver` provides a compatibility layer for environment globals.*
