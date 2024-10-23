"use strict";
//Comp: 1
const imgBorder1 = document.querySelector(".img-border-1");
const imgBorder2 = document.querySelector(".img-border-2");
const imgBorder3 = document.querySelector(".img-border-3");
const imgBorder4 = document.querySelector(".img-border-4");
const imgBorder5 = document.querySelector(".img-border-5");
const imgBorder6 = document.querySelector(".img-border-6");
const imgBorder7 = document.querySelector(".img-border-7");
const imgBorder8 = document.querySelector(".img-border-8");
const imgBorder9 = document.querySelector(".img-border-9");

//Comp: 1
const imgBorderMobile1 = document.querySelector(".img-border-1-mobile");
const imgBorderMobile2 = document.querySelector(".img-border-2-mobile");
const imgBorderMobile3 = document.querySelector(".img-border-3-mobile");
const imgBorderMobile4 = document.querySelector(".img-border-4-mobile");
const imgBorderMobile5 = document.querySelector(".img-border-5-mobile");
const imgBorderMobile6 = document.querySelector(".img-border-6-mobile");
const imgBorderMobile7 = document.querySelector(".img-border-7-mobile");
const imgBorderMobile8 = document.querySelector(".img-border-8-mobile");
const imgBorderMobile9 = document.querySelector(".img-border-9-mobile");

//Comp: 1
const cartBtn1 = document.querySelector(".cartbtn1");
const cartBtn2 = document.querySelector(".cartbtn2");
const cartBtn3 = document.querySelector(".cartbtn3");
const cartBtn4 = document.querySelector(".cartbtn4");
const cartBtn5 = document.querySelector(".cartbtn5");
const cartBtn6 = document.querySelector(".cartbtn6");
const cartBtn7 = document.querySelector(".cartbtn7");
const cartBtn8 = document.querySelector(".cartbtn8");
const cartBtn9 = document.querySelector(".cartbtn9");

//Comp: 1
const plusminusBtn1 = document.querySelector(".plusminus-btn1");
const plusminusBtn2 = document.querySelector(".plusminus-btn2");
const plusminusBtn3 = document.querySelector(".plusminus-btn3");
const plusminusBtn4 = document.querySelector(".plusminus-btn4");
const plusminusBtn5 = document.querySelector(".plusminus-btn5");
const plusminusBtn6 = document.querySelector(".plusminus-btn6");
const plusminusBtn7 = document.querySelector(".plusminus-btn7");
const plusminusBtn8 = document.querySelector(".plusminus-btn8");
const plusminusBtn9 = document.querySelector(".plusminus-btn9");

//Comp: 1
const incrementImg1 = document.querySelector(".increment-img1");
const decrementImg1 = document.querySelector(".decrement-img1");

const incrementImg2 = document.querySelector(".increment-img2");
const decrementImg2 = document.querySelector(".decrement-img2");

const incrementImg3 = document.querySelector(".increment-img3");
const decrementImg3 = document.querySelector(".decrement-img3");

const incrementImg4 = document.querySelector(".increment-img4");
const decrementImg4 = document.querySelector(".decrement-img4");

const incrementImg5 = document.querySelector(".increment-img5");
const decrementImg5 = document.querySelector(".decrement-img5");

const incrementImg6 = document.querySelector(".increment-img6");
const decrementImg6 = document.querySelector(".decrement-img6");

const incrementImg7 = document.querySelector(".increment-img7");
const decrementImg7 = document.querySelector(".decrement-img7");

const incrementImg8 = document.querySelector(".increment-img8");
const decrementImg8 = document.querySelector(".decrement-img8");

const incrementImg9 = document.querySelector(".increment-img9");
const decrementImg9 = document.querySelector(".decrement-img9");

//Comp: 1
const countDisplay1 = document.querySelector(".count-display1");
const countDisplay2 = document.querySelector(".count-display2");
const countDisplay3 = document.querySelector(".count-display3");
const countDisplay4 = document.querySelector(".count-display4");
const countDisplay5 = document.querySelector(".count-display5");
const countDisplay6 = document.querySelector(".count-display6");
const countDisplay7 = document.querySelector(".count-display7");
const countDisplay8 = document.querySelector(".count-display8");
const countDisplay9 = document.querySelector(".count-display9");

