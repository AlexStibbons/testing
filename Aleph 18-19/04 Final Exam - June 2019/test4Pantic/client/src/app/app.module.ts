import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './security/authentication.service';
import { CanActivateAuthGuard } from './security/can-activate-auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './security/token-interceptor.service';
import { JwtUtilsService } from './security/jwt-utils.service';
import { MainComponent } from './main/main.component';
import { IssueService } from './services/issue.service';
import { ProjectService } from './services/project.service';
import { ProjectComponent } from './project/project.component';
import { IssueComponent } from './issue/issue.component';
import { AddIssueComponent } from './add-issue/add-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    MainComponent,
    ProjectComponent,
    IssueComponent,
    AddIssueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuard,
    JwtUtilsService,
    IssueService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
