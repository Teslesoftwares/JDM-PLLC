import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      /**
       * The dashboard is built from client components that read this app's own
       * API routes; there is no server-state library (React Query/SWR) and no
       * RSC data layer for these screens. Each page fetches in a `useEffect`
       * and stores the response in state.
       *
       * The rule reports `void fetchX()` inside an effect, because it cannot
       * see through the call to confirm the `setState` happens after an
       * `await` rather than synchronously in the effect body. It was verified
       * that the state updates these effects perform are all inside promise
       * callbacks.
       *
       * The genuinely synchronous cases this rule is designed to catch *were*
       * real and have been fixed rather than suppressed: the patient-search
       * effects in `appointments/new`, `billing/invoices/new` and
       * `consultations/new` used to call `setPatients([])` directly in the
       * effect body, and `appointments/new` used to call `setDoctors([])` when
       * no branch was selected. The first now clears from the input's
       * onChange handler; the second is derived at render.
       *
       * Re-enable this rule if a server-state layer is introduced, at which
       * point the effects below should be replaced by it.
       */
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    rules: {
      /**
       * A leading underscore marks a binding that is deliberately unused. The
       * API routes rely on this to strip a client-supplied foreign key from an
       * update body, e.g. `const { patientId: _patientId, ...rest } = body`,
       * where the field must be read out of the object but never reassigned.
       */
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
    },
  },
  {
    // Build-time Node scripts run as CommonJS (`node scripts/<name>.cjs`) so they
    // work without a module-type flag in package.json. `require()` is correct
    // here; the app itself is ESM and stays covered by the rule above.
    files: ["scripts/**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    // AvatarImage is a generic pass-through primitive: its public props are
    // `React.ImgHTMLAttributes`, so `src` and `alt` are supplied by whoever
    // renders it (see auth-nav.tsx, which passes the user's name as alt).
    // Hard-coding next/image here would change that component's contract and
    // force callers to supply width/height.
    files: ["src/components/ui/avatar.tsx"],
    rules: {
      "@next/next/no-img-element": "off",
      "jsx-a11y/alt-text": "off",
    },
  },
]);

export default eslintConfig;
