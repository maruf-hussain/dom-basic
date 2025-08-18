function makeRed(){
   document.getElementById('brand').style.color = 'red';
}

document.getElementById('green').addEventListener('click', function(){
  document.getElementById('fruits').style.color = 'green';
}); 

document.getElementById('text-button').addEventListener('click',function(){
    const inputText = document.getElementById('text-input').value;
    const textDisplay = document.getElementById('text-display');
    textDisplay.innerText = inputText;
    textDisplay.style.color = 'red';
    textDisplay.style.fontSize = '30px';
    inputText.value = '';
    
})