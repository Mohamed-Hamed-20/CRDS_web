let title    = document.getElementById("title");
let price    = document.getElementById("price");
let taxes    = document.getElementById("taxes");
let ads      = document.getElementById("ads");
let discount = document.getElementById("discount");
let total    = document.getElementById("total");
let count    = document.getElementById("count");
let category = document.getElementById("category");
let create   = document.getElementById("submit");

function calc_total()
{   
    if (price.value == "") {

        total.style.backgroundColor = "red";

    }else {
        let reasult = (+price.value + +taxes.value + +ads.value)- +discount.value ;
        total.style.backgroundColor = "green";
        total.innerHTML = reasult
    }

}
let myprd ;
if (localStorage.getItem("products") != null) {
    myprd = JSON.parse(localStorage.getItem("products"));
}else{
    myprd =[];
}


create.onclick =function(){
    let probj = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,

    }
    myprd.push(probj);
    localStorage.setItem("products",JSON.stringify(myprd));
    console.log(JSON.parse(localStorage.getItem("products")));
    clear_data();

} 


function clear_data() {
    title.value = "";
    price.value="";
    taxes.value="";
    ads.value="";
    discount.value="";
    total.innerHTML="";
    category.value="";
    count.value="";
    
}

function show_data() {
    let table = "";
    for (let index = 0; index < myprd.length; index++) {
        table = myprd[index].title; 
        
        console.log(table);
        
    }
    console.log(index);
}


