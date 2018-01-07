import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from '../../src/app/app';
import { RouterModule, Routes } from '@angular/router';
let routes: Routes = [];
import { FooterModule } from 'meepo-footer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    FooterModule.forRoot({
      url: './assets/footer.json'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

