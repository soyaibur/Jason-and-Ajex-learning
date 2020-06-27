var btn = document.getElementById("button");
var animals = document.getElementById("animal-info");



btn.addEventListener('click',function(){
  var OurRequest = XMLHttpRequest();
  OurRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
  OurRequest.onload = function(){
    var OurData = JSON.parse(OurRequest.responseText);
    renderHtml(OurData);
  
  }
  OurRequest.send();
  
});

function renderHtml(Data){
  var dis = "";

  for(i = 0; i < Data.length; i++){
    dis += "<p>"+ Data[i].name +" is a "+ Data[i].species+", </p>"; 
  }
  
  animals.innerHTML = dis;

}
