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
    }
  },
  {
    name: 'newTask',
    pattern: '/new-task'
  },
  {
    name: 'findTask',
    pattern: '/find-task'
  },
  {
    name: 'notFound',
    pattern: '/not-found'
  }
];
