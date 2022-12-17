//HANDLE OPENING AND CLOSING DELIVERY METHOD MODAL
const editDelMethBtn = document.querySelector('#delivery-edit--method');
export const delMethModal = document.querySelector('#delivery-method-modal');
const delMethModalCloseBtn = document.querySelector('#close-delivery--modal-btn');
const orderDelEditBtn = document.querySelector('#order-delivery-edit-btn');


export const address1 = document.querySelector('#address1');
export const address2 = document.querySelector('#address2');
export const address3 = document.querySelector('#address3');
export const address4 = document.querySelector('#address4');
export const address5 = document.querySelector('#address5');
export const address6 = document.querySelector('#address6');

export const courierAddressRadio1 = document.querySelector('#courier-address-radio1');
export const courierAddressRadio2 = document.querySelector('#courier-address-radio2');
export const courierAddressRadio3 = document.querySelector('#courier-address-radio3');
export const pointAddressRadio1 = document.querySelector('#point-address-radio1');
export const pointAddressRadio2 = document.querySelector('#point-address-radio2');
export const pointAddressRadio3 = document.querySelector('#point-address-radio3');

export const deliveryMethodContent1 = document.querySelector('#delivery-method-content1');
export const deliveryMethodContent2 = document.querySelector('#delivery-method-content2');
export const deliveryMethodContent3 = document.querySelector('#delivery-method-content3');
export const deliveryMethodContent4 = document.querySelector('#delivery-method-content4');
export const deliveryMethodContent5 = document.querySelector('#delivery-method-content5');
export const deliveryMethodContent6 = document.querySelector('#delivery-method-content6');

export const deliveryMethod1 = document.querySelector('#delivery-method1');
export const deliveryMethod2 = document.querySelector('#delivery-method2');

export const addressSelectBtn = document.querySelector('#address-select-btn');

editDelMethBtn.addEventListener('click', () => {
    delMethModal.style.display = "flex";
    document.querySelector('body').style.overflowY = "hidden";
});

delMethModalCloseBtn.addEventListener('click', () => {
    delMethModal.style.display = "none";
    document.querySelector('body').style.overflowY = "visible";
}) ;

orderDelEditBtn.addEventListener('click', () => {
    delMethModal.style.display = "flex";
    document.querySelector('body').style.overflowY = "hidden";
});

//HANDLE DIFFERENT CONTENT CAUSE OF INPUT VALUE OF DELIVERY METHOD
export const deliveryByPointRadio = document.querySelector('#delivery-by-point');
export const deliveryByCourierRadio = document.querySelector('#delivery-by-courier');
const deliveryByPointContent = document.querySelector('#delivery-by-point-content');
const deliveryByCourierContent = document.querySelector('#delivery-by-courier-content');
const pointLabel = document.querySelector('#point-label');
const courierLabel = document.querySelector('#courier-label');

//create default value checked
pointLabel.style.border = "2px solid #CB11AB";

deliveryByPointRadio.addEventListener('click', () => {
    deliveryByPointContent.style.display = "block";
    deliveryByCourierContent.style.display = "none";
    pointLabel.style.border = "2px solid #CB11AB";
    courierLabel.style.border = "2px solid rgba(203, 17, 171, 0.15)";
});

deliveryByCourierRadio.addEventListener('click', () => {
    deliveryByCourierContent.style.display = "block";
    deliveryByPointContent.style.display = "none";
    courierLabel.style.border = "2px solid #CB11AB";
    pointLabel.style.border = "2px solid rgba(203, 17, 171, 0.15)";
});

//HANDLE DELETING ADRESSES IN DELIVERY METHOD MODAL
const pointAddress1 = document.querySelector('#point-address-item1');
const pointAddress2 = document.querySelector('#point-address-item2');
const pointAddress3 = document.querySelector('#point-address-item3');

const courierAddress1 = document.querySelector('#courier-address-item1');
const courierAddress2 = document.querySelector('#courier-address-item2');
const courierAddress3 = document.querySelector('#courier-address-item3');

const pointAddressDltBtn1 = document.querySelector('#point-address-dlt-btn1');
const pointAddressDltBtn2 = document.querySelector('#point-address-dlt-btn2');
const pointAddressDltBtn3 = document.querySelector('#point-address-dlt-btn3');

const courierAddressDltBtn1 = document.querySelector('#courier-address-dlt-btn1');
const courierAddressDltBtn2 = document.querySelector('#courier-address-dlt-btn2');
const courierAddressDltBtn3 = document.querySelector('#courier-address-dlt-btn3');

pointAddressDltBtn1.addEventListener('click', () => {
    pointAddress1.style.display = "none";
});

pointAddressDltBtn2.addEventListener('click', () => {
    pointAddress2.style.display = "none";
});

pointAddressDltBtn3.addEventListener('click', () => {
    pointAddress3.style.display = "none";
});

courierAddressDltBtn1.addEventListener('click', () => {
    courierAddress1.style.display = "none";
});

courierAddressDltBtn2.addEventListener('click', () => {
    courierAddress2.style.display = "none";
});

courierAddressDltBtn3.addEventListener('click', () => {
    courierAddress3.style.display = "none";
});