//Comp: 2
const emptyContainer = document.querySelector(".empty-container");

//Comp: 2
const cartItem1 = document.querySelector(".cart-item1");
const cartItem2 = document.querySelector(".cart-item2");
const cartItem3 = document.querySelector(".cart-item3");
const cartItem4 = document.querySelector(".cart-item4");
const cartItem5 = document.querySelector(".cart-item5");
const cartItem6 = document.querySelector(".cart-item6");
const cartItem7 = document.querySelector(".cart-item7");
const cartItem8 = document.querySelector(".cart-item8");
const cartItem9 = document.querySelector(".cart-item9");

//Comp: 2
const count1 = document.querySelector(".count-1");
const price1 = document.querySelector(".price-1");
const total1 = document.querySelector(".total-1");

const count2 = document.querySelector(".count-2");
const price2 = document.querySelector(".price-2");
const total2 = document.querySelector(".total-2");

const count3 = document.querySelector(".count-3");
const price3 = document.querySelector(".price-3");
const total3 = document.querySelector(".total-3");

const count4 = document.querySelector(".count-4");
const price4 = document.querySelector(".price-4");
const total4 = document.querySelector(".total-4");

const count5 = document.querySelector(".count-5");
const price5 = document.querySelector(".price-5");
const total5 = document.querySelector(".total-5");

const count6 = document.querySelector(".count-6");
const price6 = document.querySelector(".price-6");
const total6 = document.querySelector(".total-6");

const count7 = document.querySelector(".count-7");
const price7 = document.querySelector(".price-7");
const total7 = document.querySelector(".total-7");

const count8 = document.querySelector(".count-8");
const price8 = document.querySelector(".price-8");
const total8 = document.querySelector(".total-8");

const count9 = document.querySelector(".count-9");
const price9 = document.querySelector(".price-9");
const total9 = document.querySelector(".total-9");

//Comp: 2
const orderTotal = document.querySelector(".order-total");

//Comp: 2
const deleteIcon1 = document.querySelector(".delete-icon1");
const deleteIcon2 = document.querySelector(".delete-icon2");
const deleteIcon3 = document.querySelector(".delete-icon3");
const deleteIcon4 = document.querySelector(".delete-icon4");
const deleteIcon5 = document.querySelector(".delete-icon5");
const deleteIcon6 = document.querySelector(".delete-icon6");
const deleteIcon7 = document.querySelector(".delete-icon7");
const deleteIcon8 = document.querySelector(".delete-icon8");
const deleteIcon9 = document.querySelector(".delete-icon9");

//Comp: 2
const elseCart = document.querySelector(".else-cart");
const confirmBtn = document.querySelector(".confirm-btn");

// Component: 3
const confirmedItem1 = document.querySelector(".confirmed-item-1");
const countConfirmed1 = document.querySelector(".count-confirmed-1");
const priceConfirmed1 = document.querySelector(".price-confirmed-1");
const totalConfirmed1 = document.querySelector(".total-confirmed-1");

const confirmedItem2 = document.querySelector(".confirmed-item-2");
const countConfirmed2 = document.querySelector(".count-confirmed-2");
const priceConfirmed2 = document.querySelector(".price-confirmed-2");
const totalConfirmed2 = document.querySelector(".total-confirmed-2");

const confirmedItem3 = document.querySelector(".confirmed-item-3");
const countConfirmed3 = document.querySelector(".count-confirmed-3");
const priceConfirmed3 = document.querySelector(".price-confirmed-3");
const totalConfirmed3 = document.querySelector(".total-confirmed-3");

const confirmedItem4 = document.querySelector(".confirmed-item-4");
const countConfirmed4 = document.querySelector(".count-confirmed-4");
const priceConfirmed4 = document.querySelector(".price-confirmed-4");
const totalConfirmed4 = document.querySelector(".total-confirmed-4");

