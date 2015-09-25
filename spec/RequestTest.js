describe('Request', function() {

    var open, close, create, http

    beforeEach(module("app"))

    beforeEach(module(function($provide) {

        close = jasmine.createSpy('modalInstance.close')
        open = jasmine.createSpy('modal.open').andCallFake(function() {
            return { close: close }
        })
        provide = $provide
        $provide.value('$modal', {open: open});
    }));

    beforeEach(inject(function ($injector) {
        http = $injector.get('$httpBackend')
        create = function() {
            return $injector.get('Request');
        };

    }));


    it('displays error modal when connection is lost and closes modal when connection is back up', function() {
        var request = create()
        var emptyCallback = function() {}

        http.expectGET('/crashes').respond(500, '');
        request.get('/crashes', emptyCallback)
        http.flush()
        expect(open).toHaveBeenCalled()

        http.expectGET('/works').respond(200, '');
        request.get('/works', emptyCallback)
        http.flush()
        expect(close).toHaveBeenCalled()
    })
})