# 04 Moving logic to a service

In this example, we will move the logic of the todos to a service. A service is just a class that can be instantiated and
injected into our components. To create an Angular 2 service, we will add the deocrator `Injectable` into our class.

```typescript
import { Injectable } from 'angular2/core';

@Injectable()
export class MyService {
  someMethod() {

  }
}

```

Then we have to add this service into our module by adding it to providers property of NgModule decorator:

```typescript
@NgModule({
  ...
  providers: [
    MyService
  ],
  ...
})
```

In order of our service to be injected into any of our components, we can specify it in the constructor.

```typescript
import {MyService} from './my.service';

@Component({
  ...
})
export class MyComponent  {
  constructor (private myService: MyService) {}
}

```

Now we can use `this.myService` to access the service from our component.