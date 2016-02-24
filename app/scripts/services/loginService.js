'use strict';

angular.module('testApp')
    .service('LoginService', function() {
        var userData = {};

        function fnSetUserDetails(user) {
            userData = user;
            console.log(userData);
        }

        return {
            getUserDetails: function() {
                return userData.mailId

            },
            fnSetUserDetails: fnSetUserDetails // check
        }
    });


/* function(username, password) {

  // create a new instance of deferred
  var deferred = $q.defer();

  // send a post request to the server
  $http.post('/user/login', {username: username, password: password})

    // handle success
    .success(function (data, status) {
      if(status === 200 && data.status){
        user = true;
        deferred.resolve();
      } else {
        user = false;
        deferred.reject();
      }
    })


    // handle error
    .error(function (data) {
      user = false;
      deferred.reject();
    });


  // return promise object
  return deferred.promise;

} */
