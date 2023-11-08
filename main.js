const myObj = {
    id: 'C001',
    name: 'Ajan',
    address : 'Matale'
};
const myArray = [10,20,30,40,50];

console.log(myObj instanceof Object); //to check either object

for(const property in myObj){
    console.log(property)
}
for(const index in myArray){
    console.log(index , myArray[index])
}
console.log("------------------------------")

for(const property in RegExp){
    console.log(property) //not a enumerable property
}

console.log("------------------------")

// for(const property of myObj){ not a iterable object
//     console.log(property)}

for(const value of myArray){
    console.log(value)
}

console.log(myObj[Symbol.iterator]);
console.log(myArray[Symbol.iterator]);
console.log(myObj[Symbol.iterator] ? 'iterable':'Non-iterable');
console.log(myArray[Symbol.iterator] ? 'iterable':'Non-iterable');

// const myObj2 = {
//     id: 'C002',
//     name: 'Ajan',
//     address : 'Matale',
//     [Symbol.iterator]:function*(){
//         yield this.id;
//         yield this.name;
//         yield this.address;
//     }
// };
// console.log(myObj2[Symbol.iterator] ? 'iterable':'Non-iterable');
// for(const value of myObj2){
//     consol.log(value);
// }