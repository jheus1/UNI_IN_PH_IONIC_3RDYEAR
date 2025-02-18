import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SCotabato5Page } from './s-cotabato5.page';

const routes: Routes = [
  {
    path: '',
    component: SCotabato5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SCotabato5PageRoutingModule {}
