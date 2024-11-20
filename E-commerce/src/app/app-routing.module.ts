import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "./component/auth/signin/signin.component";
import { SignupComponent } from "./component/auth/signup/signup.component";
import { HomeComponent } from "./component/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta raíz que redirige al Home
  { path: 'home', component: HomeComponent },           // Ruta para Home
  { path: 'signin', component: SigninComponent },       // Ruta para Signin
  { path: 'signup', component: SignupComponent },       // Ruta para Signup
  {path:'producto/:id', component: SigninComponent},
  { path: '**', redirectTo: '/home' },                  // Manejo de rutas no coincidentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
