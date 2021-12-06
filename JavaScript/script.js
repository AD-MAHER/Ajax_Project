// write program for odd even number

$(document).ready(function () {
  let Products_Array;
  $.ajax({
    url: "./Json/data.json",
    async: false,
  }).done(function (products) {
    Products_Array = products;
  });


  // let commonFilter =Products_Array;


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
    // commonFilter =Products_Array ;
    $("input").prop("checked" , false)
    $("#product_card").empty();
    Products_Array.map(obj);
    
  } )



  // =======================================================================
  $("#collapseColor input").on("change", () => {
    selectedValues.COLOR = [];

    
    // if($("#collapseColor input").is(":checked" ) ){
    // }
      $("#collapseColor input:checked").each(function () {
 
        selectedValues.COLOR.push($(this).val());
      });

    filteredAll ()
  });

  // =======================================================================

  $("#collapseDiscounts input").on("change", () => {
    selectedValues.DISCOUNTS = [];


    // if($("#collapseDiscounts input").is(":checked" ) ){    }
      $("#collapseDiscounts input:checked").each(function () {
        selectedValues.DISCOUNTS.push($(this).val());  
      
    });
    filteredAll ()
  });


  $("#collapseProductType input").on("change", () => {
    selectedValues.PRODUCT_TYPE = [];
    $("#collapseProductType input:checked").each(function () {
      selectedValues.PRODUCT_TYPE.push($(this).val());
      
    });
    filteredAll ()
  });


  $("#collapseCatagories input").on("change", () => {
    selectedValues.CATAGORIES = [];
    $("#collapseCatagories input:checked").each(function () {
      selectedValues.CATAGORIES.push($(this).val());

    });
    filteredAll ()
  });


  $("#collapseSize input").on("change", () => {

    selectedValues.SIZES = [];

    $("#collapseSize input:checked").each(function () {
      selectedValues.SIZES.push($(this).val());
      console.log(selectedValues.SIZES);
      

// *********************
    });
    filteredAll ()
  });



 
function  filteredAll (){
  let commonFilter =Products_Array;
  console.log("value",selectedValues);
  console.log("called");
  // commonFilter =Products_Array;
  filteredColor = [];
  
  Products_Array.forEach(function (product) {
    if (selectedValues.COLOR.includes(product.Color)) {
      filteredColor.push(product);
    }
   
  });
  if(selectedValues.COLOR.length !== 0){
    // console.log("------------------->",selectedValues.COLOR);
    commonFilter = filteredColor;
  }



  filteredDiscounts = [];
  commonFilter.forEach(function (product) {
    if (selectedValues.DISCOUNTS.includes(product.Discounts)) {
      filteredDiscounts.push(product);
      console.log("if ---------------" ,   commonFilter);
    }
    // else if(selectedValues.DISCOUNTS.length == 0){

    //   console.log("else ---------------" ,   commonFilter);
    //   // console.log("------------------->",selectedValues.COLOR);
    //   filteredDiscounts = commonFilter;
    // }

  });
  if(selectedValues.DISCOUNTS.length !== 0){
    commonFilter = filteredDiscounts;
  }


  filteredProductType = [];
  commonFilter.forEach(function (product) {
    if (selectedValues.PRODUCT_TYPE.includes(product.Product_Type)) {
      filteredProductType.push(product);
    }
  });
  if(selectedValues.PRODUCT_TYPE.length !== 0){
    commonFilter = filteredProductType;
  }




  filteredCatagories = [];
  commonFilter.forEach(function (product) {
    if (selectedValues.CATAGORIES.includes(product.Categories)) {
      filteredCatagories.push(product);
    }
  });
  if(selectedValues.CATAGORIES.length !== 0){
    commonFilter = filteredCatagories;
  }  



  filteredSizes = [];
commonFilter.forEach(function (product) {
    product.size.forEach(function (sz){
        if (selectedValues.SIZES.includes(sz) ) {
            if(!filteredSizes.includes(product)){
                filteredSizes.push(product);
            }
            
          }
      })
  
  });

  if(selectedValues.SIZES.length !== 0){
    commonFilter = filteredSizes;
  }  
  $("#product_card").empty();
    commonFilter.map(obj);
    
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

  Products_Array.map(obj);
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
