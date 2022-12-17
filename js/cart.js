//CART START
import {totalSum1, totalSum2, totalGoodsCount, totalSale, orderBtn, payNowCheckbox} from './order.js';

//COUNTER 1
const count1 = document.querySelector('#count1');
const minusBtn1 = document.querySelector('#minus-btn1');
const plusBtn1 = document.querySelector('#plus-btn1');
const price1 = document.querySelector('#price1');
const oldPrice1 = document.querySelector('#old-price1');

minusBtn1.addEventListener('click', () => {
    if(+count1.value > 1) {
        plusBtn1.disabled = false;
        +count1.value--;

        price1.textContent = +price1.textContent - 522;
        oldPrice1.textContent = +oldPrice1.textContent - 1051;

        +totalGoodsCount.textContent--;
        totalSum1.textContent = +totalSum1.textContent - 522;
        totalSum2.textContent = +totalSum2.textContent - 522;
        totalSale.textContent = +totalSale.textContent - (1051 - 522);

        if (+count1.value == 1) {
            minusBtn1.disabled = true;
        }

        if(payNowCheckbox.checked) {
            orderBtn.textContent = `Оплатить ${totalSum1.textContent} сом`;
        }
    }
});

plusBtn1.addEventListener('click', () => {
    if(+count1.value < 2) {
        minusBtn1.disabled = false;

        +count1.value++;
        price1.textContent = +price1.textContent + 522;
        oldPrice1.textContent = +oldPrice1.textContent + 1051;
    
        +totalGoodsCount.textContent++;
        totalSum1.textContent = +totalSum1.textContent + 522;
        totalSum2.textContent = +totalSum2.textContent + 522;
        totalSale.textContent = +totalSale.textContent + (1051 - 522);

        if(+count1.value == 2) {
            plusBtn1.disabled = true;
        }

        if(payNowCheckbox.checked) {
            orderBtn.textContent = `Оплатить ${totalSum1.textContent} сом`;
        }
    }

});

//COUNTER 2
const count2 = document.querySelector('#count2');
const minusBtn2 = document.querySelector('#minus-btn2');
const plusBtn2 = document.querySelector('#plus-btn2');
const price2 = document.querySelector('#price2');
const oldPrice2 = document.querySelector('#old-price2');


minusBtn2.addEventListener('click', () => {
    if(+count2.value > 1) {
        plusBtn2.disabled = false;
        +count2.value--;

        price2.textContent = +price2.textContent - 10500;
        oldPrice2.textContent = +oldPrice2.textContent - 11500;

        +totalGoodsCount.textContent--;
        totalSum1.textContent = +totalSum1.textContent - 10500;
        totalSum2.textContent = +totalSum2.textContent - 10500;
        totalSale.textContent = +totalSale.textContent - (11500 - 10500);

        if (+count2.value == 1) {
            minusBtn2.disabled = true;
        }

        if(payNowCheckbox.checked) {
            orderBtn.textContent = `Оплатить ${totalSum1.textContent} сом`;
        }
    }
});

plusBtn2.addEventListener('click', () => {
    if (+count2.value < 300) {
        minusBtn2.disabled = false;
        +count2.value++;

        price2.textContent = +price2.textContent + 10500;
        oldPrice2.textContent = +oldPrice2.textContent + 11500;
    
        +totalGoodsCount.textContent++;
        totalSum1.textContent = +totalSum1.textContent + 10500;
        totalSum2.textContent = +totalSum2.textContent + 10500;
        totalSale.textContent = +totalSale.textContent + (11500 - 10500);

        if (+count2.value == 300) {
            plusBtn2.disabled = true;
        }

        if(payNowCheckbox.checked) {
            orderBtn.textContent = `Оплатить ${totalSum1.textContent} сом`;
        }
    }

});

//COUNTER 3
const count3 = document.querySelector('#count3');
const minusBtn3 = document.querySelector('#minus-btn3');
const plusBtn3 = document.querySelector('#plus-btn3');
const price3 = document.querySelector('#price3');
const oldPrice3 = document.querySelector('#old-price3');

minusBtn3.addEventListener('click', () => {
    if(+count3.value > 1) {
        plusBtn3.disabled = false;
        +count3.value--;

        price3.textContent = +price3.textContent - 247;
        oldPrice3.textContent = +oldPrice3.textContent - 475;

        +totalGoodsCount.textContent--;
        totalSum1.textContent = +totalSum1.textContent - 247;
        totalSum2.textContent = +totalSum2.textContent - 247;
        totalSale.textContent = +totalSale.textContent - (475 - 247);

        if (+count3.value == 1) {
            minusBtn3.disabled = true;
        }

        if(payNowCheckbox.checked) {
            orderBtn.textContent = `Оплатить ${totalSum1.textContent} сом`;
        }
    }
});

