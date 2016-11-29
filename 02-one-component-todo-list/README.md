# 02 One component todo list

## What is a component
A component is the smaller unit of Angular 2 apps. Similar to the web components concept, each
angular 2 component is an encapsulation of  html, css styles and typescript that fits a specific purpose.

To create an angular 2 component, we do it with the Component decorator over a typescript class.

```typescript
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class MyApp {

}
```
 Where the selector specifies the tag that our component will have (In this case, `<app></app>`), and the templateUrl is the url of the template that
 our component will have inside. So if our template has `<h1>A title</h1>`, when it compiles into our html page, we will see

```html
<app>
  <h1>A tittle</h1>
</app>
```
## Component structure
A common structure in a web page starts with a root component, that includes the smalles components in our application.
A simple example of a html structure would be:

```html
<app>
  <my-header></my-header>
  <sidebar><sidebar>
  <main-content>
    <my-tytle></my-title>
    <content></content>
  </main-content>
  <my-footer></my-footer>
</app>
```

Each parent element has other elements inside as a template, for instance if we take main-content, it's template would be:

```html
  <my-tytle></my-title>
  <content></content>
```

## Data binding
We have three types of data binding in angular 2:
- Passing properties to a child component, expressed in `[]` (e.g `[name]='myNameVariable'`)
- Receiving events from a child component, expressed in `()` (e.g `(click)='doSomethingOnClick()'`)
- two-way data binding, with `[()]` (e.g. for inputs with ngModel `[(ngModel)]='formData.name'`)

Also, we can populate any of the variables of our component into the html template with `{{}}` (e.g. `<h1>{{myAppTitle}}</h1>`)

## What is a directive
We have 3 types of directives in angular2:
- Components: The components we have seen before are itself a type of directive (Like angular 1, which didn't have the distinction between component and directive).
- Attribute directives: They change the appearance or behaviour of a DOM element
- Structural directives: Change the DOM layout by adding/removing elements.

Examples of Attribute directives:
- ngClass: Programatically adds or modifies class names depending of a variable in our component.
- ngStyle: Programatically adds or modifies a style in the DOM element.

They are usually expressed in `[]`, like `[ngStyle]`.

Examples of Structural directives:
- ngIf: Only displays the element if the expression in the ngIf is true (e.g. `*ngIf='true'`)
- ngFor: It displays the template for each element in the array (e.g. `*ngFor='let todo in todos'`)

They are normally expressed with a `*` prefix, like `*ngFor`.