describe('UserInputService', function() {

    var create, open, provide, storedObserver

    beforeEach(module("app"))

    beforeEach(module(function($provide) {
        open = jasmine.createSpy('open')
        provide = $provide
        $provide.value('$modal', {open: open});
        $provide.value('TestsService', {getRunningTest: function() {return {}}});
        serverConnectStub = {
            observe: function(key, o) {
                storedObserver = o
            },
            findTest: function() {
                return {}
            }
        }
        $provide.value('ServerConnector', serverConnectStub)
    }));

    beforeEach(inject(function ($injector) {
        create = function() {
            return $injector.get('userInputService');
        };

    }));

    it('Can be instantiated', function() {
        var cut = create()
        expect(cut).toBeDefined()
        expect(open).not.toHaveBeenCalled()
    })

    it('Will show modal if any test has status pending', function() {
        var cut = create()
        storedObserver({testKey: 'testKey', verificationKey:'verificationKey'})
        expect(open).toHaveBeenCalled()
    })
})