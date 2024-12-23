import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'auth',
        loadChildren: ()=> import ( './auth/auth.routes' ).then( c => c.routes )
    },
    {
        path:'reactive',
        loadChildren: ()=> import ('./reactive/reactive.routes').then( c => c.routes )
    },
    {
        path:'**',
        pathMatch:'full',
        redirectTo: 'reactive'
    }

];
