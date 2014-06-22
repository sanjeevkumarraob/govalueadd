valaddsApp.factory('LocationList',function(Restangular){
    console.log('in location service');
    var baseDestination = Restangular.all("locations");
    return{
        getList: function() {
                return baseDestination.getList();
            }
    }
    
    });    
    
valaddsApp.factory('PropertyList',function(Restangular){
    console.log('in PropertyList service');
    var baseProperties = Restangular.all("properties");
    return{
        getList: function() {
                return baseProperties.getList();
            }
    }
    
    });    

valaddsApp.factory('ImageService',function(Restangular){
    console.log('in image service');
     
     return{
        getList: function(id) {
            var baseImages=Restangular.one("images",id);
                return baseImages.get();
            }
    }
    
    });    
    
    

valaddsApp.factory('SearchDetails',function(Restangular,$location,$route){
    console.log('in SearchDetails service');
    var propertiesSearchData=[];
    var baseProperties = Restangular.all("searchproperties");
    return{
        addSearchResults: function(searchData) {
      baseProperties.post(searchData).then(function(resultData) {
       propertiesSearchData = resultData;
          $location.path('/listproperties');
          $route.reload();
    });
        },
        getSearchResults: function() {
                return propertiesSearchData;
            }
    }
    
    });    
    

    