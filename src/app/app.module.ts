import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticlesComponent } from './articles/articles.component';
import { CustomdirectoryDirective } from './customdirectory.directive';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { AnimationComponent } from './animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EcomComponent } from './ecom/ecom.component';
import { CartItemsViewComponent } from './cart-items-view/cart-items-view.component';
import { ShoppingService } from './services/shopping.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'phonebook',  component: PhonebookComponent },
  { path: 'animation',  component: AnimationComponent },
  { path: 'ecom',  component: EcomComponent },
  { path: 'cartItems_View',  component: CartItemsViewComponent },
  { path: 'checkout',  component: CheckoutComponent },
  { path: 'contact',  component: ContactComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    SectionComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    ProfileComponent,
    ArticlesComponent,
    CustomdirectoryDirective,
    PhonebookComponent,
    AnimationComponent,
    EcomComponent,
    CartItemsViewComponent,
    CheckoutComponent,
    ContactComponent,
    
  ],
  imports: [   
      RouterModule.forRoot(
        appRoutes
      ),   
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
