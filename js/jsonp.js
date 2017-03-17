/**
 * Created by admin on 2017/2/16.
 */
angular.module('moviecatJsonpApp',[]).service('jsonpService', ['$window',function ($window) {
    this.jsonp= function (url,data,fn) {
        var callbackName = 'jsonp'+new Date().getTime()+Math.random().toString().substr(2);
        var script = document.createElement('script');
        script.src=url;
        data.jsonpCallback=callbackName;
        script.src=script.src+"&jsonpCallback="+data.jsonpCallback;
        $window.document.body.appendChild(script);
        $window[data.jsonpCallback]= function (data) {
            fn(data);
            $window.document.body.removeChild(script)
        };
    }
}])