// show real products
let products = [
  {
    name: "Black Chair",
    heading: "Very Comfortable Chair",
    price: "15,000",
    image: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg",
  },
  {
    name: "Wooden Table with Chair",
    heading: "Fancy Wooden Table",
    price: "10,000",
    image:
      "https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "White Sofa(4 person)",
    heading: "Very Comfortable Sofa",
    price: "27,000",
    image:
      "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function addProducts() {
  let clutter = "";
  products.forEach((product, index) => {
    clutter += `  <div class="product w-fit rounded-xl p-2 bg-white">
                  <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                  <img class="w-full h-full object-cover"
                            src="${product.image}">
                  </div>
                    <div class="data w-full px-2 py-5">
                       <h1 class="font-semibold leading-none tracking-tight">${product.name}</h1>
                       <div class="flex justify-between w-full items-center mt-2">
                          <div class="w-1/2">
                              <h3 class="font-semibold w-[50%] opacity-20">${product.heading}</h3>
                              <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                          </div>
                          <button data-index="${index}" class="add w-10 h-10 rounded-full shader bg-[#4A4563] text-yellow-400"><i data-index="${index}" class="add ri-add-line"></i></button>
                      </div>
                    </div>
                </div>`;
  });

  document.querySelector(".products").innerHTML = clutter;
}
addProducts();

// on click of the product add button add it to the cart
let cart = [];
function addToCart() {
  document.querySelector(".products").addEventListener("click", (details) => {
    if (details.target.classList.contains("add")) {
      cart.push(products[details.target.dataset.index]);
      showToast("Product added to cart.");
    }
  });
}

function showCart() {
  document.querySelector(".carticon").addEventListener("click", () => {
    document.querySelector(".cartexpnd").style.display = "block";


  let clutter = "";
  cart.forEach((prod) => {
    clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
           <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
              <img class="w-full h-full object-cover" src="${prod.image}" />
           </div>
           <div>
              <h3 class="font-semibold">${prod.name}</h3> 
              <h5 class="text-sm font-semibold opacity-80">&#8377; ${prod.price}</h5>
           </div>
        </div>`;
  });

  document.querySelector(".cartexpnd")
  .innerHTML = clutter;

});

}
showCart();

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show";

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
addToCart();

// show popular or most ordered products
let popular = [
  {
    name: "Combo Chair",
    heading: "Very Comfortable Chair",
    price: "18500",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Office Chairs and Table",
    heading: "Very Comfortable Chair",
    price: "35000",
    image:
      "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Fancy Chairs Combo",
    heading: "Very Comfortable Chair",
    price: "15700",
    image:
      "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function addPopularProducts() {
  let clutter = "";
  popular.forEach((product) => {
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.heading}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
                    </div>
                </div>`;
  });

  document.querySelector(".populars").innerHTML = clutter;
}
addPopularProducts();
