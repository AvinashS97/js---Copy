// Iterate in Objects
// Object.keys
// Computed Properties
//Spread Operator
//Object destructuring

const person={
    name:"Avinash",    
    age:20,
    "person hobbies": ["Football","Cricket", "Music"],
}

// for(let key in person){
    // console.log( person[key]);
    // console.log(`${key}:${person[key]}`);
    // console.log(key ,":",person[key]);
// }// it show the key of the object
// console.log("ObjectKey",Object.keys(person)) 

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// Computed Properties
// const key1="objkey1";
// const key2="objkey2";

// const value1="myvalue1";
// const value2="myvalue2";

// const obj ={
//     [key1]:value1,
//     [key2]:value2,
// }
// console.log(obj);

//Spread Operator in Array

// const array1=[1,2,3]; //Ex. of spread Operator in Array
// const array2= [5,6,7];
// const Newarray3 = [...array1, ...array2,89, ..."abc"];
// console.log(Newarray3);
                     
// Spread Operator in Object
// const obj1={   
//     key1:"value1",
//     key2:"value2",
// }
// const obj2={
//     key1:"valueChange",
//     key3:"value3",
//     key4:"value4",
// };
// const newObject={...obj1, ...obj2, key10:"value10"};
// const newObject= {..."abc"};
// console.log(newObject)

//Object destructuring ---> create a variable and store the values

const band={
    bandName:"led zeppelin",
    famousSong:"stairway in heaven",
    year:1968,
};
// const bandName= band.bandName;
// const famousSong = band.famousSong;
//OR
// const {bandName, famousSong,...restprp}=band;
// console.log(bandName);
// console.log(famousSong);
// console.log(restprp);

// Objects inside Array ---> to store large number of values...

const users =[
    {userid: 1, firstname:"Avinash", gender: "male"}, 
    {userid: 2, firstname:"Avv", gender: "male"}, 
    {userid: 3, firstname:"Shh", gender: "Female"},
];
console.log(users);
for(let user of users){
    // console.log(user); 
    console.log(user.userid);
}

// Nested destructuring

// const [user1, user2, user3]= users;
// console.log(user1); 
    
// const[{firstname}, ,{gender} ]= users;
// console.log(firstname);
// console.log(gender);

