// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "productimages/product1.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "productimages/product2.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "productimages/product3.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "productimages/product4.jpg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "productimages/product5.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "productimages/product6.jpg",
    description: "Good looking Traditional Dress",
  },  {
    id: 7,
    name: "Carribean Dress",
    size: "L",
    color: "Maroom",
    price: 1450,
    image: "productimages/product7.jpg",
    description: "A Champion Drees for Man",
  },
  {
    id: 8,
    name: "Denim Shirts",
    size: "XL",
    color: "Blue",
    price: 2500,
    image: "productimages/product8.jpg",
    description: "Denim Hot Looks",
  },
  {
    id: 9,
    name: "Banarassi Sarre",
    size: "L",
    color: "Red-Gold",
    price: 5500,
    image: "productimages/product9.jpg",
    description: "Beautiful Outlooks For Weddings",
  },
  {
    id: 10,
    name: "Jumpsuit",
    size: "S",
    color: "Yellow",
    price: 1000,
    image: "productimages/product10.jpg",
    description: "Children's Comfortable",
  },
  {
    id:11,
    name: "Sherwani",
    size: "XXL",
    color: "Green",
    price: 6000,
    image: "productimages/product11.jpg",
    description: "Trandition Delights",
  },
  {
    id: 12,
    name: "Angel Dress",
    size: "L",
    color: "Pink",
    price: 4500,
    image: "productimages/product12.jpg",
    description: "Diva's Match",
  },
];
console.log(products)
cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product w3-card w3-animate-zoom  w3-black w3-text-white">
        <div class="prodimg ">
          <img src="${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product w3-card w3-animate-zoom  w3-white w3-text-black ">
        <div class="prodimg ">
          <img src="${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

let count;
function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);
  count=document.getElementById("count").value;
  const existing = cart.find(item => item.id === pro.id) //line1
  
  if(existing){ //line2
  alert('This product is already added in the cart.'); //line3
  }
  else{
  //   putting in cart
  cart.push(pro);
  displayProducts(cart, "cart");
  count++;
  document.getElementById("count").value=count;
  }
}
function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
    
  });


  //   removing from cart based on index
  cart.splice(index, 1);
  count--;
  document.getElementById("count").value=count;
  displayProducts(cart, "cart");
}



function filterProduct() {
  minimumPrice=document.getElementById('min').value
  maximumPrice=document.getElementById('max').value
 let filteredProducts = products.filter(function(product) {
        return  product.price >= minimumPrice && product.price <= maximumPrice
  });
  displayProducts(filteredProducts)
  
}
