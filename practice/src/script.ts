// console.log("Hello");

// let a:string = "Bangladesh";
// console.log(a);

// let text = " I love BD" ;
// console.log(text);
//
// let num : number = 34;
// console.log(num);

// let a:boolean;
// let b:string;
//  a = true;
//  b="false";

// let arr:number[]; //if I don't want to push

let arr:string[] = []; //if I want to push

arr.push("Sholayman");
arr.push("sojib");
arr.push("24");
// console.log(arr)


// let newArr : (string | number | boolean)[] = [];
let newArr : (string | number)[] = [];
// newArr.push(true);
newArr.push(24);
newArr.push("Sholayman");
console.log(newArr);

let obj:{
    name:string,
    age:number,
    adult:boolean
};

// obj = {
//     name:"Sholayman",
//     age:25,
//     adult:"true"
// }

obj = {
    name:"Sholayman",
    age:25,
    adult:true
}

// let newObj:{};
// newObj= [1,2,3]

let newObj:{
    unemployed:boolean;
};

// newObj= [1,2,3]  ==> error

newObj={
    unemployed:true
}




