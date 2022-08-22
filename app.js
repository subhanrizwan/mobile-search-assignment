var iphone7={
name:"iphone7",
battery:"2900MAH",
ram:"32GB",
price:"40,000",
}
var iphone8={
name:"iphone8",
battery:"4000MAH",
ram:"64GB",
price:"65,000",
    }
var iphonex={
name:"iphonex",
battery:"5000MAH",
ram:"64GB",
price:"85,000",
        }

// realme series//

var realme5={
name:"realme5",
battery:"5000MAH",
ram:"64GB",
price:"23,000",
        }
        
var realme6={
    name:"realme6",
    battery:"5000MAH",
    ram:"64GB",
    price:"30,000",
            }
            
var realme7={
    name:"realme7",
    battery:"5500MAH",
    ram:"64GB",
    price:"35,000",
            }
            
var realme8={
    name:"realme8",
    battery:"6000MAH",
    ram:"128GB",
    price:"40,000",
            }
  //vivo series          
var  infinixhot8={
name:"infinixhot8",
battery:"5000MAH",
ram:"64GB",
price:"18,000",
        }
        
var infinixhot9={
    name:"infinixhot9",
    battery:"5000MAH",
    ram:"64GB",
    price:"19,000",
            }
            
var infinixhot10={
    name:"infinixhot10",
    battery:"5000MAH",
    ram:"64GB",
    price:"20,000",
            }
            
var infinixhot11={
    name:"infinixhot11",
    battery:"6000MAH",
    ram:"128GB",
    price:"26,000",
            }


        
        


function search(){
    var input= document.getElementById("inp")
    
    for (var key in iphone7) {
        // console.log(key);
            if(input.value===iphone7[key]){
               console.log(key, iphone7[key]);

               var img= document.getElementById("all_mobiles")
               var spec_text = document.getElementById("space-text")
               if(input.value==="iphone7"){
                
                // var h5 =document.createElement("h5")
                
                // var div = document.createElement("div")
                // var h5 = document.createElement("h5")
                // var textnode = document.createTextNode("price : 25,000","memmory : 32gb")
                // div.appendChild(h5)
                // h5.appendChild(textnode)
                // div.appendChild(spec_text)
                img .src = "./iphone7-removebg-preview.png"
                   
                } 
            }

      }
  for(var key in iphone8){
    if(input.value === iphone8[key]){
        console.log(iphone8[key]);
        
        var img1 = document.getElementById("all_mobiles")
        if("iphone8" === input.value )
        img1.src = "./iphone-8-removebg-preview (1).png"
    }
  }
  
  for(var key in iphonex){
    if(input.value === iphonex[key]){
        console.log(iphonex[key]);
        
        var img2 = document.getElementById("all_mobiles")
        if("iphonex" === input.value )
        img2.src = "./iphonex-removebg-preview.png"
    }
  } 

//   realme series//
for(var key in realme5){
    if(input.value === realme5[key]){
        console.log(realme5[key]);
        
        var img2 = document.getElementById("all_mobiles")
        if("realme5" === input.value )
        img2.src = "./realme5-removebg-preview.png"
    }
  } 
  for(var key in realme6){
    if(input.value === realme6[key]){
        console.log(realme6[key]);
        
        var img2 = document.getElementById("all_mobiles")
        if("realme6" === input.value )
        img2.src = "./realme6-removebg-preview.png"
    }
  } 
  for(var key in realme7){
    if(input.value === realme7[key]){
        console.log(realme7[key]);
        
        var img2 = document.getElementById("all_mobiles")
        if("realme7" === input.value )
        img2.src = "./realme7-removebg-preview.png"
    }
  } 
  for(var key in realme8){
    if(input.value === realme8[key]){
        console.log(realme8[key]);
        
        var img2 = document.getElementById("all_mobiles")
        if("realme8" === input.value )
        img2.src = "./rea_me8-removebg-preview.png"
    }
  } 

//   infinix-series
for(var key in infinixhot8){
    if(input.value === infinixhot8[key]){
        console.log(infinixhot8[key]);
        
        var img2 = document.getElementById("all_mobiles")
        if("infinixhot8" === input.value )
        img2.src = "./hot8-removebg-preview.png"
    }
  } 
  for(var key in infinixhot9){
    if(input.value === infinixhot9[key]){
        console.log(infinixhot9[key]);
        
        var img2 = document.getElementById("all_mobiles")
        if("infinixhot9" === input.value )
        img2.src = "./hot9-removebg-preview.png"
    }
  } 
  for(var key in infinixhot10){
    if(input.value === infinixhot10[key]){
        console.log(infinixhot10[key]);
        
        var img2 = document.getElementById("all_mobiles")
        if("infinixhot10" === input.value )
        img2.src = "./hot10-removebg-preview.png"
    }
  } 
  for(var key in infinixhot11){
    if(input.value === infinixhot11[key]){
        console.log(infinixhot11[key]);
        
        var img2 = document.getElementById("all_mobiles")
        if("infinixhot11" === input.value )
        img2.src = "./hto11-removebg-preview.png"
    }
  } 




}
// iphone8 : {
//     name: "iphone-8",
//     price: "40,000",
//     ram: "3GB",
// },
// iphone10: {
//     // imgSrc: "images/mobiles/Apple/iphone_10/",
//     name: "iphone 10",
//     price: "90,000",
//     ram: "4GB",
    
// },
// }
// }











