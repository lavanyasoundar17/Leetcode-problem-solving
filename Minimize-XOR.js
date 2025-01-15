/*Given two positive integers num1 and num2, find the positive integer x such that:

x has the same number of set bits as num2, and
The value x XOR num1 is minimal.
Note that XOR is the bitwise XOR operation.

Return the integer x. The test cases are generated such that x is uniquely determined.

The number of set bits of an integer is the number of 1's in its binary representation.
*/

function minimizeXor(num1, num2) {
    // Helper function to count the number of set bits (1's) in a number
    function count(num) {
        return num.toString(2).split('1').length - 1;
    }
    
    // Number of set bits in num2
    let target = count(num2);
    let result = 0;
    
    // Add set bits from the most significant bit of num1 to minimize XOR
    for (let i = 31; i >= 0 && target > 0; i--) {
        if ((num1 & (1 << i)) !== 0) {
            result |= (1 << i);
            target--;
        }
    }
    
    for (let i = 0; i <= 31 && target > 0; i++) {
        if ((result & (1 << i)) === 0) {
            result |= (1 << i);
            target--;
        }
    }
    
    return result;
}
