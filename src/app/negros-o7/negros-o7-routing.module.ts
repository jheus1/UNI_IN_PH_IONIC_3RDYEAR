import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegrosO7Page } from './negros-o7.page';

const routes: Routes = [
  {
    path: '',
    component: NegrosO7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegrosO7PageRoutingModule {}
