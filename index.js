var input = document.getElementById('itemAdd');
var amount = document.getElementById('itemAmount');
var addbtn = document.getElementById('addbtn');
var clear = document.getElementById('clearbtn');
var output = document.getElementById('output');
var items = [];
var amounts = [];

document.addEventListener("DOMContentLoaded",()=> {
  var oldItems = JSON.parse(localStorage.getItem('items'));
  var oldAmounts = JSON.parse(localStorage.getItem('amounts'))
  if(oldItems != null){
    oldItems.forEach((item, i) => {
        output.innerHTML += `<div class="item"><h3>Item: ${item}</h3><p>Amount:${oldAmounts[i]}</p></div>`;
    });
  }
});

addbtn.addEventListener('click',()=>{
  if(input.value != null && !items.includes(input.value)){
    items.push(input.value);
    amounts.push(amount.value);

    output.innerHTML += `<div class="item"><h3>Item: ${input.value}</h3><p>Amount: ${amount.value}</p></div>`;
    localStorage.setItem('items', JSON.stringify(items))
    localStorage.setItem('amounts', JSON.stringify(amounts))
  }else if(items.includes(input.value)){
    alert("Item already added");
  }else{
    alert("Error");
  }
});

clear.addEventListener('click',()=>{
    output.innerHTML = "";
    items = [];
    localStorage.removeItem('items');
    localStorage.removeItem('amounts');
});
