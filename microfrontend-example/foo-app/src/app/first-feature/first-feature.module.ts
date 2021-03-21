import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooSharedModule } from '../shared/foo-shared.module';
import { FirstComponent } from './first.component';

const routes: Routes = [{ path: '', component: FirstComponent }];

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FooSharedModule],
})
export class FirstFeatureModule {}
