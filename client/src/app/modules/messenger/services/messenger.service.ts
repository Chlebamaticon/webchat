import { Injectable } from '@angular/core';
import { SocketClientService } from '../../socket/services/socket-client.service';
import { Subject } from 'rxjs';
import uuidv4 from 'uuidv4';

@Injectable({
    providedIn: 'root',
})
export class MessengerService {
    private _message: Subject<{ senderId: string, uuid: string, message: string }> = new Subject();
    public readonly message$ = this._message.asObservable();

    constructor(
        private socket: SocketClientService,
    ) {}

    public connect() {
        this.socket.connect();
        this.addListeners();
    }

    public disconnect() {
        this.socket.disconnect();
    }

    public send(message: string): void {
        const { session } = this.socket;

        session.emit('message', { uuid: uuidv4(), message });
    }

    public isClient(senderId: string): boolean {
        console.log(this.socket.session.id);
        console.log(senderId);
        return this.socket.session.id === senderId;
    }

    private addListeners(): void {
        const { session } = this.socket;

        session.on('message', (packet) => this._message.next(packet));
    }
}