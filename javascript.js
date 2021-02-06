/*document.querySelector("h1").style.background="yellow";
"yellow";
document.querySelector("li").classList.toggle("done");
document.querySelector("h1").innerHTML="<strong>???</strong>;
"<strong>!!!</strong>";
var h1=document.querySelector("h1");


var button=document.getElementsByTagName("button")[0]
button.AddEventListener("mouseenter", function(){
    console.log("click !!!");
})*/


var ul=document.querySelector("ul")
var button=document.getElementById("enter")
var input=document.getElementById("userInput");

function inputLenght(){
    return input.value.length;
}
function addListAfterClick(){
        if(input.value.length>0){
        createListElemnt();
}
}
function createListElemnt(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}
function addListAfterKeypress(){  if(input.value.length>0 && event.keyCode === 13){
    createListElemnt();  
}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);