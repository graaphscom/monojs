# Installation

## Installation for a library project

1. Add dependencies:

```bash
pnpm add -D @graaphs/eslint-config eslint prettier typescript
```

2. Add the `.eslintrc.js` file to the root of your project with the following contents:

```javascript
module.exports = {
    root: true,
    extends: ["@graaphs/eslint-config"],
};
```

3. Add`scripts` to your `package.json`:

```json
{
  "scripts": {
    "lint": "TIMING=1 eslint \"src/**/*.ts*\""
  }
}
```

## Installation for a Next.js project
Follow the same steps as for a library project and:
1. Add dependency:
```bash
pnpm add -D @next/eslint-plugin-next
```
2. Change `extends` property in your `.eslintrc.js`:
```diff
module.exports = {
    root: true,
-    extends: ["@graaphs/eslint-config"],
+    extends: ["@graaphs/eslint-config", "plugin:@next/next/core-web-vitals"],
};
```

   
