const sizeSlider = document.querySelector('.sizeSlider');

const colorMode = document.querySelector('.colorMode');
colorMode.addEventListener('click', function(e){
    hoverRemover();
    colorMode.classList.add('hoverAnimation');
    const colorPick = document.querySelector('.colorPick')
    colorPick.addEventListener('input',function(e){
        mainAction(colorPick.value);
    })
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

/*const colorPick = document.querySelector('.colorPick')
colorPick.addEventListener('input',function(e){
    mainAction(colorPick.value);
})*/

/*const button = document.querySelectorAll('button');
for (let i=0; i<button.length; i++){
    button[i].addEventListener('click',function(e){
        button[i].classList.add('hoverAnimation');
    })
}*/

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
