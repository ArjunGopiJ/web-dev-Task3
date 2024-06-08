var but=document.getElementById("but")
var j=document.querySelector(".j")
var h=document.getElementById("h")
but.addEventListener("click",function(){
    j.style.display="block"
    h.style.display="block"
})
var can=document.getElementById("can")
var h=document.getElementById("h")
var j=document.querySelector(".j")
can.addEventListener("click",function(event){
    event.preventDefault()
    h.style.display="none"
    j.style.display="none"
})
var con=document.querySelector(".con")
var ad=document.getElementById("ad")
var h=document.getElementById("h")
var j=document.querySelector(".j")
var tit=document.getElementById("tit")
var aut=document.getElementById("aut")
var des=document.getElementById("des")

ad.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box")
    div.innerHTML=`<h1>${tit.value}</h1>
    <h4>${aut.value}</h4>
    <p>${des.value}
    </p>
    <button onclick="del(event)">Delete</button>`
    h.style.display="none"
    j.style.display="none"
    con.append(div)
})
function del(event){
    event.target.parentElement.remove()
}