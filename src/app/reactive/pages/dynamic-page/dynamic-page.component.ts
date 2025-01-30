import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {

  form:FormGroup
  newFavorite: FormControl

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

    this.newFavorite = this.fb.control('', Validators.required)

  }

  get favoriteGames (){
    return this.form.get('favoriteGames') as FormArray ;
  }


  isValidFormArray( formArray: FormArray, i:number ){
    return this.form.controls[ i ].errors
    return this.form.controls[ i ].touched
  }

  onSubmit(){

    if (this.form.invalid) {
          this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value)
    this.form.reset();
  }

  onDeleteFavorite( index:number ){
    this.favoriteGames.removeAt(index)
  }

  onAddToFavorites(){

    if (this.newFavorite.invalid) {
      return;
    }

    const newGame = this.newFavorite.value

    this.favoriteGames.push( 
      this.fb.control(newGame, Validators.required)
    )

    this.newFavorite.reset();

  }

}
