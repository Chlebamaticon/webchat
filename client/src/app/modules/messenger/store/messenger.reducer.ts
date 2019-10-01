import { State, initialState } from './messenger.state'
import { createReducer, combineReducers, Action, on, } from '@ngrx/store';
import * as fromMessenger from './messenger.actions';

const messengerReducer = createReducer(
    initialState,
    on(fromMessenger.popMessageAction, (state, { payload }) => ({ ...state, messages: [ ...state.messages, payload ]})),
);

export function reducer(state: State | undefined, action: Action) {
    return messengerReducer(state, action);
}
