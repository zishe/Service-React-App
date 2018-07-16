import { observable, action, runInAction } from 'mobx';
import { API } from '../Api';

export class ProductStore {

  @observable products = [];
  @observable modifyingProduct = {};
  @observable modificationData = {};
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

  @action
  fetchById = async (id) => {
    const product = await API.get('products', id);

    runInAction('Load all products', () => {
      console.log(product);
      this.modifyingProduct = product;
    });
  }

  @action
  setModifyingProduct = (id) => {
    this.modifyingProduct = this.products.find((x) => x.id === id);
    return this.modifyingProduct;
  }

  @action
  setModifyingProductData = (obj) => {
    console.log(obj);

    Object.keys(obj).forEach((attr) => {
      console.log(attr);

      this.modificationData[attr] = obj[attr];
    })
    return this;
  }
}