plusBtn3.addEventListener('click', () => {
    if (+count3.value < 2) {
        minusBtn3.disabled = false;
        +count3.value++;

        price3.textContent = +price3.textContent + 247;
        oldPrice3.textContent = +oldPrice3.textContent + 475;
    
        +totalGoodsCount.textContent++;
        totalSum1.textContent = +totalSum1.textContent + 247;
        totalSum2.textContent = +totalSum2.textContent + 247;
        totalSale.textContent = +totalSale.textContent + (475 - 247);

        if (+count3.value == 2) {
            plusBtn3.disabled = true;
        }

        if(payNowCheckbox.checked) {
            orderBtn.textContent = `Оплатить ${totalSum1.textContent} сом`;
        }
    }
   
});

//CHANGE COUNTS BY INPUT
count1.addEventListener('change', (e) => {
    if(!isNaN(count1.value) && +count1.value <= 2 && +count1.value >= 1 && Number.isInteger(+count1.value)) {
        count1.value = e.target.value;
        price1.textContent = count1.value * 522;
        oldPrice1.textContent = count1.value * 1051;
        totalSum1.textContent = count1.value * 522 + count2.value * 10500 + count3.value * 247;
        totalSum2.textContent = count1.value * 522 + count2.value * 10500 + count3.value * 247;
        totalSale.textContent = count1.value * (1051-522) + count2.value * (11500 - 10500) + count3.value * (475 - 247);

        if(payNowCheckbox.checked) {
            orderBtn.textContent = `Оплатить ${totalSum1.textContent} сом`;
        }

        if(+count1.value === 1) {
            minusBtn1.disabled = true;
            plusBtn1.disabled = false;
        } else if (+count1.value === 2) {
            plusBtn1.disabled = true;
            minusBtn1.disabled = false;
        }
    } else {
        count1.value = 1;
    }

});

count2.addEventListener('change', (e) => {
    if(!isNaN(count2.value) && +count2.value <= 300 && +count2.value >= 1 && Number.isInteger(+count2.value)) {
        if(+count2.value > 1 && +count2.value < 300)
        minusBtn2.disabled = false;
        plusBtn2.disabled = false;
        count2.value = e.target.value;
        price2.textContent = count2.value * 10500;
        oldPrice2.textContent = count2.value * 11500;
        totalSum1.textContent = count1.value * 522 + count2.value * 10500 + count3.value * 247;
        totalSum2.textContent = count1.value * 522 + count2.value * 10500 + count3.value * 247;
        totalSale.textContent = count1.value * (1051-522) + count2.value * (11500 - 10500) + count3.value * (475 - 247);

        if(payNowCheckbox.checked) {
            orderBtn.textContent = `Оплатить ${totalSum1.textContent} сом`;
        }

        if(+count2.value === 1) {
            minusBtn2.disabled = true;
            plusBtn2.disabled = false;
        } else if (+count2.value === 300) {
            plusBtn2.disabled = true;
            minusBtn2.disabled = false;
        }
    } else {
        count2.value = 200;
    }
});

count3.addEventListener('change', (e) => {
    if(!isNaN(count3.value) && +count3.value <= 2 && +count3.value >= 1 && Number.isInteger(+count3.value)) {
        count3.value = e.target.value;
        price3.textContent = count3.value * 247;
        oldPrice3.textContent = count3.value * 475;
        totalSum1.textContent = count1.value * 522 + count2.value * 10500 + count3.value * 247;
        totalSum2.textContent = count1.value * 522 + count2.value * 10500 + count3.value * 247;
        totalSale.textContent = count1.value * (1051-522) + count2.value * (11500 - 10500) + count3.value * (475 - 247);

        if(payNowCheckbox.checked) {
            orderBtn.textContent = `Оплатить ${totalSum1.textContent} сом`;
        }
        
        if(+count3.value === 1) {
            minusBtn3.disabled = true;
            plusBtn3.disabled = false;
        } else if (+count2.value === 2) {
            plusBtn3.disabled = true;
            minusBtn3.disabled = false;
        }
    } else {
        count3.value = 2;
    }
});

//HADLE SELECTING ALL CHECKBOXES
const selectAllCheckbox = document.querySelector('#select-all-checkbox');
const goodCheckbox1 = document.querySelector('#good-checkbox1');
const goodCheckbox2 = document.querySelector('#good-checkbox2');
const goodCheckbox3 = document.querySelector('#good-checkbox3');

