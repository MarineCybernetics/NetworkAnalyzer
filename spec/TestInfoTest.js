describe('Test info', function() {

    var scope, compile, compiledTemplate

    var compileDirective = function(test) {
        scope.test = test
        var tpl = '<test-info test="test"/>'
        compiledTemplate = compile(tpl)(scope)
        scope.$digest()
    }

    beforeEach(module('app')) // Needed to load templates

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new()
        compile = $compile
    }))

    it('Should at least contain some html', function() {
        compileDirective({})
        var rootElement = compiledTemplate.find('a')
        expect(rootElement[0]).toBeDefined()
    })
})