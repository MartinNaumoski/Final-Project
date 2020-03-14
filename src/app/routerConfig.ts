import { Routes } from '@angular/router';
import { BooksOverViewComponent } from './books-over-view/books-over-view.component'
import { GeneralOverviewComponent } from './general-overview/general-overview.component'
import { BooksDetailViewComponent } from './books-detail-view/books-detail-view.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { AdminPanelComponent } from './admin-panel/admin-panel.component'
import { FavoriteBooksComponent } from './../app/favorite-books/favorite-books.component'
import { MyReservationsComponent } from './my-reservations/my-reservations.component'
import { from } from 'rxjs';

 export const appRoutes: Routes = [
    {
      path: 'booksOverview', 
      component: BooksOverViewComponent 
    },
    {
        path:'', redirectTo: 'logIn', pathMatch: 'full'
    },
    {
      path:'bookDetail/:id',
      component: BooksDetailViewComponent,
      data:{
        title:'Title',
        utl:'url',
        description:''
      }
    },
    {
      path:'logIn',
      component: LoginComponent
    },
    {
      path:'signUp',
      component: SignupComponent
    },
    {
      path:'adminPanel',
      component:AdminPanelComponent,
    },
    {
      path:'favoriteBooks',
      component:FavoriteBooksComponent
    },
    {
      path:'myReservations',
      component:MyReservationsComponent
    }

    
    
  ];
  export default appRoutes;


