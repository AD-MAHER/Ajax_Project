$(document).ready(function(){
    let Products_Array ;




$.ajax({
    url :"./Json/data.json",
    async:false
}).done(function(products){
 0
    Products_Array =  products;
    
 
})



 Products_Array.map( (product)=>{
    
    $("#product_card").append(
        `<div class=" col-12 col-sm-12 col-md-4 col-ld-4 col-xl-3 justify-content-around">
        <div class="card " >
        <img src="${product.img}"
         class="card-img-top" alt="..." style="height: 35vh; width:100% ">
    <div class="card-body  ">
    <div class="card-text d-flex flex-row  justify-content-between card_margin">   
    <p> <strong>₹ ${product.price}</strong> </p>
    
    <img src="./Icons/love-like-svgrepo-com.svg" style="float:right; height: 2vh; width: 2vw; opacity: 0.2;">
    
    </div>
    
    <div class="card-text card_margin" >   
    <p> ${product.title}</p>
    
    
    
    </div>
    </div>
    </div>
    </div>`
    )
    
})




})

