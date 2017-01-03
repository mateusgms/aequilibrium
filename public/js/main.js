angular.module("dashboardApp", ["minhasDiretivas", "ngAnimate", "ngRoute", "meusServicos"])
       .config(function($routeProvider, $locationProvider) {
         $locationProvider.html5Mode(true);
         $routeProvider.when("/", {
             templateUrl : "partials/welcome.html",
             controller : "ContratoController"
         });
         $routeProvider.when("/novocontrato", {
             templateUrl : "partials/novo-contrato.html",
             controller : "ControllerContrato"
         });
        $routeProvider.when("/selecaodegrupos", {
             templateUrl : "partials/selecao-grupos.html",
             controller : "GruposController"
         });
         $routeProvider.when("/fotos", {
           templateUrl : "partials/principal.html",
           controller : "FotosController"
         });

         $routeProvider.when("/fotos/new", {
           templateUrl : "partials/foto.html",
           controller : "FotoController"
         });

         $routeProvider.when("/fotos/edit/:fotoId", {
           templateUrl : "partials/foto.html",
           controller : "FotoController"
         });

         $routeProvider.otherwise({redirectTo : "/fotos"});
       });
