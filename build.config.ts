import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'index',
  ],
  clean: false,
  declaration: true,
  externals: [
    'vite',
  ],
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
