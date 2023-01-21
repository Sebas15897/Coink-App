import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject, takeUntil } from 'rxjs';
import { SweetAlertHelper } from 'src/app/core/helpers/sweet-alert.helper';
import { CoinkLogoutAction } from 'src/app/core/state/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnDestroy {
  private destroy: Subject<boolean> = new Subject();
  viewSidebar = false;

  constructor(
    private store: Store,
    private sweetAlertHelper: SweetAlertHelper,
    private router: Router,
  ) {}

  logout() {
    this.sweetAlertHelper
      .createCustomAlert({
        title: 'Finalizar Sesión',
        text: '¿Esta seguro que desea finalizar su sesión?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Finalizar',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.value) {
          this.store
            .dispatch(new CoinkLogoutAction())
            .pipe(takeUntil(this.destroy))
            .subscribe(() => {
              this.router.navigateByUrl('/public/login');
            });
        }
      });
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
