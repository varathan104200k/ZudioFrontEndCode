import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'',redirectTo:'login',pathMatch:'full'
    },
    {
        path:'login',
        component:LoginPageComponent
    },
    {
        path:'home',
        component:HomePageComponent,
        canActivate:[authGuard]
    }
];
