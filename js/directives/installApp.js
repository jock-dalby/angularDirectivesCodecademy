app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {
    },
    templateUrl: 'js/directives/installApp.html',
    link: function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,

      scope.download = function() {
        element.toggleClass('btn-active');
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      };
    }
  };
});

// In the new file js/directives/installApp.js, create a new directive named installApp. Refer to the appInfo directive for an example:

// 1. use app.directive to create a new directive named installApp
// 2. use the restrict option to create a new Element
// 3. set the scope option to an empty object {}
// 4. use the templateUrl option to tell this directive to use the js/directives/installApp.html file.

// We used app.directive to create a new directive named 'installApp'.

// - The directive contains the three options restrict, scope, and templateUrl that we saw before in the 'appInfo' directive.
// - It also contains a fourth option link. The link is used to create interactive directives that respond to user actions.
// - The link function takes three inputs:
//
// 1. scope refers to the directive's scope. Any new properties attached to $scope will become available to use in the directive's template.
// 2. element refers to the directive's HTML element.
// 3. attrs contains the element's attributes.

// Inside the link function, there are two properties buttonText and installed, and the function download(). We'll use these in the directive's template next.
