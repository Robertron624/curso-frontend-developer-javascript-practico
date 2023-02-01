const menuEmail = document.querySelector(".navbar-email")

const hiddenMenu = document.querySelector(".desktop-menu")


menuEmail.addEventListener("click", toggleDesktopMenu)


// Menu mobile left
const menuHamburger = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

menuHamburger.addEventListener("click", toggleMobileMenu)


// Menu minicart
const miniartIcon = document.querySelector(".navbar-shopping-cart")
const asideMinicart = document.querySelector(".product-detail")

miniartIcon.addEventListener("click", toggleMenuMinicart)



// Toggle active/inactive functions

function toggleDesktopMenu () {
    const isAsideMinicartClosed = asideMinicart.classList.contains("inactive")

    if(!isAsideMinicartClosed){
        asideMinicart.classList.add("inactive")
    }

    hiddenMenu.classList.toggle("inactive")
}


// Toggle menu mobile only when mobile and when burguer Menu is clicked

function toggleMobileMenu() {
    const isAsideMinicartClosed = asideMinicart.classList.contains("inactive")

    if(!isAsideMinicartClosed){
        asideMinicart.classList.add("inactive")
    }
    
    menuMobile.classList.toggle("inactive")
}


// Toggle minicart


function toggleMenuMinicart() {

    const isMobileMenuClosed = menuMobile.classList.contains("inactive")

    if(!isMobileMenuClosed){
        menuMobile.classList.add("inactive")
    }

    asideMinicart.classList.toggle("inactive")

}


// Product list section

const productList = []


productList.push(
    {
        name: "Bike",
        price: 120,
        imageSrc: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)
productList.push(
    {
        name: "Monitor",
        price: 220,
        imageSrc: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)
productList.push(
    {
        name: "Patineta",
        price: 320,
        imageSrc: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)

const cardContainer = document.querySelector(".cards-container")

for(let product of productList) {
    productCard = document.createElement("div")
    productCard.classList.add("product-card")

    const img = document.createElement("img")
    img.setAttribute("src", product.imageSrc)

    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p")
    productPrice.innerText = `$${product.price}`


    const productName = document.createElement("p")
    productName.innerText = product.name


    const productInfoFigure = document.createElement("figure")
    const imgMinicart = document.createElement("img")
    imgMinicart.setAttribute("src", "./icons/bt_add_to_cart.svg")

    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productInfoDiv)
    productInfoDiv.append(productPrice, productName)
    productInfoFigure.appendChild(imgMinicart)
    productInfo.appendChild(productInfoFigure)

    cardContainer.append(productCard)

}