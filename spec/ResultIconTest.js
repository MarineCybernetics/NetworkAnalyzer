describe('result icon', function() {

    var scope, compile, compiledTemplate

    var compileDirective = function(test) {
        scope.test = test
        var tpl = '<result-icon test="test"/>'
        compiledTemplate = compile(tpl)(scope)
        scope.$digest()

    }

    beforeEach(module("app"))

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new()
        compile = $compile
    }))

    it('Should not display icons for empty statuses', function() {
        compileDirective({})

        var rootElement = compiledTemplate.find('img')
        expect(rootElement[0]).toBeDefined()
        expect(rootElement.hasClass('ng-hide')).toBeTruthy()
        expect(rootElement.attr('ng-src')).toContain('failed')

        scope.test.result = 'passed'
        scope.$digest()
        expect(rootElement.hasClass('ng-hide')).toBeFalsy()
        expect(rootElement.attr('ng-src')).toContain('passed')
    })
})