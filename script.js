const sizeSlider = document.querySelector('.sizeSlider');

sizeSlider.addEventListener('input',function(e){
    gridRemover();
    gridMaker(sizeSlider.value);
});

mainAction();

function mainAction(){
    const gridElement = document.querySelectorAll(".gridElement");
    for(let i=0; i<gridElement.length; i++){
        gridElement[i].addEventListener('click',function(e){
            gridElement[i].classList.add('styleApply');
        })
    }
}

function gridMaker(input){
    const grid = document.querySelector('.grid');
    for (let i =0; i<input; i++){
        const div = document.createElement('div');
        div.classList.add('gridElement');
        grid.appendChild(div);
    }
}

function gridRemover(){
    const gridElement = document.querySelectorAll('.gridElement');
    for(let i =0; i<gridElement.length; i++){
        gridElement[i].remove();
    }
}

