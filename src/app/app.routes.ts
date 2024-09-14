import { Routes } from '@angular/router';
import { HomeComponent } from './user/components/home.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { ProductDetailsComponent } from './user/components/product-details.component';
import { ProfileEditComponent } from './user/components/profile/profile-edit.component';
import { LayoutsComponent } from './user/layouts/layouts/layouts.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/login/signup.component';


export const routes: Routes = [
    {
        path:'user',
        component:LayoutsComponent,
        children:[
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'profile',
                component:ProfileComponent,
            },
            {
                path:'edit-profile',
                component: ProfileEditComponent
            },
            {
                path:'product-details',
                component:ProductDetailsComponent,
            }
        ]
    },
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:SignUpComponent
    }
];
