import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooTestComponent } from './test/foo-test.component';

@NgModule({
  declarations: [FooTestComponent],
  imports: [CommonModule],
  exports: [FooTestComponent],
})
export class FooSharedModule {}
