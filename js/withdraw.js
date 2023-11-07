/* 
step 1 --> add event handler with withdraw button 
step 2 --> get the withdraw amount 
step 3 --> clear the input field 
step 4 --> get previous withdraw total 
step 5 --> calculate withdraw total and update it 
step 6 --> get previous balance 
step 7 --> calculate new balanceTotal and update with main balance 

*/
// document.getElementById("btn-withdraw").addEventListener("click", function () {
//   const withdrawField = document.getElementById("withdraw-field");
//   const newWithdrawAmountString = withdrawField.value;
//   const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//   withdrawField.value = "";

//   const withdrawTotalElement = document.getElementById("Withdraw-total");
//   const previousWithdrawTotalString = withdrawTotalElement.innerText;
//   const withdrawTotal = parseFloat(previousWithdrawTotalString);
//   const newWithdrawAmountTotal = withdrawTotal + newWithdrawAmount;
//   withdrawTotalElement.innerText = newWithdrawAmountTotal;
//   const balanceElement = document.getElementById("Balance-total");
//   const previousBalanceTotalString = balanceElement.innerText;
//   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
//   balanceElement.innerText = newBalanceTotal;
// });

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextValueById("Withdraw-total");
  const newWithdraw = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("Withdraw-total", newWithdraw);
  const previousBalanceTotal = getTextValueById("Balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("Balance-total", newBalanceTotal)
});
