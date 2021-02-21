import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },

  { path: '',
    loadChildren: () => import ('./landing/landing.module')
      .then(m => m.LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
