import { observable, action, runInAction, computed } from 'mobx';
import { API } from '../Api';

export class ShoppingCartStore {

  @observable products = [];
  @observable paid = true;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  // @computed get productCount(product) {
  //   return this.products.filter(item => item.id === product.id).length;
  // }


  @computed get size() {
    return this.products.length;
  }

  @action
  addProduct = (product) => {
    this.products.push(product);
  }

  @action
  removeProduct = (product) => {
    this.products = this.products.filter(item => item !== product)
  }
}
