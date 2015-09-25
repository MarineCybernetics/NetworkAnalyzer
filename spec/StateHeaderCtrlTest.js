describe('State header', function () {

    var scope, serverConnectStub, testsService, observer, hotkeys;

    beforeEach(function (_session_, _$window_) {


        serverConnectStub = {
            observe: function (key, o) {
                if (key === 'status') {
                    observer = o;
                }
            }
        };
        testsService = {

        };
        hotkeys = {
            add: function () {},
            bindTo: function (scope) { return hotkeys; }
        };
        module("app");
        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            var controller = $controller('StateHeaderCtrl', {$scope: scope, TestsService: testsService, ServerConnector: serverConnectStub, hotkeys: hotkeys});
        });
    });

    it('Should switch buttons depending on service status', function () {
        observer('idle');
        expect(scope.isIdle()).toBe(true);
        observer('running');
        expect(scope.isRunning()).toBe(true);
    });
});