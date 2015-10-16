var assert = chai.assert;

suite('temperature', function() {
    test('32F = 37.8 Celsius', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('32ºF = 37.8 C', function() {
        original.value = "32ºF";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('7.2 = 113.0 Farenheit', function() {
        original.value = "7.2 ";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    test('-2cel = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    test('45c isnot 0.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.notEqual(converted.innerHTML, "0.0 Farenheit");
    });
    test('-2.3e-4f = -19.1 Celsius', function() {
        original.value = "-2.3e-4f = ";
        calculate();
        assert.equal(converted.innerHTML, "-19.1 Celsius");
    });
});
