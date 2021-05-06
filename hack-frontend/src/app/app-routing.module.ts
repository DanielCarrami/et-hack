import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormSuccessComponent} from './modals/form-success/form-success.component';
import { InitialTransitionComponent } from './initial-transition/initial-transition.component';
import { InitialAnimationComponent } from './initial-animation/initial-animation.component';

const routes: Routes = [
  {path: '', component: InitialAnimationComponent},
  {path: 'home', component: MainPageComponent, data: {animation: 'HomePage'}},
  {path: 'registration', component: RegistrationComponent},
  {path: 'registrationsuccess', component: FormSuccessComponent},
  {path: 'enterthehacker', component: InitialTransitionComponent, data: {animation: 'TransitionPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
