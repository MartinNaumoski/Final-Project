import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneralOverviewComponent } from './general-overview/general-overview.component'
import { BooksOverViewComponent } from './books-over-view/books-over-view.component'
import { RouterModule } from '@angular/router';
import  appRoutes  from './routerConfig';
import { BooksDetailViewComponent } from './books-detail-view/books-detail-view.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FavoriteBooksComponent } from './favorite-books/favorite-books.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralOverviewComponent,
    BooksOverViewComponent,
    BooksDetailViewComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AdminPanelComponent,
    FavoriteBooksComponent,
    MyReservationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes) ,
    FormsModule ,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      closeButton: true
  }),
  TooltipModule.forRoot(),
  FontAwesomeModule,
  HttpClientModule
  
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true,
    
  }],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
