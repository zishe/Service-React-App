import { observable } from "mobx";


export class UIStore {
  @observable shoppingCartOpen = true;
  @observable productModificationOpen = false;

  constructor() {

  }
}
