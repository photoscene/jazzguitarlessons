!function(){angular.module("appController",["backand","categoryServices"]).controller("navCtrl",function(e,a,t,n){e.mainCategories=[],e.subCategories=[],t.getMainCategories().then(function(a){e.mainCategories=a.data}),t.getSubCategories(n.parent).then(function(a){e.subCategories=a.data})})}();