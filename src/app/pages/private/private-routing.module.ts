import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPrivateGuard } from 'src/app/core/guards/auth-private-guard/auth-private-guard.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'apply-cards' },
      {
        path: 'apply-cards',
        loadChildren: () =>
          import('./apply-cards/apply-cards.module').then(
            (m) => m.ApplyCardsModule
          ),
      },
    ],
    canActivate: [AuthPrivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatePageRoutingModule {}
