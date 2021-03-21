import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarTestComponent } from './test/bar-test.component';

@NgModule({
  declarations: [BarTestComponent],
  imports: [CommonModule],
  exports: [BarTestComponent],
})
export class BarSharedModule {}
