<img src="https://xxx-files.ggc.team/oss/if-component/if-component-readme.png" width="100%" title="Logo">

### Install it
```🤏
yarn add @kanzitelli/if-component
```

### Use it
```tsx
import { If } from '@kanzitelli/if-component';

class OrdersScreen = () => {
  return (
    <>
      <If _={loading}
      _then={<LoadingIndicator />} />
    </>
  )
}
```
