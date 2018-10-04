export const routes = [
  {
    name: 'home',
    pattern: '/cooking'
  },
  {
    name: 'product',
    pattern: '/products/:id',
    onEnter: (_fromState, toState, routerStore) => {
      const { rootStore: { productStore } } = routerStore;
      productStore.loadProduct(toState.params.id);
    }
  },
  {
    name: 'task',
    pattern: '/'
  },
  {
    name: 'notFound',
    pattern: '/not-found'
  }
];
