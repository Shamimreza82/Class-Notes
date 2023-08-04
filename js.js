
// function myNumber(number) {
//     let sum = 0;
//     for (let items of number) {
//         if (items % 2 === 1) {
//             sum = sum + items
//         }
//     }
//     return sum;
// }

// const numbers = [2, 4, 5, 7, 8, 5, 5, 7];
// const result = myNumber(numbers)
// console.log(result);



function bigNumberFind (numbers) {
    let largest = numbers[0]; 
    for ( let i = 1; i < numbers.length; i ++){
        const currentItems = numbers[i]; 
        if (currentItems > largest){
            largest = currentItems; 
        }
    }
    return largest;      
}



const myNumber = [2,6,9,4,9,1,9,13,67]
console.log(bigNumberFind(myNumber))





