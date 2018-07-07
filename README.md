# AngularJsApps


## Why AngularJS?
```HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.```

### Alternatives
```Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views.```

### Extensibility
```AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.```

#### The Basics
```js
<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
  </body>
</html>
```

## Add Some Control
### Data Binding
```Data-binding is an automatic way of updating the view whenever the model changes, as well as updating the model whenever the view changes. This is awesome because it eliminates DOM manipulation from the list of things you have to worry about.```

### Controller
```Controllers are the behavior behind the DOM elements. AngularJS lets you express the behavior in a clean readable form without the usual boilerplate of updating the DOM, registering callbacks or watching model changes.```

### Plain JavaScript
```Unlike other frameworks, there is no need to inherit from proprietary types in order to wrap the model in accessors methods. AngularJS models are plain old JavaScript objects. This makes your code easy to test, maintain, reuse, and again free from boilerplate.```

## Wire up a Backend
### Deep Linking
```A deep link reflects where the user is in the app. This is useful so users can bookmark and email links to locations within the app. Round trip apps get this automatically, but AJAX apps by their nature do not. AngularJS combines the benefits of deep linking with desktop app-like behavior.```

### Form Validation
```Client-side form validation is an important part of a great user experience. AngularJS lets you declare the validation rules of the form without having to write JavaScript code. Write less code, go have beer sooner.```

### Server Communication
```AngularJS provides built-in services on top of XHR as well as various other backends using third party libraries. Promises further simplify your code by handling asynchronous return of data. In this example, we use the AngularFire library to wire up a Firebase backend to a simple AngularJS app.```

## Testability Built-in
### Injectable
```The dependency injection in AngularJS allows you to declaratively describe how your application is wired. This means that your application needs no main() method which is usually an unmaintainable mess. Dependency injection is also a core to AngularJS. This means that any component which does not fit your needs can easily be replaced.```

### Testable
```AngularJS was designed from ground up to be testable. It encourages behavior-view separation, comes pre-bundled with mocks, and takes full advantage of dependency injection. It also comes with end-to-end scenario runner which eliminates test flakiness by understanding the inner workings of AngularJS.```
