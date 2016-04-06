var app = angular.module("app",[]);

app.controller("sendFormCtrl",["$http",function($http) {
	var _this = this;
	_this.username = "";
	_this.userlastname = "";
	_this.sendData = function($valid) {
		if($valid){
			var user = {
				username: _this.username,
				userlastname: _this.userlastname
			};
			$http.post("/user", user).then(function(res) {
				var ans = res.data;
				_this.monitor = "Hi, " + ans.name + ", check your e-mail " + ans.lastname + "! Glad to see you again :)";
				ans = null;
			});
		};
	};
}]);