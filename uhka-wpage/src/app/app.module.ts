import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
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
import { FooterComponent } from './footer/footer.component';
import { ConnectionService } from './connection.service'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VrsteCiscenjaComponent,
    CenikComponent,
    KontaktComponent,
    NavigationComponent,
    CurouselComponent,
    FooterComponent,
    
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
    MatIconModule,
    ReactiveFormsModule
  ],
  exports:[OwlModule, CurouselComponent,FormsModule, ReactiveFormsModule],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
