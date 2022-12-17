//ORDER START
import {
    paymentMethSelectBtn,
    paymentMethRadio1,
    paymentMethRadio2,
    paymentMethRadio3,
    paymentMethRadio4,
    paymentMethVue1,
    paymentMethVue2,
    paymentMethVue3,
    paymentMethVue4,
    paymentMethContent1,
    paymentMethContent2,
    paymentMethContent3,
    paymentMethContent4,
    paymMethModal, 
} from "./payment-method.js";

import {
    address1,
    address2,
    address3,
    address4,
    address5,
    address6,
    deliveryMethodContent1,
    deliveryMethodContent2,
    deliveryMethodContent3,
    deliveryMethodContent4,
    deliveryMethodContent5,
    deliveryMethodContent6,
    deliveryByPointRadio,
    deliveryByCourierRadio,
    pointAddressRadio1,
    pointAddressRadio2,
    pointAddressRadio3,
    courierAddressRadio1,
    courierAddressRadio2,
    courierAddressRadio3,
    addressSelectBtn,
    delMethModal,
    deliveryMethod1,
    deliveryMethod2,
} from "./delivery-method.js";


export const totalSum1 = document.querySelector('#total-sum');
export const totalSum2 = document.querySelector('#total-sum2');
export const totalGoodsCount = document.querySelector('#total-goods-count');
export const orderBtn = document.querySelector('#order-btn');
export const totalSale = document.querySelector('#total-sale');

export const payNowCheckbox = document.querySelector('#pay-now-checkbox');

payNowCheckbox.addEventListener('change', (e) => {
    if(e.target.checked === true) {
        orderBtn.textContent = `Оплатить ${totalSum1.textContent} сом`;
    } else {
        orderBtn.textContent = "Заказать";
    }
});

//HANDLE MOUSE HOVER ON GREEN FREE TEXT
const freeInfo1 = document.querySelector('#free-info1');
const freeInfo2 = document.querySelector('#free-info2');

const freePopup1 = document.querySelector('#free-popup1');
const freePopup2 = document.querySelector('#free-popup2');


freeInfo1.addEventListener('mouseenter', () => {
    freePopup1.style.display = "block";
});

freeInfo1.addEventListener('click', () => {
    freePopup1.style.display = "none";
});

freeInfo1.addEventListener('mouseleave', () => {
    freePopup1.style.display = "none";
});


freeInfo2.addEventListener('mouseenter', () => {
    freePopup2.style.display = "block";
});

freeInfo2.addEventListener('click', () => {
    freePopup2.style.display = "none";
});

freeInfo2.addEventListener('mouseleave', () => {
    freePopup2.style.display = "none";
});

paymentMethSelectBtn.addEventListener('click', () => {
    if (paymentMethRadio1.checked) {
        paymentMethVue1.style.display = "flex";
        paymentMethVue2.style.display = "none";
        paymentMethVue3.style.display = "none";
        paymentMethVue4.style.display = "none";

        paymentMethContent1.style.display = "flex";
        paymentMethContent2.style.display = "none";
        paymentMethContent3.style.display = "none";
        paymentMethContent4.style.display = "none";

        paymMethModal.style.display = "none";
    }

    if (paymentMethRadio2.checked) {
        paymentMethVue1.style.display = "none";
        paymentMethVue2.style.display = "flex";
        paymentMethVue3.style.display = "none";
        paymentMethVue4.style.display = "none";

        paymentMethContent1.style.display = "none";
        paymentMethContent2.style.display = "flex";
        paymentMethContent3.style.display = "none";
        paymentMethContent4.style.display = "none";

        paymMethModal.style.display = "none";
    }

    if (paymentMethRadio3.checked) {
        paymentMethVue1.style.display = "none";
        paymentMethVue2.style.display = "none";
        paymentMethVue3.style.display = "flex";
        paymentMethVue4.style.display = "none";

        paymentMethContent1.style.display = "none";
        paymentMethContent2.style.display = "none";
        paymentMethContent3.style.display = "flex";
        paymentMethContent4.style.display = "none";

        paymMethModal.style.display = "none";
    }

    if (paymentMethRadio4.checked) {
        paymentMethVue1.style.display = "none";
        paymentMethVue2.style.display = "none";
        paymentMethVue3.style.display = "none";
        paymentMethVue4.style.display = "flex";

        paymentMethContent1.style.display = "none";
        paymentMethContent2.style.display = "none";
        paymentMethContent3.style.display = "none";
        paymentMethContent4.style.display = "flex";

        paymMethModal.style.display = "none";
    } 

    document.querySelector('body').style.overflowY = "visible";
});


