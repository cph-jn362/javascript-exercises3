let hej = "Hej med dig!";

const array = ["peter", 7, "marianne", true, "helle", 8];

let text = "";
for (let i = 0; i < 5; i++){
    console.log(array[i] + " is a " + typeof array[i]);
}

const product = [
    { name: "computer", price: 3000, quantityInStock : 10 },
    { name: "tv", price: 8000, quantityInStock : 5 },
    { name: "headphones", price: 800, quantityInStock : 12 },
    { name: "speakers", price: 1500, quantityInStock : 3}
]

// quantity is set to 0
let quantityInStock = 0;

// loop through all objects in product array
for(let i = 0; i < 4; i++){
    // i (index) is used to output all objects from the product array
    console.log(product[i]);
    // .quantityInStock is used to output the values of quantityInStock 
    console.log(product[i].quantityInStock);
    // override variable to find the total value of quantityInStock
    quantityInStock = quantityInStock + product[i].quantityInStock;
}

console.log(quantityInStock);

if(number < 10){
    greeting = "the number is less than 10"; 
} else if(number > 10){
    greeting = "the number is higher 10";
} else{
    greeting = "not defined";
}

