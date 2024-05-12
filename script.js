//selecting popup-box,button,popupoverlay
var overlaypopup = document.querySelector(".overlay-popup")
var popupbox = document.querySelector(".popup-box")
var addpopup =document.getElementById("add-popup")

addpopup.addEventListener("click", function(){
     overlaypopup.style.display ="block"
     popupbox.style.display ="block"
})



//selecting cancle button
var canclebook =document.getElementById("cancle-book")
canclebook.addEventListener("click", function(event){
    event.preventDefault()
    overlaypopup.style.display ="none"
    popupbox.style.display ="none"
})

//selecting contianer-items,add-book btn,booktitle-ip,author-name-ip,Book-description

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle_ip = document.getElementById("booktitle-ip")
var authornameip= document.getElementById("author-name-ip")
var bookdescription =document.getElementById("Book-description")

addbook.addEventListener("click",function(event){
            event.preventDefault()
            var div= document.createElement("div")
           div.setAttribute("class","container-items")
        div.innerHTML=`<h2>${booktitle_ip.value}</h2>
        <h4>${authornameip.value}</h4>
        <p>${ bookdescription.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
            container.append(div)
            overlaypopup.style.display ="none"
            popupbox.style.display ="none"
        
})

function deletebook(event){
    event.target.parentElement.remove()
}