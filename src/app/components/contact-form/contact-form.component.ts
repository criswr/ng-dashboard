import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface ContactModel {
  name: FormControl <string | null>
  email: FormControl <string | null>
  message: FormControl <string | null>
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {
  nameControl = new FormControl('', [Validators.required])
  emailControl = new FormControl('', [Validators.required])
  messageControl = new FormControl('', [Validators.required])

  contactModel: FormGroup<ContactModel> = new FormGroup({
    name: this.nameControl,
    email: this.emailControl,
    message: this.messageControl
  })
}
