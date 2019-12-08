import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VrsteCiscenjaComponent } from './vrste-ciscenja/vrste-ciscenja.component';
import { KontaktComponent} from './kontakt/kontakt.component';
import { CenikComponent } from './cenik/cenik.component';

const routes: Routes = [
  { path: '', redirectTo: 'domov', pathMatch: 'full'},
  { path: 'domov', component: HomeComponent },
  { path: 'vrste-ciscenja', component: VrsteCiscenjaComponent },
  { path: 'cenik', component: CenikComponent },
  { path: 'kontakt', component: KontaktComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
