
let shownResult = document.querySelector('.result');

function getNumber(val){
  shownResult.innerText = shownResult.innerText + val;
}

function result(){
  let x = shownResult.innerText;
  let y = eval(x);
  shownResult.innerText = y;
}


function clearInput(){
  shownResult.innerText = '';
}

function getOperation(val){
  let lastResult = shownResult.innerText.slice(-1);
  if(lastResult === "+"){
    return;
  } else  if(lastResult === "-"){
    return;
  } else  if(lastResult === "*"){
    return;
  } else  if(lastResult === "/"){
    return;
  } else  if(lastResult === "."){
    return;
  } else{
    shownResult.innerText = shownResult.innerText + val;
  }
}

