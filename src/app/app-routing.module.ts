import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoSearchsComponent } from './components/do-searchs/do-searchs.component';

const routes: Routes = [
  { path: '', component: DoSearchsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
