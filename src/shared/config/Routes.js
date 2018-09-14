export const routes = [
  {
    name: 'home',
    pattern: '/'
  },
  {
    name: 'product',
    pattern: '/products/:id',
    onEnter: (_fromState, toState, routerStore) => {
      const { rootStore: { productStore } } = routerStore;
      productStore.loadProduct(toState.params.id);
      // return Promise.resolve();
    }
  },
  {
    name: 'notFound',
    pattern: '/not-found'
  }
];

// export const routes = [
//   {
//     name: 'home',
//     path: '/'
//   },
//   {
//     name: 'product',
//     path: '/products/:id',
//   },
//   {
//     name: 'notFound',
//     path: '/not-found'
//   }
// ]

// import { createRouter } from 'router5';
// import loggerPlugin from 'router5/plugins/logger';
// import browserPlugin from 'router5/plugins/browser';
// import { mobxPlugin, RouterStore } from 'mobx-router5';

// // Instantiate it directly or extend the class as you wish before invoking new
// const routerStore = new RouterStore();

// export default function configureRouter(useLoggerPlugin = false) {
//   const router = createRouter(routes, {defaultRoute: 'home'})
//     .usePlugin(mobxPlugin(routerStore)) // Important: pass the store to the plugin!
//     .usePlugin(browserPlugin({useHash: true}));

//   if (useLoggerPlugin) {
//     router.usePlugin(loggerPlugin) ;
//   }

//   return router;
// }
