describe "Debug ctrl", ->
  beforeEach module("app")

  beforeEach -> 
    inject ($controller, $injector) ->
      $rootScope = $injector.get('$rootScope');
      @Request = $injector.get('Request')
      spyOn(@Request, 'get')
      @createController = ->
        return $controller "DebugCtrl", {
          '$scope': $rootScope.$new()
        }

  it "Starts polling server for updates on construction", ->
    inject ($interval) ->
      cut = @createController()
      $interval.flush(1000)
      expect(@Request.get).toHaveBeenCalled()