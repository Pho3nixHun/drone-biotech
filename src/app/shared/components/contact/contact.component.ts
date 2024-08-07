import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  protected readonly contactForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

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
    this.contactForm.reset();
  }
}
