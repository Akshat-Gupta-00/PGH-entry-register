import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { SearchEntryComponent } from './search-entry/search-entry.component';
import { ViewEntryComponent } from './view-entry/view-entry.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpDetailsComponent } from './pop-up-details/pop-up-details.component';
import { ReAddEntryComponent } from './re-add-entry/re-add-entry.component';
import { LoginComponent } from './login/login.component';
import{ AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    AddEntryComponent,
    SearchEntryComponent,
    ViewEntryComponent,
    PopUpDetailsComponent,
    ReAddEntryComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
