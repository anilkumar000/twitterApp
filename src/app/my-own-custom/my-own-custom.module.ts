import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatCardModule } from '@angular/material';

import {TwitterTimelineComponent} from './twitter-timeline.component';


@NgModule({
  declarations: [TwitterTimelineComponent],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule
  ],
  exports: [
  TwitterTimelineComponent],

})
export class MyOwnCustomModule { }
