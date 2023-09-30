import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEntryComponent } from './view-entry/view-entry.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {path:"", component:LoginComponent },
  {path:"view", component:ViewEntryComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
