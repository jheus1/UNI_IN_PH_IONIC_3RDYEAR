import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavaoOriental3Page } from './davao-oriental3.page';

const routes: Routes = [
  {
    path: '',
    component: DavaoOriental3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavaoOriental3PageRoutingModule {}
