/* 
Coding Warmup:
Given a string of words containing capitalized words, return a new string where each word that's capitalized is separated by a comma.
@params {string} = string with capitalized words inside
@returns {string} = string with the capitalized words separated


examples:
'WelcomeToPursuitInQueensNewYork' => 'Welcome, To, Pusuit, In, Queens, New, York'


*/

function createProperConcatonate(str) {
    let concatonatedArr = str.split('');

    for(let i in concatonatedArr) {
        if(concatonatedArr[i]=== concatonatedArr[i].toUpperCase()) {
            concatonatedArr[i-1] += ', '
        }
    }
    return concatonatedArr.join('');
}

function splitWithCommas(str){
    let words = str.match(/[A-Z][a-z]+/g);
    // console.log(words)
    return words.join(', ');
}

splitWithCommas('WelcomeToPursuitInQueensNewYork')
console.log(createProperConcatonate('WelcomeToPursuitInQueensNewYork'))

