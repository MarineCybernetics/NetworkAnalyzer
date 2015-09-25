describe('UserMessageService', function() {

    var create, open, provide, observer

    beforeEach(module("app"))

    beforeEach(module(function($provide) {
        open = jasmine.createSpy('open')
        provide = $provide
        $provide.value('$modal', {open: open})
        serverConnectStub = {
            observe: function(key, o) {
                observer = o
            }
        }
        $provide.value('ServerConnector', serverConnectStub)
    }));

    beforeEach(inject(function ($injector) {
        create = function() {
            return $injector.get('userMessageService');
        };
    }));

    it('Can be instantiated', function() {
        var cut = create()
        expect(cut).toBeDefined()
        expect(open).not.toHaveBeenCalled()
    })

    it('Will show popup if there are messages', function() {
        var cut = create()

        observer({message: 'Warning!'})
        expect(open).toHaveBeenCalled()
    })

    it('Will not popup if there are no messages', function() {
        var cut = create()

        observer({})
        expect(open).not.toHaveBeenCalled()
    })
})