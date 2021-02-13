var input = document.getElementById('itemAdd');
var amount = document.getElementById('itemAmount');
var addbtn = document.getElementById('addbtn');
var clear = document.getElementById('clearbtn');
var output = document.getElementById('output');
var items = [];
var amounts = [];

addbtn.addEventListener('click',()=>{
  if(input.value != null && !items.includes(input.value)){
    items.push(input.value);
    amounts.push(amount.value);

    output.innerHTML += `<div class="item"><h3>Item: ${input.value}</h3><p>Amount: ${amount.value}</p></div>`;
    localStorage.setItem('list', items)
    localStorage.setItem('amounts', amounts)
  }else if(items.includes(input.value)){
    alert("Item already added");
  }else{
    alert("Error");
  }
});

clear.addEventListener('click',()=>{
    output.innerHTML = "";
    items = [];
});
