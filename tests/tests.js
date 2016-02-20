var assert = chai.assert;

suite('temperature', function() {
    test('0 c = 32.0 Farenheit = 273.1 Kelvin', function() {
        original.value = "0 c";
        calculate();
        assert.deepEqual(converted.innerHTML, "32.0 Farenheit");
        assert.deepEqual(converted2.innerHTML, "273.1 Kelvin");
    });
    test('32ºF = 0.0 Celsius = 273.1 Kelvin', function() {
        original.value = "32ºF";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
        assert.deepEqual(converted2.innerHTML, "273.1 Kelvin");
    });
    test('7.2 => Error: will get an error, missing unit.', function() {
        original.value = "7.2";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
        assert.match(converted2.innerHTML, /ERROR/);
    });
    test('-2cel => error "will get an error, Unrecognized Unit".', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
        assert.match(converted2.innerHTML, /ERROR/);
    });
    test('45c notEqual 0.0 Farenheit', function() {
        original.value = "45c";
        calculate();
        assert.notEqual(converted.innerHTML, "0.0 Farenheit");
        assert.notEqual(converted2.innerHTML, "0.0 Farenheit");
    });
    test('-2.3e-4f = -17.8 Celsius = 255.4 Kelvin', function() {
        original.value = "-2.3e-4f";
        calculate();
        assert.equal(converted.innerHTML, "-17.8 Celsius");
        assert.equal(converted2.innerHTML, "255.4 Kelvin");
    });
    test('-2.3e-4kelvin = -459.7 Farenheit  = -273.2 Celsius', function() {
        original.value = "-2.3e-4kelvin";
        calculate();
        assert.equal(converted.innerHTML, "-459.7 Farenheit");
        assert.equal(converted2.innerHTML, "-273.2 Celsius");
    });
});
