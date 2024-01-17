# Movie Catalog API

This project is a Angular application, generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8. The objective of this technical case is to build a SPA capable of consuming an external movie API and displaying the data through a modern and usable interface.

The service consumed was [The Movie Database](https://developer.themoviedb.org/docs/getting-started), a powerful API capable of providing data about series and films.

These are some of the main Angular features used to build this application:
- Components and your lifecycle;
- Angular Routing;
- Directives:
  - ```ngStyle``` for inline dynamic styling;
  - ```ngModel```directive for [two-way binding](https://angular.io/guide/two-way-binding) between child and parents components;
- **The new template syntaxes of Angular 17 for control flow:**
  - ```@if () {} @else {}``` to work with conditional control in the component template;
  - ```@for {}``` with the ```$index``` implicit variabel to iterate objects and arrays;
  - ```@defer``` to defer loading of the ```<app-poster />``` component, which contains large images, until the user needs it.
- [NgOptimizedImage](https://angular.io/guide/image-directive) directive to adopt performance best practices for loading images;
- Lazy loading router-based;
- Unit tests with Jasmine and Karma;
- CSS animations.

This application was hosted on Vercel and can be accessed at [Movie Catalog API](https://movie-catalog-by-lucas-viana.vercel.app/)

## Requirements

To execute this project you need:
- an LTS version of node installed on your local machine. If not, access [Node.js](https://nodejs.org/en/download/) for more information;
- the latest version of Angular. To do this, run the line command:
  ```npm install -g @angular/cli```;
- [Git](https://www.git-scm.com/downloads) installed on your local machine.

## Let's start? :computer:

1. Clone the repository on your local machine:
```
git clone https://github.com/gabrielucas/movie-catalog.git
cd movie-catalog/ && code .
```

2. Install all dependencies:
```
npm install
```

3. Run this command to build and serve the default app:
```
ng serve
```

4. In a web browser on your development computer, open ```http://localhost:4200/``` to view the application.

## Running unit tests :test_tube:

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

