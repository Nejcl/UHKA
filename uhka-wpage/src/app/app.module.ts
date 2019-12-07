import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OwlModule } from 'ngx-owl-carousel';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { VrsteCiscenjaComponent } from './vrste-ciscenja/vrste-ciscenja.component';
import { CenikComponent } from './cenik/cenik.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CurouselComponent } from './curousel/curousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VrsteCiscenjaComponent,
    CenikComponent,
    KontaktComponent,
    NavigationComponent,
    CurouselComponent
  ],
  imports: [
    OwlModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[OwlModule, CurouselComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
