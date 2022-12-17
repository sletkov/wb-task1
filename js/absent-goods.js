//ABSENT GOODS

//HANDLE SHOW/HIDE ABSENT GOODS
const showAbsentGoodsBtn = document.querySelector('#show-absent-goods-btn');
const absentGoodsContainer= document.querySelector('#absent-goods-container');
const showAbsentGoodsIcon = document.querySelector('#show-absent-goods-icon');

const absentGoodsUnderline = document.querySelector('#absent-goods-underline');

showAbsentGoodsBtn.addEventListener('click', () => {
    if(absentGoodsContainer.style.display != "none") {
        absentGoodsContainer.style.display = "none";
        showAbsentGoodsIcon.style.transform = "rotate(180deg)";
        absentGoodsUnderline.style.display = "block";
    } else {
        absentGoodsContainer.style.display = "flex";
        showAbsentGoodsIcon.style.transform = "rotate(0deg)";
        absentGoodsUnderline.style.display = "none";
    }
});