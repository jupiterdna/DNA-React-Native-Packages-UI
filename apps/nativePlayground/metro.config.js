// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */

// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// Learn more https://docs.expo.io/guides/customizing-metro
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const config = {
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../..'),
  ],
};

// // 1. Watch all files within the monorepo
// config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages, and in what order
// config.resolver.nodeModulesPaths = [
//   path.resolve(projectRoot, 'node_modules'),
//   path.resolve(workspaceRoot, 'node_modules'),
// ];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
// config.resolver.disableHierarchicalLookup = true;

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
