[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Stencil Component Starter

> This is a starter project for building a standalone Web Components using Stencil.

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than runtime tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements specification.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/stenciljs/component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the [Ionic-generated](https://ionicframework.com/) web components use the prefix `ion`.

## Using this component

There are two strategies we recommend for using web components built with Stencil.

The first step for all two of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

You can read more about these different approaches in the [Stencil docs](https://stenciljs.com/docs/publishing).

### Lazy Loading

If your Stencil project is built with the [`dist`](https://stenciljs.com/docs/distribution) output target, you can import a small bootstrap script that registers all components and allows you to load individual component scripts lazily.

For example, given your Stencil project namespace is called `my-design-system`, to use `my-component` on any website, inject this into your HTML:

```html
<script type="module" src="https://unpkg.com/my-design-system"></script>
<!--
To avoid unpkg.com redirects to the actual file, you can also directly import:
https://unpkg.com/foobar-design-system@0.0.1/dist/foobar-design-system/foobar-design-system.esm.js
-->
<my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component>
```

This will only load the necessary scripts needed to render `<my-component />`. Once more components of this package are used, they will automatically be loaded lazily.

You can also import the script as part of your `node_modules` in your applications entry file:

```tsx
import 'foobar-design-system/dist/foobar-design-system/foobar-design-system.esm.js';
```

Check out this [Live Demo](https://stackblitz.com/edit/vitejs-vite-y6v26a?file=src%2Fmain.tsx).

### Standalone

If you are using a Stencil component library with `dist-custom-elements`, we recommend importing Stencil components individually in those files where they are needed.

To export Stencil components as standalone components make sure you have the [`dist-custom-elements`](https://stenciljs.com/docs/custom-elements) output target defined in your `stencil.config.ts`.

For example, given you'd like to use `<my-component />` as part of a React component, you can import the component directly via:

```tsx
import 'foobar-design-system/my-component';

function App() {
  return (
    <>
      <div>
        <my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component>
      </div>
    </>
  );
}

export default App;
```

Check out this [Live Demo](https://stackblitz.com/edit/vitejs-vite-b6zuds?file=src%2FApp.tsx).
