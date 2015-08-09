var DetailController = function($routeParams) {
    console.log('DetailController loaded');

    this.uData = $routeParams.uData;
};
app.controller('DetailController',['$routeParams', DetailController]);