describe "Home page with test list and run button", ->
  it "should show remaining duration", ->
    browser.get "/"
    element(By.binding('remainingEstimatedDuration()')).getText().then (text) ->
      expect(text).toEqual('0 minutes, 5 tests')

  it "should show tests in list", ->
    browser.get "/"
    element.all(By.repeater('test in model.tests')).then (testRows) ->
      firstRow = testRows[0]
      expect(firstRow.getText()).toEqual('Blackout prevention load reduction')

  it "should open closeable modal with test details on click", ->
    browser.get "/"
    expect(browser.isElementPresent(By.binding 'test.purpose')).toBe false

    element.all(By.repeater('test in model.tests')).then (testRows) ->
      testRows[0].click().then ->
        expect(element(By.binding 'test.purpose').getText()).toEqual 'Whole lotta purpose here'

      element(By.id 'modal-close-button').click().then ->
        expect(browser.isElementPresent(By.binding 'test.purpose')).toBe false