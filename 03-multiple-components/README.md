# 03 Multiple components

## Using our components

If we add new components to our application, we need to add them in the `declarations` property of our ngModule, in order to use them in other components.

```typescript
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { MyApp } from './app.component';
import { AnotherComponent } from './another/another.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    MyApp,
    AnotherComponent
  ],
  bootstrap: [MyApp]
})
export class MyAppModule {

}
```

And then we will be able to use the component in our templates, something like `<another-component></another-component>`

## Passing properties and specifying events from inside our component

If we want our new component to accept a property `[name]` we have to specify it in it's definition. The same happens for emitting events.

We can define them with the decorators @Input and @Output

```typescript
import {Component, Input} from '@angular/core';
@Component({
  ...
})
export class NameComponent {
  @Input('name') name: string;
}
```

The code above allow us to do `<name-component [name]='name'></name-component>`. Then we can display the property inside
our template with `{{name}}`.

For @Output properties, commonly we will have an EventEmitter instance

 ```typescript
import {Component, Output} from '@angular/core';
@Component({
  ...
})
export class NameComponent {
  @Output('onNameChange') onNameChange: EventEmitter = new EventEmitter();

  changeName () {
    ...
    this.onNameChange.emit()
  }
}
```

With the code above we will be able to subscribe to the `onNameChange` of NameComponent with `<name-component (onNameChange)='doSomethingOnNameChange()'>`