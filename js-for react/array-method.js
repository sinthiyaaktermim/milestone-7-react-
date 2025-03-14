const products = [
  
  {name:'laptop',price:3200,brand:'lenovo',color:'silver'},
  {name:'phone',price:2200,brand:'phone',color:'silver'},
  {name:'watch',price:32300,brand:'watch',color:'golden'},
  {name:'sunglassses',price:3400,brand:'sunglass',color:'silver'},


]

// const brands = products.map(product =>product.brand);
// console.log(brands);


// products.forEach(product =>console.log(product)

// )

// products.forEach(product => console.log(product.color))

// const cheap = products.filter( product =>product.price <= 5000);

// const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);


const special = products.find( product => product.name.includes('p'));
console.log(special);