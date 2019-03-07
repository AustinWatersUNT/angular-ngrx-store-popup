import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './counter.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
};

function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['counter'],
    rehydrate: true,
    storageKeySerializer: (key) => (window.sessionStorage.getItem('tabId') + '_' + key)})(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ?  [localStorageSyncReducer]
  :  [localStorageSyncReducer];
