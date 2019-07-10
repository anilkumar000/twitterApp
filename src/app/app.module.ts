import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MyOwnCustomModule } from './my-own-custom/my-own-custom.module';
import { TwitterService } from './twitter.service';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MyOwnCustomModule,
    MatCardModule
    

  ],
  providers: [TwitterService],
  bootstrap: [AppComponent],
})
export class AppModule {

  
 }
