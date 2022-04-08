import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from "./forms/template/template.component";
import { ReactiveComponent } from "./forms/reactive/reactive.component";

const routes: Routes = [
  { path:'template', component: TemplateComponent },
  { path:'reactive', component: ReactiveComponent },
  { path:'**', pathMatch:'full', redirectTo:'reactive' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
