// create array contain product name and their price

const products = [
    {product:"Bike", price:"100"},
    {product:"TV", price:"200"},
    {product:"Album", price:"10"},
    {product:"Book", price:"5"},
    {product:"Phone", price:"500"},
    {product:"Computer", price:"1000"},

]
// full price of all products combined
let sum = [100,200,10,5,500,100].reduce(function(previousValue, currentValue){
    return previousValue + currentValue
}, 100);
 console.log("SUM:", sum)

