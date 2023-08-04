
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



// function bigNumberFind (numbers) {
//     let largest = numbers[0]; 
//     for ( let i = 1; i < numbers.length; i ++){
//         const currentItems = numbers[i]; 
//         if (currentItems > largest){
//             largest = currentItems; 
//         }
//     }
//     return largest;      
// }



// const myNumber = [2,6,9,4,9,1,9,13,67]
// console.log(bigNumberFind(myNumber))





// function bigFriend (name) {
//     let largestFriend = name[0]; 
//     for ( let i = 1; i < name.length; i++) {
//         const friends = name[i]; 
//         if ( largestFriend > friends) {
            
//         }
//     }
// }



// const myFriend = ["arif", "rubel", "mamun", "nahamul", "shakil"]



// function myFriend () 



let myFriend = {
    name: "arif", 
    age: 34, 
    phone: "4040404040", 
    address: "jhenaidah"
}


// console.log(myFriend.age); 
// console.log(myFriend["phone"]); 
// const x = "address"; 
// console.log(myFriend[x]); 


const keys = Object.keys(myFriend); 
const valu = Object.values(myFriend)


// for(let key of keys) {
//     console.log(myFriend[key])

// }

for ( let i = 1; i < keys.length; i++){
    const key = keys[i];
    console.log (myFriend[key])
} 