import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [LogoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent
  ]
})
export class SharedModule { }
