'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase (str) {
    let strCapital = '' ;
    const wordArray = (str.split(' ')) ;  
    for (let i = 0 ; i < wordArray.length ; i++) {
        let lowerCase = (wordArray[i].slice(1)).toLowerCase() ;
        let upperCase = ((wordArray[i])[0]).toUpperCase() ;
        strCapital = strCapital + upperCase + lowerCase ;
        if (i === wordArray.length - 1) {
          break ;
        }
        strCapital += ' ' ;
    }
    return strCapital ;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
assert.strictEqual(jadenCase('HOW ARE YOU ?'), 'How Are You ?')
assert.strictEqual(jadenCase('hOW arE YoU ?'), 'How Are You ?')



// End of tests */
// End of tests */
