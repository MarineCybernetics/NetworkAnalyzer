describe('ServerConnector', function() {

    var create, Request, timeout, provide

    beforeEach(module("app"))

    beforeEach(module(function($provide) {
        Request = {
            get: function(url, callback) {
                callback({'hey': 'hopp'})
            }
        }

        provide = $provide

        $provide.value('Request', Request)
    }));

    beforeEach(inject(function ($injector) {
        create = function() {
            return $injector.get('ServerConnector');
        };

    }));


    it('Receives subscriptions for keywords and notifies on updates', function() {
        inject(function($interval) {
            var cut = create()
            var spy1 = jasmine.createSpy('observer1')
            var spy2 = jasmine.createSpy('observer2')

            cut.observe('hey', spy1)
            cut.observe('hey', spy2)

            $interval.flush(1000)
            expect(spy1).toHaveBeenCalledWith('hopp')
            expect(spy2).toHaveBeenCalledWith('hopp')
        })
    })

    it ('polls server every second for data', function() {
        inject(function($interval) {
            var get = jasmine.createSpy('request.get')
            provide.value('Request', {get: get})
            var cut = create()
            expect(get.callCount).toBe(1)
            $interval.flush(1000)
            expect(get.callCount).toBe(2)
            $interval.flush(1000)
            expect(get.callCount).toBe(3)
        })
    })
})