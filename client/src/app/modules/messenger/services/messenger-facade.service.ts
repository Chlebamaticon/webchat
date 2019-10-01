import { Injectable } from '@angular/core';
import { Store, } from '@ngrx/store';
import uuidv4 from 'uuidv4';

import * as fromMessenger from '../store/messenger.actions';
import { State } from '../../../shared/store/root.state';
import { createPayload } from 'src/app/shared/helpers/ngrx';
import { selectMessages } from '../store/messenger.selectors';

@Injectable({
    providedIn: 'root',
})
export class MessengerFacadeService {

    messages$ = this.store.select( selectMessages );

    constructor(
        private store: Store<State>,
    ) {}

    send(message) {
        this.store.dispatch(fromMessenger.sendMessageAction(createPayload({ message })));
    }
}
