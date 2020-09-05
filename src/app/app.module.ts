import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { UniversitiesComponent } from './universities/universities.component';
import { MajorsComponent } from './majors/majors.component';
import { SearchComponent } from './search/search.component';
import { UniversityListComponent } from './universities/university-list/university-list.component';
import { UniversityQueryFormComponent } from './universities/university-query-form/university-query-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UniversitiesComponent,
    MajorsComponent,
    SearchComponent,
    UniversityListComponent,
    UniversityQueryFormComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
