import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { AuthState } from './auth/auth.state';
import { environment } from 'src/environments/environment.prod';
import { LoadingState } from './loading/loading.state';

@NgModule({
  imports: [
    HttpClientModule,
    NgxsModule.forRoot([AuthState,LoadingState], {
      developmentMode: !environment.production,
    }),
  ],
})

export class StateModule {}
