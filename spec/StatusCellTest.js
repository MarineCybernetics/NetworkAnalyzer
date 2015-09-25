describe('result icon', function() {

    var scope, compile, compiledTemplate

    var compileDirective = function(test) {
        scope.test = test
        var tpl = '<status-cell test="test"/>'
        compiledTemplate = compile(tpl)(scope)
        scope.$digest()

    }

    beforeEach(module("app"))

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new()
        compile = $compile
    }))

    it('Should not display icons for empty statuses', function() {
        compileDirective({status: 'waiting'})
        var rootElement = compiledTemplate.find('img')
        expect(rootElement[0]).toBeDefined()
    })

    it('Should display only one status element when running and failed', function() {
        compileDirective({status: 'running', result: 'failed', progress: 45})
        expect(compiledTemplate.length).toBe(1)
    })
})