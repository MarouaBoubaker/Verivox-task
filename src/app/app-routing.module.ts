import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';

const routes: Routes = [
  { path: 'tariffs', component: TariffListComponent },
  { path: '', redirectTo: '/tariffs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
