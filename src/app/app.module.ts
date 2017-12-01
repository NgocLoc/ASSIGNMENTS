import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Http, HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { New1sComponent } from './new1s/new1s.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TeachersComponent,
    ContactsComponent,
    New1sComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
