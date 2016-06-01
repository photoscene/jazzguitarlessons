(function() {
    angular.module('guitarlessons')
    
    .config(function (BackandProvider) {
        BackandProvider.setAppName('guitarlessons');
        BackandProvider.setSignUpToken('003c6b69-f0bb-474d-a5af-f4185979d575');
        BackandProvider.setAnonymousToken('aa09c549-18c9-4d1f-9f8e-922f73abbe76');
    })

})();