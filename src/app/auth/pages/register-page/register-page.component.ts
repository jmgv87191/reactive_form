import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  myForm: FormGroup;

  constructor( private fb: FormBuilder ){

    this.myForm = this.fb.group({
      name:[  '', Validators.required],
      email:[  '', Validators.required],
      username:[  '', Validators.required],
      password:[  '', [Validators.required, Validators.minLength(6)]],
      password2:[  '', Validators.required],

    })

  }

  isValidField( field: string ){

  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }


}
