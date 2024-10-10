let cash = document.getElementById("cash");
let displayChangeDue = document.getElementById("change-due");
let purchaseBtn = document.getElementById("purchase-btn");

let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

function checkCashRegister(){
if (!cash.value){
  return null;
}

 if(cash.value < price){
  alert("Customer does not have enough money to purchase the item")
  cash.value = "";
  return;
 }
 else if (cash.value == price){
 displayChangeDue.innerHTML = "No change due - customer paid with exact cash";
 cash.value = "";
 return;
}
}
purchaseBtn.addEventListener("click", checkCashRegister);