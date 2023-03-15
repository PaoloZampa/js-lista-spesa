//creo array
const shopList = [
    '3 Peperoni',
    '2 Melanzane',
    '4 Carote',
    '1Kg Farina',
    '4Kg Patate',
    'Dentifricio',
    'Spazzolino',
]

console.log(shopList);

let i = 0

const ulElement = document.querySelector("ul")

while (i < shopList.length) {

    //creo nuovo elemento li
    let newProduct = document.createElement("li");

    //innerhtml
    newProduct.innerHTML = shopList[i];

    //appendo li a ul
    ulElement.appendChild(newProduct);

    //incremento
    i++;
}