selectAllCheckbox.addEventListener('change', (e) => {
    if(e.target.checked === true) {
        goodCheckbox1.checked = true;
        goodCheckbox2.checked = true;
        goodCheckbox3.checked = true;
    } else {
        goodCheckbox1.checked = false;
        goodCheckbox2.checked = false;
        goodCheckbox3.checked = false;
    }
});


//HANDLE DELITING GOOD CARDS
const deleteBtn1 = document.querySelector('#delete-btn1');
const deleteBtn2 = document.querySelector('#delete-btn2');
const deleteBtn3 = document.querySelector('#delete-btn3');
const deleteBtn4 = document.querySelector('#delete-btn4');
const deleteBtn5 = document.querySelector('#delete-btn5');
const deleteBtn6 = document.querySelector('#delete-btn6');

const goodCard1 = document.querySelector('#good-card1');
const goodCard2 = document.querySelector('#good-card2');
const goodCard3 = document.querySelector('#good-card3');
const goodCard4 = document.querySelector('#good-card4');
const goodCard5 = document.querySelector('#good-card5');
const goodCard6 = document.querySelector('#good-card6');

deleteBtn1.addEventListener('click', () => {
    goodCard1.style.display = "none";
});

deleteBtn2.addEventListener('click', () => {
    goodCard2.style.display = "none";
});

deleteBtn3.addEventListener('click', () => {
    goodCard3.style.display = "none";
});

deleteBtn4.addEventListener('click', () => {
    goodCard4.style.display = "none";
});

deleteBtn5.addEventListener('click', () => {
    goodCard5.style.display = "none";
});

deleteBtn6.addEventListener('click', () => {
    goodCard6.style.display = "none";
});


//HANDLE SHOW/HIDE GOODS
const showGoodsBtn = document.querySelector('#show-goods-btn');
const goodsContainer = document.querySelector('#goods-container');
const showGoodsIcon = document.querySelector('#show-goods-icon');
const cartPanelLabel = document.querySelector('#cart-panel-label');
const cartPanelText = document.querySelector('#cart-panel-text');

const cartUnderline = document.querySelector('#cart-underline');

showGoodsBtn.addEventListener('click', () => {
    if(goodsContainer.style.display != "none") {
        goodsContainer.style.display = "none";
        showGoodsIcon.style.transform = "rotate(180deg)";
        cartPanelLabel.style.display = "none";
        cartPanelText.style.display = "block";
        cartUnderline.style.display = "block";
    } else {
        goodsContainer.style.display = "flex";
        showGoodsIcon.style.transform = "rotate(0deg)";
        cartPanelLabel.style.display = "flex";
        cartPanelText.style.display = "none";
        cartUnderline.style.display = "none";
    }

});

//HANDLE MOUSE HOVER ON INFO ICONS

const infoIcon1 = document.querySelector('#info-icon1');
const infoIcon2 = document.querySelector('#info-icon2');
const infoIcon3 = document.querySelector('#info-icon3');

const infoPopup1 = document.querySelector('#info-popup1');
const infoPopup2 = document.querySelector('#info-popup2');
const infoPopup3 = document.querySelector('#info-popup3');

infoIcon1.addEventListener('mouseenter', () => {
    infoPopup1.style.display = "block";
});

infoIcon1.addEventListener('mouseleave', () => {
    infoPopup1.style.display = "none";
});

infoIcon2.addEventListener('mouseenter', () => {
    infoPopup2.style.display = "block";
});

infoIcon2.addEventListener('mouseleave', () => {
    infoPopup2.style.display = "none";
});

infoIcon3.addEventListener('mouseenter', () => {
    infoPopup3.style.display = "block";
});

infoIcon3.addEventListener('mouseleave', () => {
    infoPopup3.style.display = "none";
});


//HANDLE MOUSE HOVER ON OLD PRICE(DISCONT)
const priceOld1 = document.querySelector('#price-old1');
const priceOld2 = document.querySelector('#price-old2');
const priceOld3 = document.querySelector('#price-old3');


const pricePopup1 = document.querySelector('#price-popup1');
const pricePopup2 = document.querySelector('#price-popup2');
const pricePopup3 = document.querySelector('#price-popup3');


priceOld1.addEventListener('mouseenter', () => {
    pricePopup1.style.display = "block";
});

priceOld1.addEventListener('mouseleave', () => {
    pricePopup1.style.display = "none";
});

priceOld2.addEventListener('mouseenter', () => {
    pricePopup2.style.display = "block";
});

priceOld2.addEventListener('mouseleave', () => {
    pricePopup2.style.display = "none";
});

priceOld3.addEventListener('mouseenter', () => {
    pricePopup3.style.display = "block";
});

priceOld3.addEventListener('mouseleave', () => {
    pricePopup3.style.display = "none";
});