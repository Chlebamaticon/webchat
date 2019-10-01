import { NgModule, ModuleWithProviders, forwardRef } from '@angular/core';

import { SocketConfig } from './providers/socket-config.provider';
import { ISocketConfig } from './model/socket.interface';

@NgModule({
    imports: [],
})
export class SocketModule {
    static forRoot(config: ISocketConfig): ModuleWithProviders {
        return {
            ngModule: SocketModule,
            providers: [
                { provide: SocketConfig, useValue: config },
            ],
        };
    }
}