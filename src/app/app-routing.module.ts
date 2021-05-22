import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BowlersComponent } from './bowlers/bowlers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BowlerDetailComponent } from './bowlers/bowler-detail/bowler-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BowlerDetailComponent },
  { path: 'bowlers', component: BowlersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
