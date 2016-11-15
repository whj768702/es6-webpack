import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser';
// import {NgModule} from 'angular2/core';
import {MyAppComponent} from './hello';

document.addEventListener('DOMContentLoaded', () => {
    bootstrap(MyAppComponent);
});
// @NgModule({
//     imports: [MyAppComponent]
// });

// bootstrap(MyAppComponent);
