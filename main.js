// Цикл - используются для многократного повтора каких то действий


// ++  прибавляет нам 1 (инкримент)
// --  отнимает у нас 1 (дикремент)


// var i = 0;

// console.log(i);
// console.log(++i); // префикс - сперва прибавляет а потом выводит значение
// console.log(i++); // постфикс - сперва выводит значение а потом прибавляет
// console.log(i++);
// console.log(i++);


// var i = 0;

// while(i < 10) {
//    console.log(i);
//    i++; 
// }

// цикл будет выполняться до тех пор пока итератор ( i ) не достигнет 10


// var i = 0;

// do{
//     console.log(i);
//     i++
// }while(i < 10)


// do {
//     var x = +prompt('Введите любое число');
// }while( isNaN(x) || x <  10) {
//     console.log('Вы ввели число ' + x);
// }




// let - создает нам локальную переменную  и она не выходит за пределами своих фигурных скобок



// for(let i = 0; i < 10;i++) {
//     if(i %2 == 1) {
//         console.log(i);
//     }
// }


// let even = 0;

// for(let i = 0; i <= 11;i++) {
    
//     even += (i %2 == 0) ? 1 : 0
// }

// console.log(even);

{
let a = +prompt ('Выберите число');
let x = +prompt ('Выберите степень');
let result = 1;


for(let i = 1; i <= x;i++) {
    result *= a
}
alert("Ваш ответ " + result);}


//  {let num = 0
//  let a = +prompt ('Выберите количество переменных');
//  let b = prompt ('Выберите тип переменных');
//  let c = prompt ('Выберите последний символ');

//  for(let i = 0; i < a; i++){
//      let symbol = a;
//     for(let i = 0; i < a; i++){
//         line += b
//     }
//     console.log(a)}

{
let a = +prompt ('Выберите количество переменных')
let b = prompt ('Выберите тип переменных')
let c = prompt ('Выберите последний символ')
for (let i = 0; i < a; i++) {
    let line = ''
    for(let j = 0; j < i; j++) {
      line += b
    }
    console.log(line + c)
  }
}
  

//    console.log('Ваш результат ' + result)+c;}


    // for (let i = 0; i < 5; i++) {
    //     let line = ''
    //     for(let j = 0; j < i; j++) {
    //       line += '9'
    //     }
    //     console.log(`${line}*`)
    //   }

//     let a = +prompt ('Выберите количество переменных');
//     let b = prompt ('Выберите тип переменных');
//     let c = prompt ('Выберите последний символ');
//     let i = 0;

// while(i <= a) {
//    console.log(a*b+c);
//    i++; 
