import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {

  @Input() message: Message;

  get classes(): string {
    return [
      'message',
      this.message.isClientMessage
        ? 'message--client'
        : 'message--server',
    ].join(' ');
  }
}
