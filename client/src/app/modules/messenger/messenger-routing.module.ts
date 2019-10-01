import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessengerComponent } from './components/messenger/messenger.component';

const routes: Routes = [
    {
        path: '',
        component: MessengerComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessengerRoutingModule { }
