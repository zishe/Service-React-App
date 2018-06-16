// import { observable, action, runInAction } from 'mobx';
// import { API } from '../Api';
import { CategoryStore } from './CategoryStore';
import { ProductStore } from './ProductStore';

export class RootStore {
  constructor() {
    this.categoryStore = new CategoryStore(this)
    this.productStore = new ProductStore(this)
  }
}
