import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurigaoDelsur8Page } from './surigao-delsur8.page';

const routes: Routes = [
  {
    path: '',
    component: SurigaoDelsur8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurigaoDelsur8PageRoutingModule {}
