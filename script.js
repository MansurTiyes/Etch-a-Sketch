const sizeSlider = document.querySelector('.sizeSlider');

const colorMode = document.querySelector('.colorMode');
colorMode.addEventListener('click', function(e){
    hoverRemover();
    colorMode.classList.add('hoverAnimation');
    const colorPick = document.querySelector('.colorPick')
    mainAction(colorPick.value);
});

const rainbowMode = document.querySelector('.rainbowMode');
rainbowMode.addEventListener('click',function(e){
    hoverRemover();
    rainbowMode.classList.add('hoverAnimation');
    rainbowPaint();
});

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click',function(e){
    hoverRemover();
    eraser.classList.add('hoverAnimation');
    mainAction('white');
});

const clear = document.querySelector('.clear');
clear.addEventListener('click',function(e){
    hoverRemover();
    clear.classList.add('hoverAnimation');
    const gridElement = document.querySelectorAll('.gridElement');
    for (let i=0; i<gridElement.length; i++){
        gridElement[i].setAttribute('style','background-color: white;');
    }
    mainAction('white');
});

sizeSlider.addEventListener('input',function(e){
    gridRemover();
    gridMaker(sizeSlider.value);
    sizeDisplayer(sizeSlider.value);
});

function mainAction(input){
    const gridElement = document.querySelectorAll(".gridElement");
    for(let i=0; i<gridElement.length; i++){
        gridElement[i].addEventListener('mouseover',function(e){
            gridElement[i].setAttribute('style',`background-color: ${input};`);
        })
    }
}

function rainbowPaint(){
    const gridElement = document.querySelectorAll(".gridElement");
    for(let i=0; i<gridElement.length; i++){
        gridElement[i].addEventListener('mouseover',function(e){
            gridElement[i].setAttribute('style',`background-color: rgb(${randomNumberGenerator()},${randomNumberGenerator()},${randomNumberGenerator()});`);
        })
    }
}

function gridMaker(input){
    const grid = document.querySelector('.grid');
    grid.setAttribute('style', `grid-template-columns: repeat(${input},1fr); grid-template-rows: repeat(${input},1fr);`);
    for (let i =0; i<input**2; i++){
        const div = document.createElement('div');
        div.classList.add('gridElement');
        grid.appendChild(div);
    }
}

function sizeDisplayer(input){
    const sizeValue = document.querySelector('.sizeValue');
    sizeValue.textContent = input+"x"+input;
}

function gridRemover(){
    const gridElement = document.querySelectorAll('.gridElement');
    for(let i =0; i<gridElement.length; i++){
        gridElement[i].remove();
    }
}

function hoverRemover(){
    const hoverAnimation = document.querySelectorAll('.hoverAnimation');
    for(let i = 0; i<hoverAnimation.length; i++){
        hoverAnimation[i].classList.remove('hoverAnimation');
    }
}

function randomNumberGenerator(){
    const min = 0;
    const max = 255;
    let res = Math.floor(Math.random()*(max-min+1)+min);
    return res;
}
