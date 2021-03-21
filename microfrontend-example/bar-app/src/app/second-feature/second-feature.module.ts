import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarSharedModule } from '../shared/bar-shared.module';

import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second.component';

const routes: Routes = [{ path: '', component: SecondComponent }];

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, RouterModule.forChild(routes), BarSharedModule],
})
export class SecondFeatureModule {}
