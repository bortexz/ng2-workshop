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

## Navigate to routes programatically