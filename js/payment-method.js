//HANDLE OPENING AND CLOSING PAYMENT METHOD

const editPaymMethBtn = document.querySelector('#edit-payment-method');
const paymMethModalCloseBtn = document.querySelector('#close-payment-modal-btn');
const orderPaymEditBtn = document.querySelector('#order-payment-edit-btn');
export const paymMethModal = document.querySelector('#payment-method-modal');
export const paymentMethSelectBtn = document.querySelector('#payment-method-select-btn');
export const paymentMethRadio1 = document.querySelector('#payment-method-radio1');
export const paymentMethRadio2 = document.querySelector('#payment-method-radio2');
export const paymentMethRadio3 = document.querySelector('#payment-method-radio3');
export const paymentMethRadio4 = document.querySelector('#payment-method-radio4');

export const paymentMethVue1 = document.querySelector('#payment-method-vue1');
export const paymentMethVue2 = document.querySelector('#payment-method-vue2');
export const paymentMethVue3 = document.querySelector('#payment-method-vue3');
export const paymentMethVue4 = document.querySelector('#payment-method-vue4');

export const paymentMethContent1 = document.querySelector('#payment-method-content1');
export const paymentMethContent2 = document.querySelector('#payment-method-content2');
export const paymentMethContent3 = document.querySelector('#payment-method-content3');
export const paymentMethContent4 = document.querySelector('#payment-method-content4');


editPaymMethBtn.addEventListener('click', () => {
    paymMethModal.style.display = "flex";
    document.querySelector('body').style.overflowY = "hidden";
});

paymMethModalCloseBtn.addEventListener('click', () => {
    paymMethModal.style.display = "none";
    document.querySelector('body').style.overflowY = "visible";
});

orderPaymEditBtn.addEventListener('click', () => {
    paymMethModal.style.display = "flex";
    document.querySelector('body').style.overflowY = "hidden";
});