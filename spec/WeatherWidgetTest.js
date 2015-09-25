describe('weather widget', function() {

var scope, compile, compiledTemplate, serverConnector, observer

    var compileDirective = function() {
        var tpl = '<weather-widget></weather-widget>'
        compiledTemplate = compile(tpl)(scope)
        scope.$digest()
    }

    var serverConnectorStub = {
        observe: function(key, o) {
            if (key == 'weather')
                observer = o
        }
    }

    beforeEach(module('app'))

    beforeEach(module(function($provide) {
        provide = $provide
        $provide.value('ServerConnector', serverConnectorStub)
    }));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new()
        compile = $compile
    }))

    it('should display default (unknown) text about wave height and wind', function() {
        compileDirective()
        var text = compiledTemplate.text()
        expect(text).toContain('- m/s')
        expect(text).toContain('- m')
        expect(text).toContain('- m/s')
    })

    it('should connect to server on load', function() {
        compileDirective()
        expect(observer).toBeDefined()
    })

    it('should update gui on receiving messages from server', function() {
        compileDirective()
        observer({windValue: '10', windAngle: '35', waveValue: '14', waveAngle: '125', currentValue: '10', currentAngle: '215'})
        scope.$digest()
        var text = compiledTemplate.text()
        expect(text).toContain('10.00 m/s')
        expect(text).toContain('14.00 m')
        expect(text).toContain('10.00 m/s')
    })

});