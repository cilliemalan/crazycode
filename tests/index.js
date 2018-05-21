'use strict';
var errors = 0;
var crazy = this.crazy;

if (typeof require == 'function') {
    crazy = require('..');
}
var encode = crazy.encode
var decode = crazy.decode;

function ok(wut) {
    if (!wut) throw "Assertion failure";
}

function same(a, b) {
    if (a != b) throw "Not same";
}

function equal(a, b) {
    if (a !== b) throw "Not equal";
}

function runtests(tests) {
    for (var test in tests) {
        try {
            tests[test]();

            console.log(test + ': SUCCESS!');
        }
        catch (e) {
            ++errors;
            console.error(test + ': FAILED! \n' + e);
        }
    }
}


var tests = {
    'encode does not fail': function () {
        encode([1, 2, 3, 4, 5]);
    },
    'encode resturns a string': function () {
        ok(typeof encode([1, 2, 3, 4, 5]) == 'string');
    },
    'encode returns a string that is the same length as input': function () {
        ok(encode([1, 2, 3, 4, 5]).length == 5);
    },
    'decode does not fail': function () {
        decode('abcde');
    },
    'decode resturns an array with the same length as input': function () {
        ok(decode('abcde').length == 5);
    },
    'encode -> decode returns same as input': function () {
        var a = [1, 2, 3, 4, 5];
        var e = encode(a);
        var d = decode(e);
        for (var i = 0; i < a.length; ++i) equal(a[i], d[i]);
    },
    'decode -> encode returns same as input': function () {
        var a = 'abcde';
        var d = decode(a);
        var e = encode(d);
        for (var i = 0; i < a.length; ++i) equal(a[i], e[i]);
    },
    'can encode 256 different chars with indempotence': function () {
        var a = [];
        for (var i = 0; i < 256; ++i) a[i] = i;
        var e = encode(a);
        var d = decode(e);
        for (var i = 0; i < a.length; ++i) equal(a[i], d[i]);
    },
    'can encode 256 different chars with double indempotence': function () {
        var a = [];
        for (var i = 0; i < 256; ++i) a[i] = i;
        var e1 = encode(a);
        var d1 = decode(e1);
        var e2 = encode(d1);
        var d = decode(e2);
        for (var i = 0; i < a.length; ++i) equal(a[i], d[i]);
    }
}

console.group('Running Tests...')
runtests(tests);
console.groupEnd();

if (errors) {
    console.error('There were ' + errors + ' errors');
}

if (typeof process == 'object' && typeof process.exit == 'function') {
    process.exit(errors);
}