const confirmedItem5 = document.querySelector(".confirmed-item-5");
const countConfirmed5 = document.querySelector(".count-confirmed-5");
const priceConfirmed5 = document.querySelector(".price-confirmed-5");
const totalConfirmed5 = document.querySelector(".total-confirmed-5");

const confirmedItem6 = document.querySelector(".confirmed-item-6");
const countConfirmed6 = document.querySelector(".count-confirmed-6");
const priceConfirmed6 = document.querySelector(".price-confirmed-6");
const totalConfirmed6 = document.querySelector(".total-confirmed-6");

const confirmedItem7 = document.querySelector(".confirmed-item-7");
const countConfirmed7 = document.querySelector(".count-confirmed-7");
const priceConfirmed7 = document.querySelector(".price-confirmed-7");
const totalConfirmed7 = document.querySelector(".total-confirmed-7");

const confirmedItem8 = document.querySelector(".confirmed-item-8");
const countConfirmed8 = document.querySelector(".count-confirmed-8");
const priceConfirmed8 = document.querySelector(".price-confirmed-8");
const totalConfirmed8 = document.querySelector(".total-confirmed-8");

const confirmedItem9 = document.querySelector(".confirmed-item-9");
const countConfirmed9 = document.querySelector(".count-confirmed-9");
const priceConfirmed9 = document.querySelector(".price-confirmed-9");
const totalConfirmed9 = document.querySelector(".total-confirmed-9");

const confirmedItem10 = document.querySelector(".confirmed-item-10");
const countConfirmed10 = document.querySelector(".count-confirmed-10");
const priceConfirmed10 = document.querySelector(".price-confirmed-10");
const totalConfirmed10 = document.querySelector(".total-confirmed-10");

// Component: 3
const orderTotalLast = document.querySelector(".order-total-last");
const confirmOrderContainer = document.querySelector(
  ".confirm-order-container"
);
const startNewOrder = document.querySelector(".start-new-order");

let countImg1 = 0;
let countImg2 = 0;
let countImg3 = 0;
let countImg4 = 0;
let countImg5 = 0;
let countImg6 = 0;
let countImg7 = 0;
let countImg8 = 0;
let countImg9 = 0;

///////////////////////////////////////////////////////////////////////////////
///First Image code
cartBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  plusminusBtn1.classList.remove("hidden");
  cartBtn1.classList.add("hidden");
  emptyContainer.classList.add("hidden");
  elseCart.classList.remove("hidden");
  imgBorder1.classList.add("red-border");
  imgBorderMobile1.classList.add("red-border");
});

incrementImg1.addEventListener("click", (e) => {
  countImg1++;
  countDisplay1.textContent = countImg1;
  count1.textContent = countImg1;
  countConfirmed1.textContent = countImg1; // Comp: 3

  if (countImg1 === 1) {
    cartItem1.classList.remove("hidden");
    confirmedItem1.classList.remove("hidden"); //Comp: 3
  }
  itemCalculation1(countImg1);
});

decrementImg1.addEventListener("click", (e) => {
  if (countImg1 > 0) {
    countImg1--;
    countDisplay1.textContent = countImg1;
    count1.textContent = countImg1;
    countConfirmed1.textContent = countImg1; // Comp: 3
  }

  if (countImg1 === 0) {
    cartBtn1.classList.remove("hidden");
    plusminusBtn1.classList.add("hidden");
    imgBorder1.classList.remove("red-border");
    imgBorderMobile1.classList.remove("red-border");
  }
  if (countImg1 === 0) {
    cartItem1.classList.add("hidden");
    confirmedItem1.classList.add("hidden"); //comp: 3
  }
  itemCalculation1(countImg1);
});

function itemCalculation1(newValue) {
  total1.textContent = (newValue * price1.textContent).toFixed(2);

  totalConfirmed1.textContent = (
    newValue * priceConfirmed1.textContent
  ).toFixed(2);

  calculateOrderTotal();
}

