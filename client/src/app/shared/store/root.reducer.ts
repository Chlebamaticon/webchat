import { combineReducers, Action } from '@ngrx/store';

import { State, initialState } from './root.state';

const combinedReducers = combineReducers<State>({});

export function reducer(state: State | undefined, action: Action) {
    return combinedReducers(state, action);
}
