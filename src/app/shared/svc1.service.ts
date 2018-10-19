import { Injectable } from '@angular/core';

let nextId = 1;

@Injectable({
  providedIn: 'root'
})
export class Svc1Service {
  id = nextId++;

  constructor() {
    if (this.id > 1) {
      throw new Error(
        'Svc1Service is already loaded. Import it in the AppModule only');
    }
  }

  public getInstanceId() {
    return this.id;
  }
}
