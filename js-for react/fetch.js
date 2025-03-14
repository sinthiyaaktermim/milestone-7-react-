const student ={
  name:"mim",
  age:34,
  movies:['dharak','marak']
}

const studentJson=JSON.stringify(student);
console.log(studentJson);
const studentObject = JSON.parse(studentJson);
console.log(studentObject);

// fetch
fetch('url')
then(res=>res.json());
then(data=>console.log(data))