app.directive('appInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appInfo.html'
  };
});

// App.directive creates a new directive named 'appInfo'. It returns an object with three options:

// 1. restrict specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.

// 2. scope specifies that we will pass information into this directive through an attribute named info. The = tells the directive to look for an attribute named info in the <app-info> element, like this:

//  <app-info info="shutterbugg"></app-info>

// The data in info becomes available to use in the template given by templateURL.

// 3.templateUrl specifies the HTML to use in order to display the data in scope.info. Here we use the HTML in js/directives/appInfo.html.

// Looking at js/directives/appInfo.html, we define the HTML to display details about an app, like its title and price. We use expressions and filters to display the data.

// Then in index.html we use the new directive as the HTML element <app-info>. We pass in objects from the controller's scope ($scope.shutterbugg) into the <app-info> element's info attribute so that it displays.

// Why is creating your own directives useful?

// 1. Readability. Directives let you write expressive HTML. Looking at index.html you can understand the app's behavior just by reading the HTML.

// 2. Reusability. Directives let you create self-contained units of functionality. We could easily plug in this directive into another AngularJS app and avoid writing a lot of repetitive HTML.
