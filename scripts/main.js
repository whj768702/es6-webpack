import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser';
import {MyAppComponent} from './hello';

document.addEventListener('DOMContentLoaded', () => {
    bootstrap(MyAppComponent);
});