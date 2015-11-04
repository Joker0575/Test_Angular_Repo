
var app = angular.module('plunker', ['ngRoute', 'ui.bootstrap']);
app.controller('ModalCtrl', function($scope,$modal,$http) {
    $scope.name = 'theNameHasBeenPassed';
    $scope.showModal = function(id,firstname,lastname,email) {
        console.log("model"+""+id);
        $scope.getClientInfo=function(){
            $http({
                method: 'get',
                type:'json',
                url: url+'/'+id
            }).
                success(function(data) {
                    console.log("success"+data.id,data.first_name);
                    //objLength=Object.keys(data).length;
                    //your code when success
                    $scope.client.first_name=data.first_name;
                    console.log($scope.clientData.first_name);
                    $scope.getClient = data;

                }).
                error(function(status) {
                    //your code when fails
                    console.log(status+"error get");
                });
        };

        $scope.opts = {
            backdrop: true,
            backdropClick: true,
            dialogFade: false,
            keyboard: true,
            templateUrl : 'modalContent.html',
            controller : ModalInstanceCtrl,
            resolve: {} // empty storage
        };


        $scope.opts.resolve.item = function() {
            return angular.copy({id:id,first_name:firstname,last_name:lastname,email:email}); // pass name to Dialog
        }

        var modalInstance = $modal.open($scope.opts);

        modalInstance.result.then(function(){
            //on ok button press 
        },function(){
            //on cancel button press
            console.log("Modal Closed");
        });
    };
})

var ModalInstanceCtrl = function($scope, $modalInstance, $modal, item) {

    $scope.item = item;
    console.log(item);

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

