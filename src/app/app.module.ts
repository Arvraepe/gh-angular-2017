import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { Components } from './components/index';
import { RoutingModule } from './app-routing.module';
import { CapitalizePipe } from "./core/pipes/capitalize.pipe";
import { Pages } from "./pages/index";
import { httpFactory } from "./core/providers/http.factory";

@NgModule({
    imports: [
        RoutingModule,
        BrowserModule,
        MaterialModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CapitalizePipe,
        ...Pages,
        ...Components
    ],
    providers: [{
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
    }],
    bootstrap: [ AppComponent ]
})

export class AppModule { }