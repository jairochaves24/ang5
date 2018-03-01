import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  public goals1 = new BehaviorSubject<any>(['Valor inicial', 'Otro valor']);
  public goal1 = this.goals1.asObservable();
  constructor() { }

  changeGoal(goal1) {
    this.goals1.next(goal1);
  }
}
