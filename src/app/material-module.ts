import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
  ]
})
export class MaterialModule { }
