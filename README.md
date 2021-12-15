<img src="https://xxx-files.ggc.team/oss/if-component/if-component-readme.png" width="100%" title="Logo">

### Install it

```
yarn add @kanzitelli/if-component
```

### Use it

```tsx
import {If} from '@kanzitelli/if-component';

class OrdersScreen = () => {
  return (
    <>
      <If _={loading}
      _then={<LoadingIndicator />}
      _else={<SomethingElse />} />
    </>
  )
}
```

### Expo Web

Since `if-component` uses Reanimated 2, we need its babel plugin to be applied. Expo Web doesn't transpile modules by default, so we'll need to tell it to transpile the library.

1. Install `@expo/webpack-config`:

```
yarn add -D @expo/webpack-config
```

2. Create `webpack.config.js` in the root of your project:

```
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: { dangerouslyAddModulePathsToTranspile: ['@kanzitelli/if-component'] },
    },
    argv
  )

  return config
}
```

Don't forget to add `webpack.config.js` into `tsconfig.json` under `exclude` section, if needed.

### TS lib starter

```bash
> git clone https://github.com/kanzitelli/if-component rn-lib
> cd rn-lib && rm -rf .git
> yarn
```

Don't forget to change your lib's name in `package.json` and check other scripts.
