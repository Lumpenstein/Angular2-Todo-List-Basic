import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component'; /*Import class appComponent for app.component.js/ts*/
import { FormsModule}	 from '@angular/forms';
import { StudentDetailComponent} from './student-detail.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ], /*List of all modules*/
  declarations: [ AppComponent, StudentDetailComponent ], /*List of all grafic components*/
  bootstrap:    [ AppComponent ] /*First module to start*/
})

export class AppModule { }