deleteIcon1.addEventListener("click", (e) => {
  e.preventDefault();
  cartItem1.classList.add("hidden");
  plusminusBtn1.classList.add("hidden");
  imgBorder1.classList.remove("red-border");
  imgBorderMobile1.classList.remove("red-border");
  confirmedItem1.classList.add("hidden");

  cartBtn1.classList.remove("hidden");
  countImg1 = 0;
  countDisplay1.textContent = 0;
  count1.textContent = countImg1;
  total1.textContent = "0.00";
  totalConfirmed1.textContent = "0.00";
  calculateOrderTotal(); // Update order total after deleting item 2
});

///////////////////////////////////////////////////////////////////////////

///Second Image code
cartBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  plusminusBtn2.classList.remove("hidden");
  cartBtn2.classList.add("hidden");
  imgBorder2.classList.add("red-border");
  imgBorderMobile2.classList.add("red-border");
  emptyContainer.classList.add("hidden");
  elseCart.classList.remove("hidden");
});

incrementImg2.addEventListener("click", (e) => {
  countImg2++;
  countDisplay2.textContent = countImg2;
  count2.textContent = countImg2;
  countConfirmed2.textContent = countImg2; // Comp: 3

  if (countImg2 === 1) {
    cartItem2.classList.remove("hidden");
    confirmedItem2.classList.remove("hidden");
  }
  itemCalculation2(countImg2);
});

decrementImg2.addEventListener("click", (e) => {
  if (countImg2 > 0) {
    countImg2--;
    countDisplay2.textContent = countImg2;
    count2.textContent = countImg2;
    countConfirmed2.textContent = countImg2;
  }

  if (countImg2 === 0) {
    cartBtn2.classList.remove("hidden");
    plusminusBtn2.classList.add("hidden");
    imgBorder2.classList.remove("red-border");
    imgBorderMobile2.classList.remove("red-border");
  }
  if (countImg2 === 0) {
    cartItem2.classList.add("hidden");
    confirmedItem2.classList.add("hidden");
  }

  itemCalculation2(countImg2);
});

function itemCalculation2(newValue) {
  total2.textContent = (newValue * price2.textContent).toFixed(2);
  totalConfirmed2.textContent = (
    newValue * priceConfirmed2.textContent
  ).toFixed(2);

  calculateOrderTotal(); // Update order total after deleting item 2
}

deleteIcon2.addEventListener("click", (e) => {
  e.preventDefault();
  cartItem2.classList.add("hidden");
  plusminusBtn2.classList.add("hidden");
  imgBorder2.classList.remove("red-border");
  imgBorderMobile2.classList.remove("red-border");
  confirmedItem2.classList.add("hidden");

  cartBtn2.classList.remove("hidden");
  countImg2 = 0;
  countDisplay2.textContent = 0;
  count2.textContent = countImg2;
  total2.textContent = "0.00";
  calculateOrderTotal(); // Update order total after deleting item 2
});

//////////////////////////////////////////////////////////////////////////////////////

///Third Image code
cartBtn3.addEventListener("click", (e) => {
  e.preventDefault();
  plusminusBtn3.classList.remove("hidden");
  cartBtn3.classList.add("hidden");
  emptyContainer.classList.add("hidden");
  elseCart.classList.remove("hidden");
  imgBorder3.classList.add("red-border");
  imgBorderMobile3.classList.add("red-border");
});

incrementImg3.addEventListener("click", (e) => {
  countImg3++;
  countDisplay3.textContent = countImg3;
  count3.textContent = countImg3;
  countConfirmed3.textContent = countImg3; // Comp: 3

  if (countImg3 === 1) {
    cartItem3.classList.remove("hidden");
    confirmedItem3.classList.remove("hidden"); //Comp: 3
  }
  itemCalculation3(countImg3);
});

decrementImg3.addEventListener("click", (e) => {
  if (countImg3 > 0) {
    countImg3--;
    countDisplay3.textContent = countImg3;
    count3.textContent = countImg3;
    countConfirmed3.textContent = countImg3; // Comp: 3
  }

  if (countImg3 === 0) {
    cartBtn3.classList.remove("hidden");
    plusminusBtn3.classList.add("hidden");
    imgBorder3.classList.remove("red-border");
    imgBorderMobile3.classList.remove("red-border");
  }
  if (countImg3 === 0) {
    cartItem3.classList.add("hidden");
    confirmedItem3.classList.add("hidden"); //comp: 3
  }
  itemCalculation3(countImg3);
});

