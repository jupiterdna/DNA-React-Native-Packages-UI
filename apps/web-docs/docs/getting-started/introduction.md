---
sidebar_position: 1
---

# Intro

Welcome to the cutting-edge world of DNA React Native Packages, a revolutionary library designed to elevate your React Native app development experience. Our library is meticulously crafted to empower developers with a versatile collection of components that seamlessly integrate into your projects, bringing a new level of functionality and aesthetics.

## Quick sample

Here's a quick example to get you started, **it's literally all you need:**

```ts
import { DNAButton } from '@rndna/button';

const App = () => {
  return <DNAButton title="Hello World" />;
};
```

## Using themed components

A unified theme seamlessly threads through the components within this library. With a centralized hub, developers can efficiently modify the color palette across all components. While this functionality greatly benefited library developers, it became apparent that end-users also sought an accessible means to leverage this feature.

But why limit the centralization to just colors? What if we could extend this convenience to encompass the properties of every component? Thus, the concept of theming with React Native Elements was conceived!
```jsx
import { DNAButton } from '@rndna/button';
import {
  ThemeProvider,
} from '@rndna/theme-provider';

const MyApp = () => {
  return (
    <ThemeProvider>
      <DNAButton title="Hey!" />
    </ThemeProvider>
  );
};
```

For personalized theme customization or integration into your own components, please refer to the documentation on [Customization](/docs/getting-started/customization).