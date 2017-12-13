import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from "./pages/home/home.page.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {}