function itemCalculation3(newValue) {
  total3.textContent = (newValue * price3.textContent).toFixed(2);

  totalConfirmed3.textContent = (
    newValue * priceConfirmed3.textContent
  ).toFixed(2);

  calculateOrderTotal();
}

deleteIcon3.addEventListener("click", (e) => {
  e.preventDefault();
  cartItem3.classList.add("hidden");
  plusminusBtn3.classList.add("hidden");
  imgBorder3.classList.remove("red-border");
  imgBorderMobile3.classList.remove("red-border");
  confirmedItem3.classList.add("hidden");

  cartBtn3.classList.remove("hidden");
  countImg3 = 0;
  countDisplay3.textContent = 0;
  count3.textContent = countImg3;
  total3.textContent = "0.00";
  totalConfirmed3.textContent = "0.00";
  calculateOrderTotal(); // Update order total after deleting item 2
});

///Fourth Image code
cartBtn4.addEventListener("click", (e) => {
  e.preventDefault();
  plusminusBtn4.classList.remove("hidden");
  cartBtn4.classList.add("hidden");
  emptyContainer.classList.add("hidden");
  elseCart.classList.remove("hidden");
  imgBorder4.classList.add("red-border");
  imgBorderMobile4.classList.add("red-border");
});

incrementImg4.addEventListener("click", (e) => {
  countImg4++;
  countDisplay4.textContent = countImg4;
  count4.textContent = countImg4;
  countConfirmed4.textContent = countImg4; // Comp: 3

  if (countImg4 === 1) {
    cartItem4.classList.remove("hidden");
    confirmedItem4.classList.remove("hidden"); //Comp: 3
  }
  itemCalculation4(countImg4);
});

decrementImg4.addEventListener("click", (e) => {
  if (countImg4 > 0) {
    countImg4--;
    countDisplay4.textContent = countImg4;
    count4.textContent = countImg4;
    countConfirmed4.textContent = countImg4; // Comp: 3
  }

  if (countImg4 === 0) {
    cartBtn4.classList.remove("hidden");
    plusminusBtn4.classList.add("hidden");
    imgBorder4.classList.remove("red-border");
    imgBorderMobile4.classList.remove("red-border");
  }
  if (countImg4 === 0) {
    cartItem4.classList.add("hidden");
    confirmedItem4.classList.add("hidden"); //comp: 3
  }
  itemCalculation4(countImg4);
});

function itemCalculation4(newValue) {
  total4.textContent = (newValue * price4.textContent).toFixed(2);

  totalConfirmed4.textContent = (
    newValue * priceConfirmed4.textContent
  ).toFixed(2);

  calculateOrderTotal();
}

deleteIcon4.addEventListener("click", (e) => {
  e.preventDefault();
  cartItem4.classList.add("hidden");
  plusminusBtn4.classList.add("hidden");
  imgBorder4.classList.remove("red-border");
  imgBorderMobile4.classList.remove("red-border");
  confirmedItem4.classList.add("hidden");

  cartBtn4.classList.remove("hidden");
  countImg4 = 0;
  countDisplay4.textContent = 0;
  count4.textContent = countImg3;
  total4.textContent = "0.00";
  totalConfirmed4.textContent = "0.00";
  calculateOrderTotal(); // Update order total after deleting item 2
});

/// Fifth Image Code
cartBtn5.addEventListener("click", (e) => {
  e.preventDefault();
  plusminusBtn5.classList.remove("hidden");
  cartBtn5.classList.add("hidden");
  emptyContainer.classList.add("hidden");
  elseCart.classList.remove("hidden");
  imgBorder5.classList.add("red-border");
  imgBorderMobile5.classList.add("red-border");
});

incrementImg5.addEventListener("click", (e) => {
  countImg5++;
  countDisplay5.textContent = countImg5;
  count5.textContent = countImg5;
  countConfirmed5.textContent = countImg5; // Comp: 5

  if (countImg5 === 1) {
    cartItem5.classList.remove("hidden");
    confirmedItem5.classList.remove("hidden"); // Comp: 5
  }
  itemCalculation5(countImg5);
});

