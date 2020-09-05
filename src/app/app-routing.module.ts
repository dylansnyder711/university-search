import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversitiesComponent } from './universities/universities.component';
import { MajorsComponent } from './majors/majors.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'universities', component: UniversitiesComponent },
  { path: 'majors', component: MajorsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/universities', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
