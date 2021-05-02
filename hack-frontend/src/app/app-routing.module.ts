import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent} from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormSuccessComponent} from './modals/form-success/form-success.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'registrationsuccess', component: FormSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
