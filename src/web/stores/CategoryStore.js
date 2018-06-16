import { observable, action, runInAction } from 'mobx';
import { API } from '../Api';

export class CategoryStore {

  @observable categories = [];
  @observable isLoading = true;

  constructor(rootStore) {
    this.rootStore = rootStore
    this.loadCategories()
  }

  @action
  loadCategories = async () => {
    const categories = await API.getAll('categories')

    runInAction('Load Categories', () => {
      console.log(categories)
      this.categories = categories
      this.isLoading = false
    });
  }
}
