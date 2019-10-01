import { createAction, props } from '@ngrx/store';
import { Payload } from 'src/app/shared/typings/ngrx.typings';

export const popMessageAction = createAction(
    '[Messenger] Pop message',
    props<Payload<{ uuid: string, message: string }>>(),
);

export const sendMessageAction = createAction(
    '[Messenger] Send message',
    props<Payload<{ message: string }>>(),
);
