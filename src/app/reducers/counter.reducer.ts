import { CounterActionTypes, CounterActions } from '../actions/counter.actions';

export interface CounterState {
  count: number;
  storeToStorage: boolean;
}

export const initialState: CounterState = {
  count: 0,
  storeToStorage: false
};

export function reducer(state = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return { ...state, count: state.count + 2, storeToStorage: true };
    case CounterActionTypes.Decrement:
      return { ...state, count: state.count - 1, storeToStorage: true };
    case CounterActionTypes.Set:
      const count = typeof(action.payload) === 'number' ? action.payload : action.payload.value;
      const storeToStorage = typeof(action.payload) === 'number' ? false : action.payload.storeToStorage;
      return { ...state, count: count, storeToStorage: storeToStorage };
    default:
      return state;
  }
}
