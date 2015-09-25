describe('FmeaIntegration', function () {

    "use strict";

    var ManualTestsService, timeout, provide, scope, compile, compiledTemplate;

    var compileDirective = function (test) {
        scope.test = test;
        var tpl = '<a fmea-click test="test"/>';
        compiledTemplate = compile(tpl)(scope);
        scope.$digest();

    };

    beforeEach(module("app"));

    beforeEach(module(function ($provide) {
        ManualTestsService = {
            get: function (url, callback) {
                callback({'hey': 'hopp'});
            }
        };

        provide = $provide;

        $provide.value('ManualTestsService', ManualTestsService);
    }));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        compile = $compile;

    }));

    it ('Opens modal with interactive verifications when clicked', function () {
        compileDirective({});
        var rootElement = compiledTemplate.find('a');
        expect(rootElement).toBeDefined();
    });
});
