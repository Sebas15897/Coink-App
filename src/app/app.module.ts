import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthPrivateGuard } from './core/guards/auth-private-guard/auth-private-guard.guard';
import { AuthPublicGuard } from './core/guards/auth-public-guard/auth-public-guard.guard';
import { StateModule } from './core/state/state.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [AuthPublicGuard, AuthPrivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
