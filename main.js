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