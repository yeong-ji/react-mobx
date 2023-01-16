import { observable, action, makeAutoObservable } from 'mobx';
//  import { makeAutoObservable } from 'mobx-react';

export default class CounterStore {
  @observable number = 0;

  constructor() {
    // this.root = root;
    makeAutoObservable(this);
  }

  @action increase = () => {
    this.number++;
    console.log('number + :::', this.number);
  };

  @action decrease = () => {
    this.number--;
  };
}
