import stencilSSR from '@stencil/ssr/next';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default stencilSSR({
  //@ts-ignore
  module: import('stencilssr-react'),
  from: 'stencilssr-react',
  hydrateModule: import('stencilssr/hydrate'),
  serializeShadowRoot: {
    default: 'scoped',
  },
})(nextConfig);
