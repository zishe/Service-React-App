import { observable, action, runInAction } from 'mobx';
import { API } from '../Api';

export class ProductStore {

  @observable products = [];
  @observable isLoading = true;

  constructor(rootStore) {
    this.rootStore = rootStore
    this.loadProducts()
  }

  @action
  loadProducts = async () => {
    const products = await API.getAll('products')

    runInAction('Load products', () => {
      console.log(products)
      this.products = products
      this.isLoading = false
    });
  }
}
