import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { EPages } from 'src/app/core/enums/pages.enum';
import { GetUsersAction } from 'src/app/core/state/users/users.actions';

@Component({
  selector: 'app-apply-cards',
  templateUrl: './apply-cards.component.html',
  styleUrls: ['./apply-cards.component.scss'],
})
export class ApplyCardsComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.searchForm = this.createForm();
  }

  ngOnInit() {
  }


  createForm(): FormGroup {
    return this.fb.group({
      search: [null],
      datesearch: [null],
    });
  }

  reset() {
    this.searchForm.reset();
  }

  get search(): string {
    return this.searchForm.get('search')?.value;
  }

  get datesearch(): string {
    return this.searchForm.get('datesearch')?.value;
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
