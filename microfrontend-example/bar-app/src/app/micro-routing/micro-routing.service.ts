import { Inject, Injectable, InjectionToken } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Location } from '@angular/common';

import * as fromSettings from './../app.settings';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

export const MICRO_APP_NAME = new InjectionToken<string>('microAppName');

interface RouteChangedEvent {
	route: {
		path: string;
		app: string;
	};
}

@Injectable()
export class MicroRoutingService {
	private routeChange$: Observable<any>;

	constructor(@Inject(MICRO_APP_NAME) private microApp, private router: Router, private location: Location) {
		this.routeChange$ = fromEvent(document, fromSettings.ROUTE_CHANGE_EVENT).pipe(
			map((event: CustomEvent<RouteChangedEvent>) => event.detail.route),
			filter(event => event.app === this.microApp)
		);
	}

	initRouting() {
		this.routeChange$.subscribe(event => {
			console.info(`[${fromSettings.APP_NAME}] RouteChangedEvent`, event);
			this.router.navigateByUrl(`${event.path}`);
		});

		this.router.navigateByUrl(this.location.path(true));
	}
}
