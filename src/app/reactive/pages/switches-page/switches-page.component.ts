import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent {

  public myForm: FormGroup;

  constructor( private fb: FormBuilder ){
    
    this.myForm = this.fb.group({
      gender:['M', Validators.required],
      wantNotifications:[true, Validators.required],
      termsAndConditions:[false, Validators.requiredTrue]
    })

  }

  isValidField( field: string ){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  onSave(){
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value)

  }

}
