import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-basic-page',
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})

export class BasicPageComponent {

  form: FormGroup

constructor( private fb:FormBuilder ){

  this.form = this.fb.group({
    name: [ "", [Validators.required, Validators.minLength(3)] ],
    price: [ 0, [ Validators.required, Validators.min(0) ] ],
    inStorage: [ 0, [ Validators.required, Validators.min(0) ] ],

  })

}

onSave(){
  if (this.form.invalid) {
    return;
  }
  console.log(this.form.value)
}

}
