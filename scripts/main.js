
import 'reflect-metadata';
import 'zone.js';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MyAppComponent} from './hello';
import {Myworld} from './world';

@NgModule({
    imports: [BrowserModule],
    declarations: [MyAppComponent,Myworld],
    bootstrap: [MyAppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
