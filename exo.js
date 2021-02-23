/* first step 
create script add that takes two string and returns a string and use console.log()
to show the result. */


let number1 = parseInt("9", 10)
let number2 = parseInt("5", 10)

console.log(typeof  `${number1 + number2}`);
console.log((number1 + number2).toString());


/* Second step 
Cree une fonction add (string)
 - cette methode peux prendre 0, 1 ou 2 nombres separé par une virgule, et retourne la somme.
 - An empty string will return "0".
 - Example of inputs "", "1", "1.1,2.2".
 - The results of this addition "1.1,2.2" need to be "3.3" /!\
 */

function add(numberToAdd) {
    console.log('value of "numberToAdd":' + numberToAdd);

    const numbers = numberToAdd.split(',');
    console.log('value of "numbers": ', numbers);


     if (numberToAdd === '') {
    return '0';
}
    else {
        if (numbers.length > 1) {
        return numbers.reduce((acc, current) => acc += parseInt(current, 10), 0);
        }
  

     else {
    return numberToAdd;
 }   
}
}


const result = add('1,2');

console.log('result: ' + result);