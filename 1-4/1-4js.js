/*
const bodyHtml = document.body
//console.log(bodyHtml.childNodes)
const childNodes = bodyHtml.childNodes
for(let node of childNodes){
    console.log(node)
}
const bodyChildren = bodyHtml.children
console.log(bodyChildren)

const elementsOne = bodyHtml.querySelectorAll(".hz")
console.log(elementsOne)
const elementsTwo = bodyHtml.querySelectorAll("p")
console.log(elementsTwo)*/
/*const textElementContent = document.querySelector(`.hz`)
const textElement = textElementContent.innerHTML
console.log(textElementContent)
textElementContent.innerHTML = `<h1 style="color:palevioletred">hi</h1>`
console.log(textElement)*/
/*const textElementContent = document.querySelector(`.hz`)
const textElement = textElementContent.outerHTML
console.log(textElementContent)
textElementContent.innerHTML = `<h1 style="color:palevioletred">hi</h1>`
console.log(textElement)*/
const forButton = document.querySelector(`.blackBlocks`)

function hideButton1() {
    forButton.style.display = `none`
}

function hideButton2() {
    forButton.remove()
    console.log(forButton)
}

function hideButton3() {
    forButton.style.visibility = `hidden`
}

function restartBlock() {
    if (forButton.style.visibility === `hidden`) {
        forButton.style.visibility = `visible`
    } else if (forButton.style.display === `none`) {
        forButton.style.display = `block`
    } else {
        forButton.style.display = "none"
    }
}

function allBlocks() {
    const blocks = document.querySelectorAll('.blackBlocks');

    blocks.forEach(function (block) {
        if (block.style.display === 'block') {
            block.style.display = 'none';
        } else {
            block.style.display = 'block';
        }
    });
}

function deleteCssSelector() {
    const inputHtml = document.querySelector(`.input`).value
    const objectAtribute = document.querySelectorAll(inputHtml)
    objectAtribute.forEach(function (block) {
        block.style.display = `none`
    });
}

function secondClick() {
    let element = document.getElementById(`yellowSquare`)
    let countOfCLicks = 0;
    element.addEventListener(`click`, function (){
        countOfCLicks++
        if(countOfCLicks === 1){
            alert(`hi`)
        }
        else{
            element.remove()
        }
    })

}

function onMouse() {
    const blackSquare = document.getElementById(`blackSquare`);
    blackSquare.style.display = `none`;
}

function outMouse() {
    const blackSquare = document.getElementById(`blackSquare`);
    blackSquare.style.display = `block`;
}
function showGreenRectangle() {
    document.getElementById("greenRectangle").style.display = "block";
}

function hideGreenRectangle() {
    document.getElementById("greenRectangle").style.display = "none";
}
function uploadImages(){
document.getElementById("img1").src = document.getElementById('thirdInput').value;
document.getElementById(`img1`).style.display = `block`
}
function textarea(){

    const valueOfTextArea = document.getElementById(`firstTextArea`).value.split(`\n`)
    const imgElementFirst = document.getElementById(`image-container`)
    imgElementFirst.innerHTML = ``
    valueOfTextArea.forEach(function (link){
        if(link !== ``){
            let imgElement = document.createElement(`img`)
            imgElement.src = link.trim()
            imgElementFirst.appendChild(imgElement)
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    let coordinatesDiv = document.getElementById('cursorXCss');
    document.addEventListener(`mousemove`, function (e) {
        let cursorX = e.clientX
        let cursorY = e.clientY
        coordinatesDiv.innerHTML = 'X - ' + cursorX + ', Y - ' + cursorY;
    })
})
function language(){

    let  userLanguage = document.documentElement.lang;
    const text = document.getElementById(`language`)
    text.innerHTML = `Language: ` + userLanguage
    return (text)
}
language()
const getId = navigator.geolocation.watchPosition(function (position){
    const div = document.getElementById(`coords`)
    const getLatitude = position.coords.latitude
    const getLongitude = position.coords.longitude
    div.innerHTML = `Latitude: ` + getLatitude + `<br> Longitude: ` + getLongitude
})
console.log(getId)
window.onload = function () {

    const block1 = document.getElementById('block1');
    block1.innerHTML = localStorage.getItem('block1Text') || '';


    const block2 = document.getElementById('block2');
    block2.innerHTML = getCookie('block2Text') || '';


    const block3 = document.getElementById('block3');
    block3.innerHTML = sessionStorage.getItem('block3Text') || '';


    block1.addEventListener('input', function () {
        localStorage.setItem('block1Text', block1.innerHTML);
    });


    block2.addEventListener('input', function () {
        setCookie('block2Text', block2.innerHTML, 365);
    });


    block3.addEventListener('input', function () {
        sessionStorage.setItem('block3Text', block3.innerHTML);
    });
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}

// Функція для отримання значення куки за ім'ям
function getCookie(name) {
    const keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}
}
document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    scrollToTopBtn.setAttribute("role", "button");
    scrollToTopBtn.setAttribute("aria-label", "Scroll to top");

    window.addEventListener("scroll", function () {
        // Show or hide button depending on scroll
        if (window.pageYOffset > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
});



document.addEventListener(`click`,  function (event){
    if (event.target.id === 'smallBlock'){
        alert(`it was a small one`)}
    if (event.target.id === `bigBlock`){
        alert(`it was a big one`)
    }
})

document.getElementById(`greySquareButton`).addEventListener(`click`, function (){
    const square = document.getElementById(`greySquare`)
    square.style.display = `block`
    document.body.style.overflow = `hidden`
    square.addEventListener(`click`, function (){
        square.style.display = `none`
        document.body.style.overflow = `auto`
    })
})
document.getElementById(`myForm`).addEventListener(`click`, function (event){
    event.preventDefault()
    console.log(`error`)
})

const inputFile = document.getElementById(`inputDragAndDrop`)

inputFile.addEventListener(`change`, changeImage)
const imageView = document.getElementById(`imgView`)
const dropArea = document.getElementById(`drop-Area`)
function changeImage(){

    let imgLink = URL.createObjectURL(inputFile.files[0])
    imageView.style.backgroundImage = `url(${imgLink})`
    imageView.textContent = ``
    imageView.style.borderWidth = 0;
}
dropArea.addEventListener(`dragover`, function (event){
    event.preventDefault()
})
dropArea.addEventListener(`drop`, function (event){
    event.preventDefault()
    inputFile.files = event.dataTransfer.files
    uploadImages()
})