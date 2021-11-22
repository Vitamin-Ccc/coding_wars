const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id and returns a new object with name changed to "changed"
const updateTacoName = (name, id) => {
  let new_arry = tacos.map((taco) => {
    if (taco.id !== id) {
      return taco;
    }
    return { ...taco, name: name };
  });

  return new_arry;
};
const updateName = updateTacoName("Changed", 1);
console.log("Updated Name: ", updateName);


// write a function that takes an tacoOBJ and return some formatted html (will be a string technically)
const formattedTaco = () => {
  return tacos.map((taco) => {
    return `<p>${taco.name} taco is ${taco.about}</p>`;
  });
};

const html = formattedTaco();
console.log(html);


// write a function that takes an tacoOBJ and return formatted price with .00 
const formattedPrice = (taco) => {
  let newPrice = taco.price.toFixed(2);
  return {...taco, price: newPrice}
};

console.log(formattedPrice(taco));
console.log(formattedPrice(taco1));
console.log(formattedPrice(taco2));


// create a new array where all of the prices is formatted with .00
// use .map (taco)



// write a function that takes an array and logs each item in the array hint forEach



// use the find method to return the object with id:1



// return a new array with all prices greater than 19



// return a new array with a 'about' key where it is a combo of

// name price and about




///CRUD

// don't change tacos array or change objects




// READ (array of obj to array of html) 

// Update (update a taco) 

// Remove (delete a taco) 

// Create (add a taco) 


