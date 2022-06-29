import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { OffcanvasNavComponent } from './components/offcanvas-nav/offcanvas-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ModalComponent,
    LoginModalComponent,
    OffcanvasNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
