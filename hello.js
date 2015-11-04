var url="http://gentle-citadel-3074.herokuapp.com/api/clients";

app.controller('MainCntrlCustomer',function ($scope,$http){

    $scope.setSelected = function() {

        //alert("alert");

    };
    $scope.getCustomer=function(){
        $http({
        method: 'get',
        type:'json',
        url: url
    }).
        success(function(data) {
            console.log(data);
            //objLength=Object.keys(data).length;
            //your code when success
            $scope.clients = data;

        }).
        error(function(status) {
            //your code when fails
            console.log(status+"error get");
        });
    }
    $scope.getCustomer();
    $scope.createNewClient =function(client){
        $scope.client={};

        $http({
            method: 'post',
            type:'json',
            url: url,
            data:client
        }).
            success(function(data) {
                console.log(data);
//alert("inside post success");
                //your code when success
                //$scope.clients = data;
                $http({
                    method: 'get',
                    type:'json',
                    url: url
                }).
                    success(function(data) {
                        alert("inside inside get");
                        $scope.clients = data;
                        console.log(client+"client");
                        //your code when success
                        $scope.clients.push(client);
                        //alert($scope.clients.push(data));
                    }).
                    error(function(status) {
                        //your code when fails
                        // alert(status);
                    });
            }).
            error(function(status) {
                //your code when fails
                alert(status);
            });
    };
    var client={first_name:"sada",last_name:"sadasda",email:"asdasd"}
    $scope.putClientEdit =function(id){
        $scope.client={};
        var client={first_name:"sada",last_name:"sadasda",email:"asdasd"}
        $http({
            method: 'put',
            type:'json',
            url: url+'/'+'7',
            data:client
        }).success(function(data) {
            console.log(data);
            alert("inside post success");
            //your code when success
            //$scope.clients = data;
            $http({
                method: 'get',
                type:'json',
                url: url+'/'+'7'
            }).
                success(function(data) {
                    alert("inside inside get");

                    //your code when success
                    data.first_name=client.first_name;
                    data.last_name=client.last_name;
                    data.email=client.email;
                    $scope.clients.push(data);
                }).
                error(function(status) {
                    //your code when fails
                    alert(status);
                });
        }).
            error(function(status) {
                //your code when fails
                alert(status);
            });
    };
    $scope.deleteClient =function(id){
        $http({
            method: 'delete',
            type:'json',
            url: url+'/'+id
        }).
            success(function(data) {
                console.log(data);
                alert("inside delete success");
                //your code when success
                //$scope.clients = data;
                $http({
                    method: 'get',
                    type:'json',
                    url: url
                }).
                    success(function(data) {
                        alert("inside inside get");

                        console.log(data[id]);
                        //your code when success
                        var obj=delete(data[id]);

                        $scope.clients=obj;
                    }).
                    error(function(status) {
                        //your code when fails
                        alert(status);
                    });
            }).
            error(function(status) {
                //your code when fails
                alert(status);
            });


    };

});

/*
sample.controller('getClient',function getClient($scope,$http){
    */
/*
     var url = "http://rest-service.guides.spring.io/greeting";
     *//*

    $scope.getindividualClient=function(id){
        $http({
            method: 'get',
            type:'json',
            url: url+'/'+id
        }).
            success(function(data) {
                console.log(data);
                //objLength=Object.keys(data).length;
                //your code when success
                $scope.clients = data;
            }).
            error(function(status) {
                //your code when fails
                //alert(status);
            });
    }



});
*/
/*
sample.controller('createClient',function($scope,$http){
    $scope.client={};

    */
/*var data={first_name:$scope.first_name,
        last_name:$scope.last_name,email:$scope.email}*//*

    $scope.createNewClient =function(client){
        $http({
            method: 'post',
            type:'json',
            url: url,
            data:client
        }).
            success(function(data) {
                console.log(data);
//alert("inside post success");
                //your code when success
                //$scope.clients = data;
                $http({
                    method: 'get',
                    type:'json',
                    url: url
                }).
                    success(function(data) {
                        alert("inside inside get");
                        $scope.clients = data;
                        console.log(client+"client");
                        //your code when success
                        $scope.clients.push(client);
                        //alert($scope.clients.push(data));
                    }).
                    error(function(status) {
                        //your code when fails
                       // alert(status);
                    });
            }).
            error(function(status) {
                //your code when fails
                alert(status);
            });
    };
});
sample.controller('putClient',function($scope,$http){
    */
/*var data={first_name:$scope.first_name,
        last_name:$scope.last_name,email:$scope.email}
    var id=1;*//*

   // var putUrl=url+'/'+id;
    $scope.client={};
    var client={first_name:"sada",last_name:"sadasda",email:"asdasd"}
    $scope.putClientEdit =function(id){
        $http({
            method: 'put',
            type:'json',
            url: url+'/'+'7',
            data:client
        }).success(function(data) {
                console.log(data);
                alert("inside post success");
                //your code when success
                //$scope.clients = data;
                $http({
                    method: 'get',
                    type:'json',
                    url: url+'/'+'7'
                }).
                    success(function(data) {
                        alert("inside inside get");

                        //your code when success
                        data.first_name=client.first_name;
                            data.last_name=client.last_name;
                            data.email=client.email;
                        $scope.clients.push(data);
                    }).
                    error(function(status) {
                        //your code when fails
                        alert(status);
                    });
            }).
            error(function(status) {
                //your code when fails
                alert(status);
            });
    };


})
sample.controller('delClient',function($scope,$http){

   */
/* var id=1;
    var putUrl=url+'/'+id;*//*

    $scope.deleteClient =function(id){
        $http({
            method: 'delete',
            type:'json',
            url: url+'/'+id
        }).
            success(function(data) {
                console.log(data);
                alert("inside delete success");
                //your code when success
                //$scope.clients = data;
                $http({
                    method: 'get',
                    type:'json',
                    url: url
                }).
                    success(function(data) {
                        alert("inside inside get");

console.log(data[id]);
                        //your code when success
                        var obj=delete(data[id]);

                        $scope.clients=obj;
                    }).
                    error(function(status) {
                        //your code when fails
                        alert(status);
                    });
            }).
            error(function(status) {
                //your code when fails
                alert(status);
            });


    };
});
*/
