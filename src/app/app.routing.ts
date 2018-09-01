import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { InformationComponent } from './components/information.component';

// Componentes


const appRoutes: Routes = [
    {
		path: 'dashboard', component: DashboardComponent, children: [
            { path: 'information', component: InformationComponent },
		]
	},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);