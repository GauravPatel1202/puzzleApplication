import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PapersheetComponent } from './components/papersheet/papersheet.component';
import { ResultsheetComponent } from './components/resultsheet/resultsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    PapersheetComponent,
    ResultsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
