import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './containers/second/second.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SecondComponent }];

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SecondFeatureModule {
}