addressSelectBtn.addEventListener('click', () => {
    if(deliveryByPointRadio.checked) {
        deliveryMethod1.style.display = "block";
        deliveryMethod2.style.display = "none";

        if (pointAddressRadio1.checked) {
            address1.style.display = "block";
            address2.style.display = "none";
            address3.style.display = "none";
            address4.style.display = "none";
            address5.style.display = "none";
            address6.style.display = "none";

            deliveryMethodContent1.style.display = "flex";
            deliveryMethodContent2.style.display = "none";
            deliveryMethodContent3.style.display = "none";
            deliveryMethodContent4.style.display = "none";
            deliveryMethodContent5.style.display = "none";
            deliveryMethodContent6.style.display = "none";

            delMethModal.style.display = "none";
        }

        if (pointAddressRadio2.checked) {
            address1.style.display = "none";
            address2.style.display = "block";
            address3.style.display = "none";
            address4.style.display = "none";
            address5.style.display = "none";
            address6.style.display = "none";

            deliveryMethodContent1.style.display = "none";
            deliveryMethodContent2.style.display = "flex";
            deliveryMethodContent3.style.display = "none";
            deliveryMethodContent4.style.display = "none";
            deliveryMethodContent5.style.display = "none";
            deliveryMethodContent6.style.display = "none";

            delMethModal.style.display = "none";
        }

        if (pointAddressRadio3.checked) {
            address1.style.display = "none";
            address2.style.display = "none";
            address3.style.display = "block";
            address4.style.display = "none";
            address5.style.display = "none";
            address6.style.display = "none";

            deliveryMethodContent1.style.display = "none";
            deliveryMethodContent2.style.display = "none";
            deliveryMethodContent3.style.display = "flex";
            deliveryMethodContent4.style.display = "none";
            deliveryMethodContent5.style.display = "none";
            deliveryMethodContent6.style.display = "none";

            delMethModal.style.display = "none";
        }
    }

    if(deliveryByCourierRadio.checked) {
        deliveryMethod2.style.display = "block";
        deliveryMethod1.style.display = "none";

        if (courierAddressRadio1.checked) {
            address1.style.display = "none";
            address2.style.display = "none";
            address3.style.display = "none";
            address4.style.display = "block";
            address5.style.display = "none";
            address6.style.display = "none";

            deliveryMethodContent1.style.display = "none";
            deliveryMethodContent2.style.display = "none";
            deliveryMethodContent3.style.display = "none";
            deliveryMethodContent4.style.display = "block";
            deliveryMethodContent5.style.display = "none";
            deliveryMethodContent6.style.display = "none";

            delMethModal.style.display = "none";
        }

        if (courierAddressRadio2.checked) {
            address1.style.display = "none";
            address2.style.display = "none";
            address3.style.display = "none";
            address4.style.display = "none";
            address5.style.display = "block";
            address6.style.display = "none";

            deliveryMethodContent1.style.display = "none";
            deliveryMethodContent2.style.display = "none";
            deliveryMethodContent3.style.display = "none";
            deliveryMethodContent4.style.display = "none";
            deliveryMethodContent5.style.display = "block";
            deliveryMethodContent6.style.display = "none";

            delMethModal.style.display = "none";
        }

        if (courierAddressRadio3.checked) {
            address1.style.display = "none";
            address2.style.display = "none";
            address3.style.display = "none";
            address4.style.display = "none";
            address5.style.display = "none";
            address6.style.display = "block";

            deliveryMethodContent1.style.display = "none";
            deliveryMethodContent2.style.display = "none";
            deliveryMethodContent3.style.display = "none";
            deliveryMethodContent4.style.display = "none";
            deliveryMethodContent5.style.display = "none";
            deliveryMethodContent6.style.display = "block";

            delMethModal.style.display = "none";
        }
    }
    document.querySelector('body').style.overflowY = "visible";
});