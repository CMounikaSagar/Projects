// GENERICS EXAMPLE

function HomePage<T extends object, U extends object>(objA: T, objB: U) {

  return Object.assign(objA, objB);

}

const data = HomePage({name:'Hello',class:12},{age:"10"}) 

  console.log(data.name,data.age);

export default HomePage;