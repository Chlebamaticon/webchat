import { Injectable, Inject, Optional } from '@angular/core';
import * as socket from 'socket.io-client';
import uuidv4 from 'uuidv4';
import { SocketConfig } from '../providers/socket-config.provider';
import { ISocketConfig } from '../model/socket.interface';
import { doesConfigContainUrlAndPort } from '../helpers/conditionals';

@Injectable({
    providedIn: 'root'
})
export class SocketClientService {
    private _session: SocketIOClient.Socket;

    get config() { return this._config; }
    get session() { return this._session; }

    constructor(
        @Optional() @Inject(SocketConfig) private _config: ISocketConfig,
    ) {}

    public connect(config: ISocketConfig = this.config): void {
        if ( this.session && this.session.connected ) { return; }

        if ( config && doesConfigContainUrlAndPort( config ) ) {
            this._session = socket(`${ config.url }:${ config.port }`);
        }
    }

    public disconnect(): void {
        if ( this.session && this.session.connected ) {
            this.session.removeAllListeners();
            this.session.disconnect();
        }
    }
}
