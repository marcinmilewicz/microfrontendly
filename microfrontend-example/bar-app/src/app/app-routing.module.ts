import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import * as fromSettings from './app.settings';
import { AngularElementRouteModule } from '@microfrontendly/angular-element-routing';

const routes: Routes = [
  {
    path: fromSettings.APP_NAME,
    children: [
      { path: '', redirectTo: 'first', pathMatch: 'full' },
      {
        path: 'first',
        loadChildren: () => import('./first-feature/first-feature.module').then(module => module.FirstFeatureModule)
      },
      {
        path: 'second',
        loadChildren: () => import('./second-feature/second-feature.module').then(module => module.SecondFeatureModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), AngularElementRouteModule.forRoot(fromSettings.APP_NAME, fromSettings.ROUTE_CHANGE_EVENT)]
})
export class AppRoutingModule {
}
