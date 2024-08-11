import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  @Input() contactForm!: FormGroup;
  @Output() formSubmitted = new EventEmitter<void>();

  onSubmit() {
    this.formSubmitted.emit();
    this.contactForm.reset();
  }
}
