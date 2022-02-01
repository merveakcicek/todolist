let ulListDomInfo = localStorage.getItem("ulListDOM")
let taskDOM  = document.querySelector("#tasks") 
let ekleBtnDOM = document.querySelector("#ekleBtn") 
let ulListDOM = document.querySelector("#list") 
ulListDOM.innerHTML = ulListDomInfo

ekleBtnDOM.addEventListener('click',Ekle) 
let myNodeList = document.getElementsByTagName("li")
for (let i = 0;i< myNodeList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
  }

let close = document.getElementsByClassName("close");
for ( let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    localStorage.setItem("ulListDOM",ulListDOM.innerHTML)
  }
  
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function Ekle(){
    let newLi = document.createElement('li')
    if(taskDOM.value == ''){
        $(".error").toast("show")
    }
    else {
        
        ulListDOM.appendChild(newLi) 
        newLi.innerHTML = taskDOM.value 
        $(".success").toast("show")
    }
   
    taskDOM.value=""; 
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newLi.appendChild(span);
    localStorage.setItem("ulListDOM",ulListDOM.innerHTML)
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}