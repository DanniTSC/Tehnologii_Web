const arr = [123,54,5,65];

const filteredarr = arr.filter(el => el % 2 === 0);
// 3 == '3' e true pentru ca 2 egaluri nu verifica si tipu ca unul e string unu e numar 3 === '3' false, inegalitate !==

const arr1 = [1,2,3,4];

const foreacharr = arr1.forEach(item => {return item});

const mapArr = arr1.map(item => {return item});

console.log(foreacharr);
console.log(mapArr);