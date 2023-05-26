import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { VoziloComponent } from './vozilo/vozilo.component';
import { AutomobilComponent } from './vozilo/automobil/automobil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtiklComponent } from './artikl/artikl.component';
import { DobavljacComponent } from './dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './porudzbina/porudzbina.component';
import { StavkaPorudzbineComponent } from './stavka-porudzbine/stavka-porudzbine.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AuthorComponent } from './core/author/author.component';
import { Routes, RouterModule } from '@angular/router';
import { ArtiklService } from './service/artikl.service';
import { ArtiklDialogComponent } from './dialog/artikl-dialog/artikl-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DobavljacDialogComponent } from './dialog/dobavljac-dialog/dobavljac-dialog.component';
import { StavkaPorudzbineDialogComponent } from './dialog/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component';
import { PorudzbinaDialogComponent } from './dialog/porudzbina-dialog/porudzbina-dialog.component';
import { DobavljacService } from './service/dobavljac.service';
import { PorudzbinaService } from './service/porudzbina.service';
import { StavkaPorudzbineService } from './service/stavka-porudzbine.service';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';


const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'},
                {path: 'artikl', component: ArtiklComponent},
                {path: 'dobavljac', component: DobavljacComponent},
                {path: 'porudzbina', component: PorudzbinaComponent},
                {path: 'stavkaPorudzbine', component: StavkaPorudzbineComponent},
                {path: 'home', component: HomeComponent},
                {path: 'author', component: AuthorComponent},
                {path: 'about', component: AboutComponent}];

@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    ArtiklComponent,
    DobavljacComponent,
    PorudzbinaComponent,
    StavkaPorudzbineComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    ArtiklDialogComponent,
    DobavljacDialogComponent,
    StavkaPorudzbineDialogComponent,
    PorudzbinaDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue:'en-GB'}, ArtiklService, DobavljacService, PorudzbinaService, StavkaPorudzbineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
