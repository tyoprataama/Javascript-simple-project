const resultArray = [];
//  Input the word bellow to convert to whale language
const input = 'Hanzel and Grettel';
const vowels = ['a', 'i', 'u', 'e', 'o'];
for (let i = 0; i < input.length; i++) {
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    }
    if (input[i] === 'u') {
        resultArray.push(input[i]);
    }
    // console.log('is '+ i);
    for (let j = 0; j < vowels.length; j++) {
        // console.log('is ' + j);
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);