!function(){angular.module("appStructure",[]).directive("footer",function(){return{restrict:"E",templateUrl:"views/templates/structure/footer.html"}}).directive("header",function(){return{restrict:"E",scope:{user:"="},templateUrl:"views/templates/structure/header.html",controller:["$scope","$filter",function(t,r){this.user=e}],controllerAs:"header"}});var e={loggedIn:!1}}();