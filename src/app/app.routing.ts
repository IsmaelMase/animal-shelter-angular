import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { InformationComponent } from './components/information.component';
import { AnimalsListComponent } from './components/animals-list.component';

// Componentes


const appRoutes: Routes = [
	{
		path: 'dashboard', component: DashboardComponent, children: [
			{ path: 'information', component: InformationComponent },
			{ path: 'animals-list', component: AnimalsListComponent },
		]
	},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);