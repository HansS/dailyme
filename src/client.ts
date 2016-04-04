import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import { AppComponent } from './app/app.component';

bootstrap(AppComponent, [
        HTTP_PROVIDERS
    ])
    .catch(err => console.error(err));
