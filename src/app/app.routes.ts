import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      //Note: Provisory route
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
];

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: mainRoutes,
  },
];
