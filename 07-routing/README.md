# 07 - Routing

We can specify the routing of our application with the `@angular/router`. To do so, we can add this to our module:

```typescript
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'component-one', component: ComponentOne },
  { path: 'component-two', component: ComponentTwo }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    ...
    routing
  ],
  declarations: [
    AppComponent,

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

```

This way, the url `our-domain/component-one` will load us the ComponentOne. But where? To specify where our routing components will be placed, we can use the `<router-outlet></router-outlet>` directive.
```html
<app>
  <something-to-go-on-all-routes></something-to-go-on-all-routes>
  <router-outlet></router-outlet>
</app>

```

We can also specify children routes with the paramenter children in the Routes. For this, the parent Component will need to have another `<router-outlet></router-outlet>` where to put the children components

```typescript
{ path: 'product-details/:id', component: ProductDetails,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: Overview },
      { path: 'specs', component: Specs }
    ]
  }
```

## Navigate to routes from HTML links
To navigate to routes inside html, we can use `routerLink='/home'`. We can setup a class to be added automatically when this path is the active one by using `routerLinkActive='active'`.

```html
<a routerLink='/home' routerLinkActive='active'>Home</a>
```
## Navigate to routes programatically

We can navigate programatically to any route by doing `this.router.navigate(['/home'])`

## Guards and resolvers
### Guards
Guards can be used to prevent the access to a route depending on a condition. Usually used to prevent users to access admin for instance.

To use that, we need a guard that implements the CanActivate function, and then use it inside the routes specification.

```typescript
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RouteGuard implements CanActivate {

  constructor() {}

  canActivate() {
    // Can return Boolean or  Observable<Boolean>, so can be async.
    return Observable.of(true);
  }
}
```

```typescript
{ path: 'product-details/:id', component: ProductDetails, canActivate: [RouteGuard] }
```

We also have canDeactivate options, if we want to prevent user from leaving without saving some data, for instance.

### Resolvers

We can retrieve some data before navigating to a route, by implementing resolve interface

```typescript
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { FoldersService } from './folders.service';

@Injectable()
export class RootFolderResolver implements Resolve<any> {
  constructor(private foldersService: FoldersService) {}

  resolve(): Observable<any> {
    return this.foldersService.getAll();
  }
}
```

To specify it in the route:

```typescript
{ path: 'folder/:id', component: FilesPageComponent, resolve: {folder: FolderResolver}}
```

And then, inside the component of our route, we can access this data with:

```typescript
constructor(private foldersService: FoldersService, private route: ActivatedRoute) {};

ngOnInit() {
  this.childFiles = this.route.snapshot.data['folder']['files'];
}

```