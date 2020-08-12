import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/Home/home.component';
import { CreateComponent } from './Pages/create/create.component';


const routes: Routes = [
  // {path:'', pathMatch: 'full', redirectTo:'/'},
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
