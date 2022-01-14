console.log('Задание № 1');
let a = [];
let m = 0;
let n = 100;
let count = 100;

for ( let i = m; i < count; ++i ) {
    a.push( Math.round(Math.random() * n) );
}

console.log(a);

console.log('Задание № 2');
var str = 'Привет,мир!';
str = str.split("").reverse().join("");
console.log(str)

console.log('Задание № 3');

let roadMines = [false, false, false, false, false, false, false, false, false, false];

console.log('Танк перемещается..');

let live = 2;

for (let i=0; i < roadMines.length; i++){

    console.log (`Танк переместился на позицию ${i+1}`)
    if (roadMines[i]===true && live>1) {
        live -= 1;
        console.log('Танк поврежден');
    }
    else if (roadMines[i]===true && live>0) {
        live -= 1;
        console.log('Танк уничтожен');
        break;
     
    }
}

console.log('Задание № 4');
let array = [];
let week = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];

let day = "среда";
let indexWeek = week.indexOf(day);

for (let i = 1; i < 32; i++){
    array.push(i);
}

for (let i = 0; i< week.length; i++){
    if (week[i] === day) {
        indexWeek = i;
    }
}

for (let elem of array){
    const y = (indexWeek + elem - 1) % 7;
    console.log (`${elem} января, ${week[y]}`);
}






