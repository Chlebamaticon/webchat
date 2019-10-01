import * as fromMessenger from 'src/app/modules/messenger/store/messenger.state';

export interface State {
    [ fromMessenger.featureKey ]?: fromMessenger.State;
}

export const initialState: State = {
};
