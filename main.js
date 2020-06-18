var animalContainer = document.getElementById("animal-info");

var btn = document.getElementById("button");
btn.addEventListener("click",function(){
 
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    randerHtml(ourData);
  };
  
  ourRequest.send();

});

function randerHtml(data){
  var htmlString = 
  animalContainer.insertAdjacentHTML('beforeend',htmlString);
}


var ourHeadline = document.getElementById("kaka");
var items = document.getElementById("our-list").getElementsByTagName("li");

for(i=0; i < items.length; i++){
  items[i].addEventListener("click",pado);
}

function pado(){
   ourHeadline.innerHTML = this.innerHTML;
};