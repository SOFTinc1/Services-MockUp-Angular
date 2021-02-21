import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Header2Component } from './header2.component';

const routes: Routes = [
  {
    path: '',
    component: Header2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Header2RoutingModule { }
