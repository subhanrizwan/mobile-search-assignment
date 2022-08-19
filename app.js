var mobile={
    iphone:{
name:"iphone7plus",
battery:"2900MAH",
ram:"32GB",
price:"40,000",
},
}

function search(){
    var input= document.getElementById("inp")
    
    for (var key in mobile) {
        // console.log(key);
            if(input.value===mobile[key].name){
               console.log(mobile[key].name);

               var img = document.getElementById("img")
               if(input.value==="iphone7plus"){
                   img .src = "./iphone7plus.png  "
                   
    //                window.location="searched.html"
    // var res = document.getElementById("result")
    // var card = document.getElementById("search-card").value
    // res.appendChild(card)
                 
                //    var div = document.createElement("div")
                //    var h5 = document.createElement("h5")
                //    var textnode=document.createTextNode("ram 32gb","price 50,000")
                //    div.appendChild(h5)
                //    h5.appendChild(textnode)
                // div.innerHTML = h5.innerHTML
                // h5.innerHTML=textnode.innerHTML

                } 
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











