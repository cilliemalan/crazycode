# crazycode
An encoding like base64 and base58 that looks cooler. Like base64, base64,
hex, octal, etc. crazycode is an encoding that turns binary data into text
and vice-versa. The main differentiator to the previously mentioned encodings is that
crazycode is way cooler.

## Examples

Input: `[1,2,3,4,5]`
Hex: 0102030405
Base64: AQIDBAU=
crazy: uԿખՓЗ

Input: `[100,33,42,209,87]`
Hex: 64212ad157
Base64: ZCEq0Vc=
crazy: ｶɔઙ4ﾊ

Input: (32 random bytes)
Hex: 8262d0c3f0d78c73e00770f68b6f94abe5153d696074e5f755bd7497351675c6
Base64: gmLQw/DXjHPgB3D2i2+Uq+UVPWlgdOX3Vb10lzUWdcY=
crazy: ΔથﾃιમﾘՐՒｪԱmTઌબઋMηldOՔxηyﾅγxધoДʇｽ

## Notes
crazycode will fail to output correctly if the destination (e.g. the console) does not
support unicode (e.g. the Windows cmd console by default).

crazycode (like base64, base58, and hex) does not make the data smaller. It will in practice result
in data that is *way* bigger than the source data. The output, however, will *look* shorter
than base64, base58, or hex (see examples below). All of the characters used in crazycode
are letters or numbers, so crazycode output can usually be selected in its entirety by
double clicking it. Furthermore there are 256 possible characters for crazycode so the
output will have the same number of characters that the input has bytes.

# Using crazycode
How to use:
```
const { encode, decode } = require('crazycode');

const input = [1,2,3,4,5];
const encoded = encode(input);

// outputs: uՀગՔИ
console.log(encoded);

const decoded = decode(encoded);

// outputs: [ 1, 2, 3, 4, 5 ]
console.log(decoded);
```

## Functions
There are two functions: `encode` and `decode`

### Encode
`encode` takes an array or `Buffer` and returns a string. If it's an array it expects
the array to contain numbers between `0` and `255`. If the input contains invalid data
an exception will be thrown.

Example:
```
const input = [1,2,3,4,5];
const encoded = encode(input);

// outputs: uՀગՔИ
console.log(encoded);
```

### Decode
`decode` takes a string and returns an array. If the input contains unacceptable
characters an exception will be thrown.

Example:
```
const input = 'uՀગՔИ';
const decoded = decode(input);

// outputs: [ 1, 2, 3, 4, 5 ]
console.log(decoded);
```

# License
MIT License. Copyright 2008 (c) Cillié Malan. See LICENSE.