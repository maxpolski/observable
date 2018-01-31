class MObservable {
  constructor(func) {
    this._func = func;
    this._funcWasCalled = false;
    this._observer = {
      next: (value) => {
        this._listeners.forEach(l => l(value));
      },
    };
    this._observer.next = this._observer.next.bind(this);
    this._listeners = [];
  }

  subscribe(listener) {
    this._listeners.push(listener);

    if (!this._funcWasCalled) {
      this.unsubscribe = this._func(this._observer);
      this._funcWasCalled = true;
    }
  }

  unsubscribe() {
    console.log('Hmmm... seems unsubscribe functionality was not implemented');
  }
}
