var pageCounter = 1;
var das = document.getElementById("animal-info");
document.getElementById("button").addEventListener('click',function(){
  var ourRequest =new XMLHttpRequest();
  ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
  ourRequest.onload = function(){
     var ourData = JSON.parse(ourRequest.responseText);
     renderHTML(ourData);
  }
  ourRequest.send();
  pageCounter++;
});

function renderHTML(data){
  var htmlString = "";

  for (let i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name +"is a " + data[i].species +".</p>";
    
  }
 das.insertAdjacentHTML('beforeend', htmlString);
}