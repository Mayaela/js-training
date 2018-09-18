'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

 function yell (str) {
     return (str.toUpperCase()) ;
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('How are you ?'), 'HOW ARE YOU ?')
assert.strictEqual(yell('howAreYou ?'), 'HOWAREYOU ?')
assert.strictEqual(yell(''), '')

// End of tests */
