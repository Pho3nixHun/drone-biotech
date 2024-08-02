import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  get name() {
    return this.contactForm.get('name')?.value;
  }
  get email() {
    return this.contactForm.get('email')?.value;
  }

  get message() {
    return this.contactForm.get('message')?.value;
  }

  onSubmit() {
    console.log(this.contactForm.value)
    this.contactForm.reset()
  }
}
