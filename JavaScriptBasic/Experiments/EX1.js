//  print all even number 0-10 


// for (let i = 0; i < 10; i++) {
    
//     if (i % 2 == 0) {
//         console.log(i);
//     }
    
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

for(let i = 1; i <= 10; i++){
    let row = '';
    for(let j = 1; j <= 10; j++){
        row += i*j + '\t';
    }
    console.log(row);
}
