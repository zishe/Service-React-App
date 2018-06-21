import { observable, action, runInAction } from 'mobx';
import { API } from '../Api';

export class ProductStore {

  @observable products = [];
  @observable isLoading = true;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  fetchAll = async () => {
    const products = await API.getAll('products');

    runInAction('Load all products', () => {
      console.log(products);
      this.products = products;
      this.isLoading = false;
    });
  }

  @action
  fetchPopular = async () => {
    const products = await API.getAll('products');

    runInAction('Load all products', () => {
      console.log(products);
      this.products = products;
      this.isLoading = false;
    });
  }
}
