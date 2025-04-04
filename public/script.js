async function getData(url){
    try{
      let response = await fetch(url);
      let result = await response.json();
      drawTable(result);
   }catch(e){
       console.log(e);
   }
 }
 getData("https://api.openbrewerydb.org/breweries/search?query=harry")


 function drawTable(records){
    let result = document.querySelector('#result');
    
    let html = '';
    for(let record of records){
        
        html += `<tr id="${record.id}">
          <td>${record.id}</td>
          <td>${record.name}</td>
          <td>${record.brewery_type}</td>
          <td><a href="#${record.id}" onclick="getData('https://api.openbrewerydb.org/breweries/${record.id}', drawDetails)" >View More Details</a></td>    
        </tr>`;
    }
    result.innerHTML = html;
}

console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent)
console.log(navigator.platform);

console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
  window.location.assign(url);
}

window.onload = function(event){
   console.log("Page has loaded");
   
}

const result = document.querySelector('#result');
result.innerHTML = '<h2>My Span</h2>';
result.style.color = 'blue';

<script>
<input id="myBtn" type="button" onclick="myFun()" value="click me"/>

<script>
  function myFun(){
    alert("hello");  
  }

  function myFun2(){
    console.log("myFun2 called");
  }

  function logEventType(event){
    console.log(event.type);
  }

  let myBtn = document.querySelector("#myBtn");

</script>
</script>

let obj2 = myobj;


obj2.name = "Shelly";

console.log(myobj.name);


let obj3 = {};
Object.assign(obj3, myobj);

obj3.name = 'Smith';

console.log(myobj.name, obj3.name);
