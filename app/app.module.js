import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})

export class AppModule{}
// RouterModule.forRoot([
//     {
//         path: '',
//         redirectTo: '/dashboard',
//         pathMatch: 'full'
//     }, {
//         path: 'heroes',
//         component: HeroesComponent
//     },{
//         path: 'dashboard',
//         component: DashboardComponent
//     },{
//         path: 'detail/:id',
//         component: HeroDetailComponent
//     }
// ]);
