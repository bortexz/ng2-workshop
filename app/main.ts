// Import all angular
import '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

import { MyAppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(MyAppModule);
