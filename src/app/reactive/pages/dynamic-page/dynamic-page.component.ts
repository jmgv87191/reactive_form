import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {

  form:FormGroup

  constructor( 
      private fb:FormBuilder 
  ){
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([
        ['Metal Gear',[Validators.required]],
        ['Death Stranding',[Validators.required]],
        
      ])
    })
  }

  get favoriteGames (){
    
    return this.form.get('favoriteGames') as FormArray ;
  }

  onSubmit(){

    if (this.form.invalid) {
      
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value)
    this.form.reset();
  }


}
