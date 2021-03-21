import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarSharedModule } from '../shared/bar-shared.module';
import { FirstComponent } from './first.component';

const routes: Routes = [{ path: '', component: FirstComponent }];

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BarSharedModule],
})
export class FirstFeatureModule {}
