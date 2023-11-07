// step 1 --> get the deposit button
// step 2 --> get the deposit amount from the input field
// step 2.5--> convert deposit amount to number type
// step 3  --> clear the deposit field
// step 4  --> update the deposit value in showing box
// step 5 --> get the previous total and update with the deposit value
// step 6 --> get current balance
// step 7 --> calculate the balance total and update the balance
// document.getElementById("btn-deposit").addEventListener("click", function () {
//   const depositField = document.getElementById("deposit-field");
//   const newDepositAmountString = depositField.value;
//   const newDepositAmount = parseFloat(newDepositAmountString);
//   depositField.value = "";
//   const depositTotalElement = document.getElementById("Deposit-total");
//   console.log(depositTotalElement);
//   const previousDepositTotalString = depositTotalElement.innerText;
//   const previousDepositTotal = parseFloat(previousDepositTotalString);
//   const newDepositTotal = previousDepositTotal + newDepositAmount;
//   depositTotalElement.innerText = newDepositTotal;
//   const BalanceTotalElement = document.getElementById("Balance-total");
//   const previousBalanceTotalString = BalanceTotalElement.innerText;
//   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//   const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//   BalanceTotalElement.innerText = newBalanceTotal;

// });

document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  console.log(newDepositAmount);
  const previousDepositTotal = getTextValueById("Deposit-total");
  console.log(previousDepositTotal);
  const newDepositAmountTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById("Deposit-total", newDepositAmountTotal);
  const previousBalanceTotal = getTextValueById("Balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("Balance-total", newBalanceTotal);
});
