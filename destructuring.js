/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */


// Destructuring arrays
let ages =[30,26,27];
let [john,emmy,laila]=ages;
console.log(john,emmy,laila);



// Destructuring objects
let jobs = {
    mike:"designer",
    jill:"developer",
    alicia:"accountant",
};
let {mike,jill,alicia} = jobs;
console.log(mike,jill,alicia);
console.log(mike);




// Destructuring subsets
let languages = ['english','french','spanish','german','japanese'];
let [johnNative,johnSecondary,...rest]=languages;
console.log(johnNative,johnSecondary,rest);
//skips first items for assigning to new variable using ,
let [,,member1,,member2]=languages;
console.log(member1,member2);

let languages2 =  {
    firsl : 'english',
    second: "french",
    thirdl:"spanish",
    fourth:"japanese",
    
};
let {firsl,thirdl} = languages2;
console.log(firsl,thirdl);



// Using rest parameter syntax
