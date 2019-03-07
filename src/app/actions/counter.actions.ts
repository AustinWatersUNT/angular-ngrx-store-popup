import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Set = '[Counter Component] Set',
  Reset = '[Counter Component] Reset'
}

export class Increment implements Action {
  readonly type = CounterActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.Decrement;
}

export class Set implements Action {
  readonly type = CounterActionTypes.Set;
  constructor(public payload: number | {value: number, storeToStorage: boolean}) {}
}

export class Reset implements Action {
  readonly type = CounterActionTypes.Reset;
}

export type CounterActions = Increment | Decrement | Reset | Set;