decrementImg5.addEventListener("click", (e) => {
  if (countImg5 > 0) {
    countImg5--;
    countDisplay5.textContent = countImg5;
    count5.textContent = countImg5;
    countConfirmed5.textContent = countImg5; // Comp: 5
  }

  if (countImg5 === 0) {
    cartBtn5.classList.remove("hidden");
    plusminusBtn5.classList.add("hidden");
    imgBorder5.classList.remove("red-border");
    imgBorderMobile5.classList.remove("red-border");
  }
  if (countImg5 === 0) {
    cartItem5.classList.add("hidden");
    confirmedItem5.classList.add("hidden"); // Comp: 5
  }
  itemCalculation5(countImg5);
});

function itemCalculation5(newValue) {
  total5.textContent = (newValue * price5.textContent).toFixed(2);

  totalConfirmed5.textContent = (
    newValue * priceConfirmed5.textContent
  ).toFixed(2);

  calculateOrderTotal();
}

deleteIcon5.addEventListener("click", (e) => {
  e.preventDefault();
  cartItem5.classList.add("hidden");
  plusminusBtn5.classList.add("hidden");
  imgBorder5.classList.remove("red-border");
  imgBorderMobile5.classList.remove("red-border");
  confirmedItem5.classList.add("hidden");

  cartBtn5.classList.remove("hidden");
  countImg5 = 0;
  countDisplay5.textContent = 0;
  count5.textContent = countImg5;
  total5.textContent = "0.00";
  totalConfirmed5.textContent = "0.00";
  calculateOrderTotal(); // Update order total after deleting item 5
});

/// Sixth Image Code
cartBtn6.addEventListener("click", (e) => {
  e.preventDefault();
  plusminusBtn6.classList.remove("hidden");
  cartBtn6.classList.add("hidden");
  emptyContainer.classList.add("hidden");
  elseCart.classList.remove("hidden");
  imgBorder6.classList.add("red-border");
  imgBorderMobile6.classList.add("red-border");
});

incrementImg6.addEventListener("click", (e) => {
  countImg6++;
  countDisplay6.textContent = countImg6;
  count6.textContent = countImg6;
  countConfirmed6.textContent = countImg6; // Comp: 6

  if (countImg6 === 1) {
    cartItem6.classList.remove("hidden");
    confirmedItem6.classList.remove("hidden"); // Comp: 6
  }
  itemCalculation6(countImg6);
});

decrementImg6.addEventListener("click", (e) => {
  if (countImg6 > 0) {
    countImg6--;
    countDisplay6.textContent = countImg6;
    count6.textContent = countImg6;
    countConfirmed6.textContent = countImg6; // Comp: 6
  }

  if (countImg6 === 0) {
    cartBtn6.classList.remove("hidden");
    plusminusBtn6.classList.add("hidden");
    imgBorder6.classList.remove("red-border");
    imgBorderMobile6.classList.remove("red-border");
  }
  if (countImg6 === 0) {
    cartItem6.classList.add("hidden");
    confirmedItem6.classList.add("hidden"); // Comp: 6
  }
  itemCalculation6(countImg6);
});

function itemCalculation6(newValue) {
  total6.textContent = (newValue * price6.textContent).toFixed(2);
  totalConfirmed6.textContent = (
    newValue * priceConfirmed6.textContent
  ).toFixed(2);
  calculateOrderTotal();
}

deleteIcon6.addEventListener("click", (e) => {
  e.preventDefault();
  cartItem6.classList.add("hidden");
  plusminusBtn6.classList.add("hidden");
  imgBorder6.classList.remove("red-border");
  imgBorderMobile6.classList.remove("red-border");
  confirmedItem6.classList.add("hidden");

  cartBtn6.classList.remove("hidden");
  countImg6 = 0;
  countDisplay6.textContent = 0;
  count6.textContent = countImg6;
  total6.textContent = "0.00";
  totalConfirmed6.textContent = "0.00";
  calculateOrderTotal();
});

