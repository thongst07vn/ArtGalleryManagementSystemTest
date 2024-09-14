import { Routes } from '@angular/router';
import { HomeComponent } from './user/components/home.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { ProductDetailsComponent } from './user/components/product-details.component';
import { ProfileEditComponent } from './user/components/profile/profile-edit.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        
    },
    {
        path:'home',
        component:HomeComponent,
    },
    {
        path:'product-details',
        component:ProductDetailsComponent,
    }   
];
