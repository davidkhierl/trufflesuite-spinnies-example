# Reproduce issue

from PR https://github.com/trufflesuite/spinnies/pull/2

### Steps

```bash
yarn install

yarn build

yarn start
```

`yarn build` will fail unless manually fix the type to:

```typescript
// as suggested from the error logs
type Color = typeof ChalkColor | "none";
```

also this example uses `chalk` to demonstrate. if you're wondering it might be the issue, you can uninstall the package and will still render the same error if the fix above is not applied.
