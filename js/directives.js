valaddsApp.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
});


valaddsApp.directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
    
    }
  };
});
valaddsApp.directive('myMainDirective', function() {
  return function(scope, element, attrs) {
      loadCarousel();
  };
});

valaddsApp.directive('repeatDone', function() {
        return function(scope, element, attrs) {
            if (scope.$last) { // all are rendered
                scope.$eval(attrs.repeatDone);
            }
        }
    })