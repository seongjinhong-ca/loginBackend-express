// 1
let a = { year: 2012, month: 6, day: 14 }
let b = { year: 2012, month: 6, day: 14 }

a === b

// 2
a = { year: 2012, month: 6, day: 14 }['day']

// 3
const unique = () => [],
      x = unique(),
      y = unique(),
      z = unique(),
      o = { a: x, b: y, c: z };

o['a'] === x && o['b'] === y && o['c'] === z
  //=> true

// 4
a = { 'first name': 'reginald', 'last name': 'lewis' }['first name']
  //=> 'reginald'

a =  
{
  ["p" + "i"]: 3.14159265
}
  //=> {"pi":3.14159265}

const Mathematics = {
  abs: (a) => a < 0 ? -a : a
};

Mathematics.abs(-5)
  //=> 5

const SecretDecoderRing1 = {
  encode: function (plaintext) {
    return plaintext
      .split('')
      .map( char => char.charCodeAt() )
      .map( code => code + 1 )
      .map( code => String.fromCharCode(code) )
      .join('');
  },
  decode: function (cyphertext) {
    return cyphertext
      .split('')
      .map( char => char.charCodeAt() )
      .map( code => code - 1 )
      .map( code => String.fromCharCode(code) )
      .join('');
  }
}


const SecretDecoderRing2 = {
  encode: function encode (plaintext) {
    return plaintext
      .split('')
      .map( char => char.charCodeAt() )
      .map( code => code + 1 )
      .map( code => String.fromCharCode(code) )
      .join('');
  },
  decode: function decode (cyphertext) {
    return cyphertext
      .split('')
      .map( char => char.charCodeAt() )
      .map( code => code - 1 )
      .map( code => String.fromCharCode(code) )
      .join('');
  }
}

const SecretDecoderRing3 = {
  encode (plaintext) {
    return plaintext
      .split('')
      .map( char => char.charCodeAt() )
      .map( code => code + 1 )
      .map( code => String.fromCharCode(code) )
      .join('');
  },
  decode (cyphertext) {
    return cyphertext
      .split('')
      .map( char => char.charCodeAt() )
      .map( code => code - 1 )
      .map( code => String.fromCharCode(code) )
      .join('');
  }
}