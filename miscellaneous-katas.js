// wrap all the related katas in a module (JS Module Pattern)
var miscKatas = (function () {
    var module = {};

    // KATA: function that returns the number of vowels in a given string
    module.vowelCounter = function (str) {
        var count = 0;
        // if something other than a string is passed in then return 0
        if (str) {
            var i, vowels = ['a', 'e', 'i', 'o', 'u'];
            for (i = 0; i < str.length; i++) {
                if (vowels.indexOf(str[i]) > -1) {
                    count++;
                }
            }
        }
        return count;
    };

    return module;
}());

// test suites go into a separate module
var tests = (function (miscKatas) {
    var module = {};

    // private function that builds a friendly test result message
    var buildTestResult = function (success) {
        return success ? 'success' : 'fail';
    };
    module.vowelCounterTests = function () {
        var success = (miscKatas.vowelCounter("hola") === 2) && 
            (miscKatas.vowelCounter("123454") === 0) && 
            (miscKatas.vowelCounter(null) === 0) && 
            (miscKatas.vowelCounter(undefined) === 0);
        console.log('vowelCounterTests: ' + buildTestResult(success));
    };

    return module;
}(miscKatas));

// run the tests within the 'tests' module
tests.vowelCounterTests();
