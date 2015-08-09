/// <reference path="../typings/angularjs/angular.d.ts"/>

var app = angular.module('app', ['ngNewRouter']);


/*****************************************
 * App configuration
 */
var AppConfig = function($componentLoaderProvider) {
  
  /**
   * Definition of component mapping for ngNewRouter
   * @default
   *   components/[COMPONENT_NAME]/[COMPONENT_NAME].html
   * @new
   *   js/components/[COMPONENT_NAME]/[COMPONENT_NAME].html
   */
  $componentLoaderProvider.setTemplateMapping(function (name) {
    return './js/components/' + name + '/' + name + '.html';
  });
};
app.config(['$componentLoaderProvider', AppConfig]);


/*****************************************
 * Route controller
 * Routing configuration
 */
var RouteController = function($router) {  
  $router.config([
    { path: '/',           component: 'home' },
    { path: '/first',      component: 'first' },
    { path: '/detail/:uData', component: 'detail' }
  ]);
};
app.controller('RouteController', ['$router', RouteController]);


/*****************************************
 * Menu controller
 */
var MenuController = function() {
  this.detailID = 'Unique data';
};
app.controller('MenuController', [MenuController]);
