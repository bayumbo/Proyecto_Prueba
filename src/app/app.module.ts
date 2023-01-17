import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { Plato3Component } from './plato3/plato3.component';
import { Carrera1Component } from './carrera1/carrera1.component';
import { Carrera2Component } from './carrera2/carrera2.component';
import { Carrera3Component } from './carrera3/carrera3.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    Plato3Component,
    Carrera1Component,
    Carrera2Component,
    Carrera3Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HOMEComponent},
      {path: 'plato3', component: Plato3Component},
      {path: 'carrera1', component: Carrera1Component},
      {path: 'carrera2', component: Carrera2Component},
      {path: 'carrera3', component: Carrera3Component},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
