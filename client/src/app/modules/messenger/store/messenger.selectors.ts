import { createSelector } from '@ngrx/store';
import { featureKey } from './messenger.state';

export const selectMessenger = root => root[featureKey];

export const selectMessages = createSelector(
    selectMessenger,
    ({ messages }) => messages,
);
