import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NgxAutoIdModule } from '@aloreljs/ngx-auto-id';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NgxAutoIdModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
