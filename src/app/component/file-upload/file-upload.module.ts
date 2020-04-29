/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { FileUploadService } from './file-upload.service';
import { FileUploadComponent } from './file-upload.component';
import {
  FileUploadDirective,
  FileUploadDropDirective
} from './file-upload.directive';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
  ],
  declarations: [
    FileUploadDirective,
    FileUploadDropDirective,
    FileUploadComponent
  ],
  exports: [FileUploadDirective, FileUploadDropDirective, FileUploadComponent],
  providers: [FileUploadService]
})
export class FileUploadModule { }
