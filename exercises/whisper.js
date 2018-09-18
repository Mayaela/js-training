'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 function whisper (str) {
     return(str.toLowerCase()) ;
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('How are you ?'), 'how are you ?')
assert.strictEqual(whisper('howAreYou ?'), 'howareyou ?')
assert.strictEqual(whisper(''), '')

// End of tests */
