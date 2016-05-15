(function() {
    angular.module('guitarlessons', ['appStructure', 'ngRoute', 'backand'])
    .config(function (BackandProvider) {
        BackandProvider.setAppName('guitarlessons');
        BackandProvider.setSignUpToken('003c6b69-f0bb-474d-a5af-f4185979d575');
        BackandProvider.setAnonymousToken('90c6dd38-125c-43d9-a27b-18fe44c64590');
    });

})();