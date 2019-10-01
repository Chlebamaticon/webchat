import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromMessenger from './store/messenger.state';
import { reducer } from './store/messenger.reducer';
import { MessengerEffects } from './store/messenger.effects';
import { MessengerRoutingModule } from './messenger-routing.module';
import { MessengerComponent } from './components/messenger/messenger.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        MessengerComponent,
        TextfieldComponent,
        MessageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MessengerRoutingModule,
        StoreModule.forFeature(fromMessenger.featureKey, reducer),
        EffectsModule.forFeature([ MessengerEffects ]),
    ],
    providers: [],
})
export class MessengerModule {}
