describe('TestsService', function () {

    var observer, create, scope
    var tests = [
        {estimatedDuration: 60},
        {estimatedDuration: 60},
        {estimatedDuration: 53}
    ]

    beforeEach(module("app"))

    beforeEach(module(function($provide) {
        var serverConnectStub = {
            observe: function(key, o) {
                if (key === 'tests')
                    observer = o
            }
        }
        $provide.value('ServerConnector', serverConnectStub)
    }));

    beforeEach(inject(function ($injector) {
        create = function() {
            return $injector.get('TestsService');
        };
    }));


    it('Should show total estimated time for tests to be run', function () {
        var cut = create()
        observer(tests)
        expect(cut.getTotalEstimatedDuration()).toEqual('3 minutes, 3 tests')
    })

    it('Should only estimate duration for selected tests', function () {
        var cut = create()
        observer(tests)
        cut.getTests()[0].isSelected = false
        expect(cut.getTotalEstimatedDuration()).toEqual('2 minutes, 2 tests')
    })

    it('Displays alert when user tries to run tests and none are selected', function () {
        var cut = create()
        observer(tests)
        _.each(cut.getTests(), function(test) {
            test.isSelected = false
        })
        var success = cut.runAll('full')
        expect(success).toBe(false)
    })

})
