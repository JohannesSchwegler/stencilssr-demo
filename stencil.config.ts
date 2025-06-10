import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencilssr',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
    },
    reactOutputTarget({
      outDir: 'frameworks/react/src/stencil-generated',
      serializeShadowRoot: 'declarative-shadow-dom',
      hydrateModule: 'stencilssr/hydrate',
    }),
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
