const mainBtnLeft = document.getElementById('main-characteristics-active-left');
const mainBtnRight = document.getElementById('main-characteristics-active-right');
const mainCharacteristicsItems = document.getElementById('main-characteristics-items');
const mainPdf = document.getElementById('main-pdf');

mainBtnLeft.onclick = function () {
    mainBtnRight.classList.remove('active');
    mainBtnLeft.className += ' active';
    mainCharacteristicsItems.style.display = 'block';
    mainPdf.style.display = 'none';
}
mainBtnRight.onclick = function () {
    mainBtnLeft.classList.remove('active');
    mainBtnRight.className += ' active';
    mainCharacteristicsItems.style.display = 'none';
    mainPdf.style.display = 'block';
}