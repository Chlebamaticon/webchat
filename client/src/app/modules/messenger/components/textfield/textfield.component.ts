import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextfieldComponent {
  form = this.fb.group({
    message: this.fb.control('', Validators.required),
  });

  @Output() message: EventEmitter<string> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {}

  send() {
    const { message } = this.form.getRawValue();

    this.message.emit(message);
    this.form.setValue({ message: '' });
  }
}
