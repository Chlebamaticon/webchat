import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { MessengerService } from '../services/messenger.service';
import * as fromMessenger from './messenger.actions';
import { createEffect, Actions, ofType } from '@ngrx/effects';

@Injectable()
export class MessengerEffects {
    onReceivedMessage$ = createEffect(() => this.messengerService.message$.pipe(
        map(message => {
            const payload = {
                isClientMessage: this.messengerService.isClient(message.senderId),
                ...message,
            };

            return fromMessenger.popMessageAction({ payload });
        })
    ));

    onSendMessage$ = createEffect(() => this.actions.pipe(
        ofType(fromMessenger.sendMessageAction),
        tap(({ payload: { message } }) => this.messengerService.send(message)),
    ), { dispatch: false });

    constructor(
        private messengerService: MessengerService,
        private actions: Actions
    ) {}
}