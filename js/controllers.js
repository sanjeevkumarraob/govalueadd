
function PropertiesController($scope, Restangular,PropertyList) {
    PropertyList.getList()
    .then(function(properties) {
        $scope.propertiesList = properties;
    });
    $scope.$on('$includeContentLoaded', function(event) {
         console.log("hi");

    });
     $scope.$on('carousel', function(ngRepeatFinishedEvent) {
         loadCarousel();
    });

}


function SearchHomeController ($scope, $location, LocationList,$rootScope,Restangular,SearchDetails){
   LocationList.getList()
    .then(function(locations) {

        $scope.locationsList = []
        for(var i=0;i<locations.length;i++){
          $scope.locationsList.push(locations[i].location);
        };
        
    });

    $scope.search = function() {

      console.log($scope.searchhome);
        //$scope.searchhome.push("location", $scope.location);
        //$scope.searchhome.location = $scope.location;
        SearchDetails.addSearchResults($scope.searchhome);

        };

}



function ContactFormController($scope,$location,$http, Restangular) {

  $scope.save = function() {
    Restangular.all('contacts').post($scope.contact).then(function(contact) {
        $http({
      url: 'mail.php',
      method: 'GET',
      params: {firstname: $scope.contact.firstname, lastname: $scope.contact.lastname, email: $scope.contact.email, number: $scope.contact.number, message: $scope.contact.enquiry},
    }).
    success(function(data) { console.log("mail sent sucessfully"); });

      $location.path('/');
    });
  }
}

function LeadsController($scope,$location,$http, Restangular) {

  $scope.save = function() {
      $scope.leads.propertyid=$scope.property.id;
      $scope.leads.propertyname=$scope.property.name;
    Restangular.all('leads').post($scope.leads).then(function(leads) {
        $http({
      url: 'mail.php',
      method: 'GET',
      params: {name: $scope.leads.contactname, email: $scope.leads.email, number: $scope.leads.contactnumber, message: $scope.leads.message},
    }).
    success(function(data) { console.log("mail sent sucessfully"); });

      $location.path('/');
    });
  }
}

function GridController($scope) {
    Grid.init();

}

function TestimonialsController($scope) {
     $scope.$on('$includeContentLoaded', function(event) {
         $('.navbar').waypoint('sticky');

    });
}

function PropertyDetailsController($scope, $location, Restangular, property,ImageService,$timeout) {
  var original = property;
  $scope.property = Restangular.copy(original);
    ImageService.getList(property.id).then(function(images) {
        $scope.images = images;
    });

  $scope.isClean = function() {
    return angular.equals(original, $scope.property);
  }

   $scope.layoutDone = function() {
            //$('a[data-toggle="tooltip"]').tooltip(); // NOT CORRECT!
            $timeout(function() {  loadCarousel(); }, 0); // wait...
        }
}


function SearchListController($scope,SearchDetails){
    var returnResults = SearchDetails.getSearchResults();
    $scope.propertySearchResults = returnResults;
}


function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [{name:"Pramath G Kiran - A Renowned International Music Artist",text:"Value Add Realty is not another broker in the locality, it is the only professional real estate broker you can rely upon! I have bought my dream site and have sold my age old house through them - Honesty is the word I describe them",css:"img/testimonials/pramath.jpg"},{name:"Sudheendra - A reputed civil contractor - Build High Bangalore",text:"Even though I am an engineer and keep coming across various properties, I really couldn't buy when i need. Value Add Realty understood our requirement and got us an amazing property which is cherished by all in the family - Value created for you in each step by them",css:"img/testimonials/Sudhi1.png"},{name:"Arun Kumar - A Renowned Drummer & International Music Artist",text:"I was in search for a suitable apartment and had done lots of research, inspections. Value Add Realty was the right connect to us, they had just clicked with us and we have our apartment today because of them - A wholesome deal maker",css:"img/testimonials/Arun.jpg"},{name:"Yusuf Unjhawala - Partner at FECA India",text:"Mr.Balaji a consultant of franchising businesses was the one who very proactively sought to assist  us in franchising our brand and came across as a person with great knowledge, as a result today we have 3 more retail stores",css:"img/testimonials/Yusuf.jpg"},{name:"Rashmi Rao - Software Professional with Accenture India",text:"We have two properties and were confused in which one to liquidate and which one to hold.We came across Value Add Realty through one of our friend and contacted them for their advice. Mr.Balaji not only suggested but also acted fast in successful sale of the property which was to be sold - A Confident and trustworthy team indeed",css:"img/testimonials/Rashmi.jpg"}];

}

function AccordionDemoCtrl($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}