/// Seventh Image Code
cartBtn7.addEventListener("click", (e) => {
  e.preventDefault();
  plusminusBtn7.classList.remove("hidden");
  cartBtn7.classList.add("hidden");
  emptyContainer.classList.add("hidden");
  elseCart.classList.remove("hidden");
  imgBorder7.classList.add("red-border");
  imgBorderMobile7.classList.add("red-border");
});

incrementImg7.addEventListener("click", (e) => {
  countImg7++;
  countDisplay7.textContent = countImg7;
  count7.textContent = countImg7;
  countConfirmed7.textContent = countImg7; // Comp: 7

  if (countImg7 === 1) {
    cartItem7.classList.remove("hidden");
    confirmedItem7.classList.remove("hidden"); // Comp: 7
  }
  itemCalculation7(countImg7);
});

decrementImg7.addEventListener("click", (e) => {
  if (countImg7 > 0) {
    countImg7--;
    countDisplay7.textContent = countImg7;
    count7.textContent = countImg7;
    countConfirmed7.textContent = countImg7; // Comp: 7
  }

  if (countImg7 === 0) {
    cartBtn7.classList.remove("hidden");
    plusminusBtn7.classList.add("hidden");
    imgBorder7.classList.remove("red-border");
    imgBorderMobile7.classList.remove("red-border");
  }
  if (countImg7 === 0) {
    cartItem7.classList.add("hidden");
    confirmedItem7.classList.add("hidden"); // Comp: 7
  }
  itemCalculation7(countImg7);
});

function itemCalculation7(newValue) {
  total7.textContent = (newValue * price7.textContent).toFixed(2);
  totalConfirmed7.textContent = (
    newValue * priceConfirmed7.textContent
  ).toFixed(2);
  calculateOrderTotal();
}

deleteIcon7.addEventListener("click", (e) => {
  e.preventDefault();
  cartItem7.classList.add("hidden");
  plusminusBtn7.classList.add("hidden");
  imgBorder7.classList.remove("red-border");
  imgBorderMobile7.classList.remove("red-border");
  confirmedItem7.classList.add("hidden");

  cartBtn7.classList.remove("hidden");
  countImg7 = 0;
  countDisplay7.textContent = 0;
  count7.textContent = countImg7;
  total7.textContent = "0.00";
  totalConfirmed7.textContent = "0.00";
  calculateOrderTotal();
});

/// Eighth Image Code
cartBtn8.addEventListener("click", (e) => {
  e.preventDefault();
  plusminusBtn8.classList.remove("hidden");
  cartBtn8.classList.add("hidden");
  emptyContainer.classList.add("hidden");
  elseCart.classList.remove("hidden");
  imgBorder8.classList.add("red-border");
  imgBorderMobile8.classList.add("red-border");
});

incrementImg8.addEventListener("click", (e) => {
  countImg8++;
  countDisplay8.textContent = countImg8;
  count8.textContent = countImg8;
  countConfirmed8.textContent = countImg8; // Comp: 8

  if (countImg8 === 1) {
    cartItem8.classList.remove("hidden");
    confirmedItem8.classList.remove("hidden"); // Comp: 8
  }
  itemCalculation8(countImg8);
});

decrementImg8.addEventListener("click", (e) => {
  if (countImg8 > 0) {
    countImg8--;
    countDisplay8.textContent = countImg8;
    count8.textContent = countImg8;
    countConfirmed8.textContent = countImg8; // Comp: 8
  }

  if (countImg8 === 0) {
    cartBtn8.classList.remove("hidden");
    plusminusBtn8.classList.add("hidden");
    imgBorder8.classList.remove("red-border");
    imgBorderMobile8.classList.remove("red-border");
  }
  if (countImg8 === 0) {
    cartItem8.classList.add("hidden");
    confirmedItem8.classList.add("hidden"); // Comp: 8
  }
  itemCalculation8(countImg8);
});

function itemCalculation8(newValue) {
  total8.textContent = (newValue * price8.textContent).toFixed(2);
  totalConfirmed8.textContent = (
    newValue * priceConfirmed8.textContent
  ).toFixed(2);
  calculateOrderTotal();
}

