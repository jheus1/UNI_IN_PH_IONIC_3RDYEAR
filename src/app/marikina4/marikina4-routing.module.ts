import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marikina4Page } from './marikina4.page';

const routes: Routes = [
  {
    path: '',
    component: Marikina4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marikina4PageRoutingModule {}
