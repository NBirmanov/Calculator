const inpNum = document.querySelector(".inp-num");

function addSymbolToInput(number){
    if(inpNum.value == '0'){
        inpNum.value = number;
    }
    else{
        inpNum.value += number;
    }
}

function result(){
    inpNum.value = eval(inpNum.value);
}

function delSimbole(){
    let delSim = inpNum.value.slice(0, -1);
    inpNum.value = delSim === ' '? 0: delSim;
}

function delAllSimbol(){
    inpNum.value = 0;
}
