import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { CrouselComponent } from './crousel/crousel.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { PaymenttypeComponent } from './paymenttype/paymenttype.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrouselComponent,
    BrandsComponent,
    ProductsComponent,
    PaymenttypeComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ScrolltopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
