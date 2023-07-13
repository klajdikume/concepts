console.log('kledio');

// variablat
var emri;

var notat = [4,5,6,7,8,9,10];

emri = 'variabli kledio';

console.log(emri);

var numer1 = 5;

var numer2 = 10;

console.log(numer1 + numer2);

// kushtet

// var input = prompt('Ju lutem vendosni moshen');

// if(input > 18) {
//     console.log('Ju mund te aplikoni per patenten')
// }
// else if(input > 15 && input < 17){
//     console.log('Ju mund te aplikoni pas gjimnazit')
// }
// else {
//     console.log('Ju nuk mund te aplikoni per patenten')
// }
var notatPrint;
for(var i = 0; i < notat.length; i++){
    if(notat.length === i - 1){
        notatPrint += `${notat[i]},`;
    }
    else{
        notatPrint += `${notat[i]}`;
    }
    console.log(notat[i]);
}

console.log(notatPrint);
