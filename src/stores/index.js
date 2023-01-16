import CounterStore from './counter';

export default class IndexStore {
  constructor() {
    this.counter = new CounterStore(this); // this 필수 ***현재 루트 스토어가 무엇인지 알 수 있도록
  }
}
