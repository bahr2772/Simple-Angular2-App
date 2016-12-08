import {Component} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumboron/jumbotron.components';
import {AboutComponent} from './components/pages/about.component';
import {HomeComponent} from './components/pages/home.component';

import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
	selector: 'my-app',
	template: `<navbar></navbar><h1>My First Angular2 App</h1><jumbotron></jumbotron>
			<router-outlet></router-outlet>
			`,
	directives: [NavbarComponent, JumbotronComponent, AboutComponent,
		HomeComponent, ROUTER_DIRECTIVES],
	precompile: [HomeComponent, AboutComponent]
})

export class AppComponent{}