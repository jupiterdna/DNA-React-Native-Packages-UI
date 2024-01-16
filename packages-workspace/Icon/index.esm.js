// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

module.exports = new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `Importing from \`@rndna/icons\` directly is not supported. Please import from either \`@rndna/icons/solid\`, or \`@dnaicons/icons/outline\` instead.`
      )
    }
  }
)
