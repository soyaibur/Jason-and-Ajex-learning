var btn = document.getElementById("button");
var animals = document.getElementById("animal-info");



btn.addEventListener('click',function(){
  var OurRequest = new XMLHttpRequest();
  OurRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
  OurRequest.onload = function(){
    var OurData = JSON.parse(OurRequest.responseText);
    renderHtml(OurData);
  
  }
  OurRequest.send();
  
});

function renderHtml(Data){
  var htmlString = "";
    
   for(i = 0; i < Data.length; i++){
    htmlString += "<p>"+ Data[i].name +" is a "+ Data[i].species+", that likes to eat "; 
     for (let all = 0; all < Data[i].foods.likes.length; all++) {
        if (all == 0) {
          htmlString += Data[i].foods.likes[all];
        } else{
          htmlString +=" and "+ Data[i].foods.likes[all];
        }
       
     }

     htmlString += " and dislikes ";
     for (let all = 0; all < Data[i].foods.dislikes.length; all++) {
      if (all == 0) {
        htmlString += Data[i].foods.dislikes[all];
      } else{
        htmlString +=" and "+ Data[i].foods.dislikes[all];
      }
     
   }
     htmlString += "</p>";
  }
  
  animals.insertAdjacentHTML('beforeend',htmlString);

}