deleteIcon8.addEventListener("click", (e) => {
  e.preventDefault();
  cartItem8.classList.add("hidden");
  plusminusBtn8.classList.add("hidden");
  imgBorder8.classList.remove("red-border");
  imgBorderMobile8.classList.remove("red-border");
  confirmedItem9.classList.add("hidden");

  cartBtn8.classList.remove("hidden");
  countImg8 = 0;
  countDisplay8.textContent = 0;
  count8.textContent = countImg8;
  total8.textContent = "0.00";
  totalConfirmed8.textContent = "0.00";
  calculateOrderTotal();
});

/// Ninth Image Code
cartBtn9.addEventListener("click", (e) => {
  e.preventDefault();
  plusminusBtn9.classList.remove("hidden");
  cartBtn9.classList.add("hidden");
  emptyContainer.classList.add("hidden");
  elseCart.classList.remove("hidden");
  imgBorder9.classList.add("red-border");
  imgBorderMobile9.classList.add("red-border");
});

incrementImg9.addEventListener("click", (e) => {
  countImg9++;
  countDisplay9.textContent = countImg9;
  count9.textContent = countImg9;
  countConfirmed9.textContent = countImg9; // Comp: 9

  if (countImg9 === 1) {
    cartItem9.classList.remove("hidden");
    confirmedItem9.classList.remove("hidden"); // Comp: 9
  }
  itemCalculation9(countImg9);
});

decrementImg9.addEventListener("click", (e) => {
  if (countImg9 > 0) {
    countImg9--;
    countDisplay9.textContent = countImg9;
    count9.textContent = countImg9;
    countConfirmed9.textContent = countImg9; // Comp: 9
  }

  if (countImg9 === 0) {
    cartBtn9.classList.remove("hidden");
    plusminusBtn9.classList.add("hidden");
    imgBorder9.classList.remove("red-border");
    imgBorderMobile9.classList.remove("red-border");
  }
  if (countImg9 === 0) {
    cartItem9.classList.add("hidden");
    confirmedItem9.classList.add("hidden"); // Comp: 9
  }
  itemCalculation9(countImg9);
});

function itemCalculation9(newValue) {
  total9.textContent = (newValue * price9.textContent).toFixed(2);
  totalConfirmed9.textContent = (
    newValue * priceConfirmed9.textContent
  ).toFixed(2);
  calculateOrderTotal();
}

deleteIcon9.addEventListener("click", (e) => {
  e.preventDefault();
  cartItem9.classList.add("hidden");
  plusminusBtn9.classList.add("hidden");
  imgBorder9.classList.remove("red-border");
  imgBorderMobile9.classList.remove("red-border");
  confirmedItem9.classList.add("hidden");

  cartBtn9.classList.remove("hidden");
  countImg9 = 0;
  countDisplay9.textContent = 0;
  count9.textContent = countImg9;
  total9.textContent = "0.00";
  totalConfirmed9.textContent = "0.00";
  calculateOrderTotal();
});

/// Calculate Order Total
function calculateOrderTotal() {
  const totalValue1 = parseFloat(total1.textContent) || 0;
  const totalValue2 = parseFloat(total2.textContent) || 0;
  const totalValue3 = parseFloat(total3.textContent) || 0;
  const totalValue4 = parseFloat(total4.textContent) || 0;
  const totalValue5 = parseFloat(total5.textContent) || 0;
  const totalValue6 = parseFloat(total6.textContent) || 0;
  const totalValue7 = parseFloat(total7.textContent) || 0;
  const totalValue8 = parseFloat(total8.textContent) || 0;
  const totalValue9 = parseFloat(total9.textContent) || 0;

  const orderTotalValue =
    totalValue1 +
    totalValue2 +
    totalValue3 +
    totalValue4 +
    totalValue5 +
    totalValue6 +
    totalValue7 +
    totalValue8 +
    totalValue9;
  orderTotal.textContent = orderTotalValue.toFixed(2);
  orderTotalLast.textContent = orderTotal.textContent;
}

const body = document.querySelector("body");
confirmBtn.addEventListener("click", () => {
  confirmOrderContainer.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});

startNewOrder.addEventListener("click", () => {
  window.location.reload();
});
