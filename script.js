

let main = document.querySelector(".main")
let navbar = document.querySelector(".navbar")
let search_icon = document.querySelector("#search-icon")

let search_main = document.querySelector(".search-main")
let cross_icon = document.querySelector("#cross-icon")
let card_bag = document.querySelector("#card-bag")
let rigth_side_bar = document.querySelector(".rigth-side-bar")
let cross_right_bar = document.querySelector("#cross-right-bar")

let addToCard_main = document.querySelector(".addToCard-main")
let sidebar_product_parent = document.querySelector(".sidebar_product_parent")

let view_item_main = document.querySelector(".view-item-main")
let close_view_item = document.querySelector("#close-view-item")
let view_item_content = document.querySelector(".view-item-content")



let mainAll_slider = document.querySelector(".mainAll-slider")
let alldots = document.querySelectorAll(".dot")

let  all_slides_main = document.querySelector(".all-slides-main")
let images_boxes_all = document.querySelectorAll(".images-boxes-all")
let left_btn = document.querySelector(".left-btn")
let right_btn = document.querySelector(".right-btn")

var index = 0;

left_btn.addEventListener("click" , function(){
    index--

    if(index < 0){
        index = images_boxes_all.length -3;
    }
    console.log(index);
    all_slides_main.style.marginLeft = index * -33 + "%"
})

right_btn.addEventListener("click" , function(){
    index++
    if(index > images_boxes_all.length -3){
        index = 0   
    }

    console.log(index);

    all_slides_main.style.marginLeft = index * -33 + "%"
})












alldots.forEach((e, i) => {
    e.addEventListener("click", function(){
        mainAll_slider.style.marginLeft = i*-100 + "%"
    })

})


var total = document.querySelector('#total')



search_icon.addEventListener('click' , ()=>{
    search_main.style.right = "0px"
    search_main.style.transition = "0.5s"
} )

cross_icon.addEventListener('click' , ()=>{
    search_main.style.right = "-100%"
    search_main.style.transition = "0.5s"

})

card_bag.addEventListener('click' , ()=>{
    rigth_side_bar.style.right = "0px"
    rigth_side_bar.style.transition = "0.5s"
})
cross_right_bar.addEventListener('click' , ()=>{
    rigth_side_bar.style.right = "-300px"
    rigth_side_bar.style.transition = "0.5s"


} )




var arry = [

    {
        name : "Macbook Air",
        price: 1099,
        image: "https://novine-react.envytheme.com/images/electronics/electronics-product1.jpg",
    },
    {
        name : "iphone 11",
        price: 699,
        image: "https://novine-react.envytheme.com/images/electronics/electronics-product2.jpg",
    },
    {
        name : "iMac Pro",
        price: 1699,
        image: "https://novine-react.envytheme.com/images/electronics/electronics-product3.jpg",
    },
    {
        name : "Smart Watch",
        price: 359,
        image: "https://novine-react.envytheme.com/images/electronics/electronics-product4.jpg",
    },
    {
        name : "iphone 11",
        price: 699,
        image: "https://novine-react.envytheme.com/images/electronics/electronics-product5.jpg",
    },
    {
        name : "Smartwatch Watchstrap",
        price: 699,
        image: "https://novine-react.envytheme.com/images/electronics/electronics-product6.jpg",
    },

]


arry.map((element, index) => {
    var item = document.createElement("div")
    item.classList.add('addToCard')
    item.innerHTML = `
    <img src="${element.image}" alt="" >
    <h3>${element.name}</h3>
    <p>$${element.price}</p>
    <button onclick="addItem(${index})">ADD TO CART</button>
    <div class="addToCard-icon" onclick = "viewItem(${index})" >
       
                <i class="fa-solid fa-eye"></i>
            </div>
    

    `
    addToCard_main.appendChild(item)
    // console.log("item");
})

function viewItem(index){



   let  item = arry[index];
   view_item_content.innerHTML =`
   <img src = "${item.image}" alt = "" >
  <div class = view-item-content-ph>
   <h3>${item.name}</h3>
   <p>${item.price}</p>
   <p>Vendor: MM Tech Shop</p>
    <p>Availability: In stock (200)</p>
   <p>Product Type: Macbook</p>
   <button>ADD TO CART</button>

   </div>
   
   `
   view_item_content.style.display = 'flex'
   view_item_main.style.opacity = '1'
   view_item_main.style.visibility = "visible"
}
close_view_item.addEventListener('click' , () => {
    view_item_main.style.opacity = "0"
    view_item_main.style.visibility = "hidden"
    view_item_main.style.transition = "0.5s"

})



var sideArry = []

function addItem(index){
    var obj = arry[index]

    var exist = sideArry.find((e,i) => {
        return e.name == obj.name
    })

    if(!exist){
        obj.quantity = 1
        sideArry.push(obj)
    }
    else{
        sideArry =  sideArry.map((e, i) => {
                        if(e.name==obj.name){
                            e.quantity = e.quantity + 1
                            return e
                        }
                        else{
                            return e
                        }
                    })
    }

    // var obj = 0
    // num = 10
    // obj = num

    
    
    
    console.log(sideArry);
    sidebar_product_parent.innerHTML = ""


    sideArry.map((element, index) => {
        var sideitem = document.createElement("div")
        sideitem.classList.add("sidebar-product")
        sideitem.innerHTML = `

       <img src=${element.image} alt="">
                <h5>${element.name}</h5>
                <p>${element.quantity} * $${element.price}</p>
                 <button class="sidebar-minidiv-cross" onclick="deleteItem(${index})">
                 <i class="fa-solid fa-square-xmark"></i>
                 </button>
        
        
        `
        sidebar_product_parent.appendChild(sideitem)
        

        
    })

    sum_Total()
    
}


function deleteItem(index) {
    console.log(index);
    var updatedArray = sideArry.filter((e, i)=>{
        return i != index 
    })

    sideArry = updatedArray



    ///////  same map which is used for product 
    sidebar_product_parent.innerHTML = ""
    sideArry.map((element, index) => {
        var sideitem = document.createElement("div")
        sideitem.classList.add("sidebar-product")
        sideitem.innerHTML = `

       <img src=${element.image} alt="">
                <h5>${element.name}</h5>
                <p>${element.quantity} * $${element.price}</p>
                 <button class="sidebar-minidiv-cross" onclick="deleteItem(${index})">
                 <i class="fa-solid fa-square-xmark"></i>
                 </button>
                 
        
        
        `
        sidebar_product_parent.appendChild(sideitem)
        

        
    })

    sum_Total()

    console.log(updatedArray, "updatedArray");
}



function sum_Total() {
    total.innerHTML = sideArry.reduce((initial, element) => {
                        return initial + parseInt(element.price) * element.quantity
                      }, 0)
}



// "1200"
// 1200



// Item ADD TO CART  (Push)
// Delete item from cart  (filter)
// total price (reduce)
// quantity increment (find)