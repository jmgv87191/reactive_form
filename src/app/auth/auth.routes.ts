import { Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const routes: Routes = [

    {
        path:'',
        children:[
            {
                path:'sign-up',
                component: RegisterPageComponent
            },
            {
                path:'**',
                pathMatch:'full',
                redirectTo:'sign-up'
            }
        ]
    }

];
