import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { New1sComponent } from './new1s/new1s.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    // {
    //     path: 'graduates/:id', component: GraduatesComponent
    // },
    {
        path: 'teachers', component: TeachersComponent
    },
    { path: 'courses', component: CoursesComponent },
    { path: 'contacts', component: ContactsComponent },
    {path:'new1s', component: New1sComponent},
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }