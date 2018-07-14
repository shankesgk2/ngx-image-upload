import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImageUploadComponent } from './ngx-image-upload.component';
import { FileDropDirective } from '../file-drop.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NgxImageUploadComponent, FileDropDirective],
  exports: [NgxImageUploadComponent]
})
export class NgxImageUploadModule { }
