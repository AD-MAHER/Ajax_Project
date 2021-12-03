// write program for odd even number

$(document).ready(function () {
  let Products_Array;
  $.ajax({
    url: "./Json/data.json",
    async: false,
  }).done(function (products) {
    Products_Array = products;
  });


  let commonFilter =Products_Array


  let selectedValues = {
    DISCOUNTS: [],
    CATAGORIES: [],
    SIZES:[],
    COLOR: [],
    PRODUCT_TYPE: [],
  };

  let filteredColor = [];
  let filteredDiscounts = [];
  let filteredCatagories = [];
  let filteredProductType = [];

  let filteredSizes = [];


  
  $("#clear_all").on("click",()=>{
    commonFilter =Products_Array ;
    commonFilter.map(obj);
  } )

  $("#collapseColor input").on("change", () => {
    selectedValues.COLOR = [];
    

    $("#collapseColor input:checked").each(function () {
      selectedValues.COLOR.push($(this).val());
    });
    filteredColor = [];

   commonFilter.forEach(function (product) {
      if (selectedValues.COLOR.includes(product.Color)) {
        filteredColor.push(product);
      }
    });
    commonFilter = filteredColor;
    console.log(filteredColor);
    filteredAll ()
  });

  $("#collapseDiscounts input").on("change", () => {
    selectedValues.DISCOUNTS = [];
    $("#collapseDiscounts input:checked").each(function () {
      selectedValues.DISCOUNTS.push($(this).val());

      filteredDiscounts = [];
      commonFilter.forEach(function (product) {
        if (selectedValues.DISCOUNTS.includes(product.Discounts)) {
          filteredDiscounts.push(product);
        }
      });
      commonFilter = filteredDiscounts
      console.log(filteredDiscounts);
      filteredAll ()
    });
  });


  $("#collapseProductType input").on("change", () => {
    selectedValues.PRODUCT_TYPE = [];
    $("#collapseProductType input:checked").each(function () {
      selectedValues.PRODUCT_TYPE.push($(this).val());

      filteredProductType = [];
      commonFilter.forEach(function (product) {
        if (selectedValues.PRODUCT_TYPE.includes(product.Product_Type)) {
          filteredProductType.push(product);
        }
      });
      commonFilter = filteredProductType
      console.log(filteredProductType);
      filteredAll ()
    });
  });


  $("#collapseCatagories input").on("change", () => {
    selectedValues.CATAGORIES = [];
    $("#collapseCatagories input:checked").each(function () {
      selectedValues.CATAGORIES.push($(this).val());

      filteredCatagories = [];
      commonFilter.forEach(function (product) {
        if (selectedValues.CATAGORIES.includes(product.Categories)) {
          filteredCatagories.push(product);
        }
      });
      commonFilter = filteredCatagories
      console.log(filteredCatagories);
      filteredAll ()
    });
  });


  $("#collapseSize input").on("change", () => {

    selectedValues.SIZES = [];

    $("#collapseSize input:checked").each(function () {
      selectedValues.SIZES.push($(this).val());
      console.log(selectedValues.SIZES);
      filteredSizes = [];

// *********************



commonFilter.forEach(function (product) {
    product.size.forEach(function (sz){
        if (selectedValues.SIZES.includes(sz) ) {
            if(!filteredSizes.includes(product)){
                filteredSizes.push(product);
            }
            
          }
      })
  
  });



  commonFilter = filteredSizes
      console.log(filteredSizes);
      filteredAll ()
    });
   
  });



 
  let xyz =[]
function  filteredAll (){
    commonFilter=[]


 commonFilter = filteredColor.concat(filteredDiscounts,filteredCatagories,filteredSizes,filteredProductType)

  xyz = new Set(commonFilter)
console.log(xyz);

    document.getElementById("product_card").innerHTML = " "
    Array.from(xyz).map(obj);


    
}







let obj = (product) => {
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
    );
  }


  commonFilter.map(obj);




});

// console.log($(this).val());
// if($("#collapseColor input").is(":checked")){
//     console.log($("#collapseColor input").val());
// }

// selectedValues.COLOR.forEach(function(color) {
//     Products_Array.forEach(function(product){
//   if(product.Color.includes(color)){

//     console.log(product.Color);
//   }
//     })

// });

// console.log(selectedValues);
// console.log(product.Color);
