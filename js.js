
let button1 = document.querySelector('.button-task-1');
let button2 = document.querySelector('.button-task-1-2');
let textarea = document.querySelector('.textar');
let conteiner = document.querySelector('.conteiner');
let numberInputs = 1;

button1.addEventListener('click', inputAdd);

function inputAdd(){
    if(numberInputs<5){
  conteiner.innerHTML += '<label><input type="text"><button>-</button><br><br></label> '
  numberInputs +=1;
}
}

conteiner.addEventListener('click', inputDelete);

function inputDelete(e){
  if(e.target.localName == 'button'){
      e.target.parentNode.remove();
      numberInputs = numberInputs -1;
  }
}

button2.addEventListener('click', inputValue);
function inputValue(){
  let inputs = document.querySelectorAll('input[type=text]');
  let values = '';
  if(document.getElementById('all').checked){
  for (var index = 0; index < inputs.length; index++) {
      values += inputs[index].value + '\n';      
  }
    }
if(document.getElementById('even').checked){
  for (var index = 0; index < inputs.length; index++) {
    if(index % 2 == 0)  
    values += inputs[index].value + '\n';      
  }
    }
if(document.getElementById('odd').checked){
  for (var index = 0; index < inputs.length; index++) {
    if(index % 2 != 0)  
    values += inputs[index].value + '\n';      
  }
    }
    textarea.textContent = values;
}
