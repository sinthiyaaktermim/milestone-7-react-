const number = [34,56,89];
const student ={
  name:"mim",
  age:34,
  movies:['dharak','marak']
}

// template string

const about = `my name is ${student.name} , age is ${student.age},has number ${number[2]},also like movies ${student.movies[1]}

`;
console.log(about);


// arrow function

const getFiftyFive = ()=>55;
const addSixtyFive = (num)=>num +65;
const isEven = x => x%2=== 0; 
const Muliply = (x,y,z)=> (x + y + z);
const doMath = (num1,num2)=> {
  const sum = num1 + num2;
  return sum
}

// spread operator 

const newNumbers = [...number];

number.push(99);
console.log(newNumbers);
console.log(number);