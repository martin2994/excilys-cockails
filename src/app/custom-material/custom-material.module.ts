import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
