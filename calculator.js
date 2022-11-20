

function getNumber(val){
let shownResult = document.getElementsByClassName('equal');
shownResult.value += val;
return val;
}

function result(){
  let x = document.getElementsByClassName('equal').value;
  let y = eval(x);
  document.getElementsByClassName('equal').value = y;
  return y;
}

function clear(){
  document.getElementsByClassName('equal').value='';
}

getNumber();
result();
clear();

