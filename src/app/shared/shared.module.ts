import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {PrimeFacesModule} from "./prime.faces.module";

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    PrimeFacesModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class SharedModule {}
