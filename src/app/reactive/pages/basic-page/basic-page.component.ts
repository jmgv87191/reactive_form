import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-basic-page',
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})

export class BasicPageComponent implements OnInit {

  form: FormGroup
  producto = {
    name:'rtx',
    price: 2500,
    inStorage: 2
  }

constructor( private fb:FormBuilder ){

  this.form = this.fb.group({
    name: [ "", [Validators.required, Validators.minLength(3)] ],
    price: [ 0, [ Validators.required, Validators.min(1) ] ],
    inStorage: [ 0, [ Validators.required, Validators.min(1) ] ],

  })

}
  ngOnInit(): void {
      // this.form.reset( this.producto )
    }

    isValidField( field:string ){
      return this.form.controls[field].errors && this.form.controls[field].touched
    }

  onSave(){
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return;
    }
    console.log(this.form.value)

    this.form.reset({name:"", price: 0, inStorage: 0 });

  }

}
