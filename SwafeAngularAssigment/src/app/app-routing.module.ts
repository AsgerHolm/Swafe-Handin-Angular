import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'creditcards',
    loadChildren: () => import('./credit-card/credit-card.module').then(m => m.CreditCardModule)
  },
  {
    path: 'creditcards/add',
    loadChildren: () => import('./credit-card/credit-card.module').then(m => m.CreditCardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
