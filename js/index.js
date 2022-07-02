// increase decrease handler
const increaseDecreaseHandler = (product, isIncrease, price) => {
  const productInput = document.getElementById(product + "-amount");
  const productInputNumber = parseInt(productInput.value);
  let productPrice = document.getElementById(product + "-price");
  if (isIncrease) {
    const productItem = productInputNumber + 1;
    productInput.value = productItem;
    productPrice.innerText = productItem * price;
  } else {
    if (productInput.value > 0) {
      const productItem = productInputNumber - 1;
      productInput.value = productItem;
      productPrice.innerText = productItem * price;
    }
  }
  totalCalculations(product, price);
};
// get input function
const getInputValue = (product) => {
  const phoneInput = document.getElementById(product + "-amount");
  const phoneInputNumber = parseInt(phoneInput.value);
  return phoneInputNumber;
};
// total calculation
const totalCalculations = () => {
  const phoneItem = getInputValue("phone");
  const caseItem = getInputValue("case");
  const subTotal = phoneItem * 1219 + caseItem * 59;
  const tax = subTotal * 0.05;
  const total = subTotal + tax;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax").innerText = tax.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
};

//   phone increase
const increasePhone = () => {
  increaseDecreaseHandler("phone", true, 1219);
};
//   phone decrease
document
  .getElementById("decrease-phone")
  .addEventListener("click", function () {
    increaseDecreaseHandler("phone", false, 1219);
  });
//   case increase
const caseIncrease = () => {
  increaseDecreaseHandler("case", true, 59);
};
// case decrease
const caseDecrease = () => {
  increaseDecreaseHandler("case", false, 59);
};
