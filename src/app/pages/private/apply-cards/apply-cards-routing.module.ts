import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyCardsComponent } from './apply-cards.component';

const routes: Routes = [
  {
    path: '',
    component: ApplyCardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ApplyCardsRoutingModule {}
