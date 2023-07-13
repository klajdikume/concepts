// javascript gjuhe programimi qe nderton aplikacione ne web.

console.log('kledio');

console.log('futboll')

// algoritmi
// detyra, instruksione qe ekzekutohen hap pas hapi

// nderto nje algoritem qe vendos moshen dhe tregon nese ja moshen e patentes ose jo

// mosha > 18 ->  printo Ok perndryshe duhen dhe x vite

// variabel eshte nje hapsire ne memorie te kompjuterit, ruan vlera ne memorie

let mosha = 19; 

// kushtet, nese

if(mosha >= 18) {
    //ekezekutohet kur if eshte i vertete
   console.log('mund ta besh pantenten');
}
else{
    // perndryshe -> ekzekutohet vetem kur if eshte i pavertete
    console.log('ti nuk mund ta besh patenten');
}

// nese
// perndryshe
// algoritem, variabli, kushtet if else

// variabli eshte baraz 0 afishoje ne shkronje 'zero'
// nese eshte 1 afishoje me 'nje'
// pernryshe afishohe numrin 

let numri = 2;

if(numri === 0 ){
    console.log('zero');
}
else if(numri===1){
    console.log('nje')

}
else{
    console.log(numri);
}

// variablie eshte > 6 dhe < 12 afisho miremengjes
// variabli eshte >= 12 dhe <=16 afisho miredita
// variabli eshte > 16 afisho mirembre

let ora= 3;

if(ora >0 && ora <12 ){
    console.log('miremengjes');
}
else if (ora >=12 && ora <= 16){
    console.log('miredita');
}
else if(ora > 16 && ora < 24){
    console.log('Mirembrema');
}
