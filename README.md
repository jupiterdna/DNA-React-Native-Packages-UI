# Monorepo for DNA React Native Playbook Packages

This is an official starter for this Monorepo Packages.

## Using this example

Run the following command:


### Build monorepo
```sh
yarn build
```

### Run the apps (Web and Native) 
```sh
yarn dev
```

### Change changeset for packages
```sh
npx changeset 
```

## What's inside?

This Monorepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/) but we experimentally using [react-native-cli](https://reactnative.dev/docs/environment-setup)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)


Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

Additional tools already setup for you:

- [react-native-cli](https://reactnative.dev/docs/)
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
- [changeset](https://github.com/changesets/changesets) for multi-package versioning
