import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyExampleComponent } from './my-example/my-example.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from "@angular/material";
import { MatCardModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    MyExampleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
