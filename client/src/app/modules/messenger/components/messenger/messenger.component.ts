import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketClientService } from 'src/app/modules/socket/services/socket-client.service';
import { MessengerService } from '../../services/messenger.service';
import { MessengerFacadeService } from '../../services/messenger-facade.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit, OnDestroy {

  constructor(
    private messengerService: MessengerService,
    private messengerFacade: MessengerFacadeService,
  ) {}

  onMessage(message: string) {
    this.messengerFacade.send(message);
  }

  ngOnInit() {
    this.messengerService.connect();
  }

  ngOnDestroy() {
    this.messengerService.disconnect();
  }

}
