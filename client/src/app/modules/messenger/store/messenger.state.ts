import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Message } from '../models/message.model';

export const featureKey = 'messenger';

export interface State {
    messages: Message[];
}

export const initialState: State = {
    messages: [],
};
