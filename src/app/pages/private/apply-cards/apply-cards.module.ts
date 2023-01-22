import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyCardsComponent } from './apply-cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplyCardsRoutingModule } from './apply-cards-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApplyCardsGridComponent } from './apply-cards-grid/apply-cards-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ApplyCardsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AgGridModule,
  ],
  declarations: [ApplyCardsComponent, ApplyCardsGridComponent],
})
export class ApplyCardsModule {}
