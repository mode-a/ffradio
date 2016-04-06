var app = angular.module("app", []);

app.controller("sendFormCtrl", ["$scope", "$http", function ($scope, $http) {
    $scope.sendData = function () {
        $http({
            url: "/user",
            method: "post",
            data: {
                username: $scope.username,
                userlastname: $scope.userlastname
            }
        }).then(function (res) {
            var ans = res.data;
            $scope.monitor = "Hi, " + ans.name + " " + ans.lastname + "! Glad to see you again :)";
        })
    }
}]);