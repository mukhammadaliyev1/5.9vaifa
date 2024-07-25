import { createCard } from "./function.js"



const wrapper = document.getElementById("wrapper")




document.addEventListener("DOMContentLoaded", function(){
fetch("https://strapi-store-server.onrender.com/api/products")
.then(res=>{
    if(res.status == 200){
        return res.json()
    }
})
.then(data=>{
    if(data.data.length){
        data.data.forEach(function(product){
            let card = createCard(product)
            wrapper.innerHTML +=  card;
        })
    }


    let cards = document.querySelectorAll(".card")
    cards.length && cards.forEach(function(card){
        card.addEventListener("click", function(){
            let id = this.getAttribute('data-id')
            window.location.assign(`http://127.0.0.1:5500/pages/detalies.html?id=${id}`)
        })
    })
})
.catch(err=>{
    console.log(err);
})
})