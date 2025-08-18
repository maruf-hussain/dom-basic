function makeRed(){
   document.getElementById('brand').style.color = 'red';
}

document.getElementById('green').addEventListener('click', function(){
  document.getElementById('fruits').style.color = 'green';
}); 

document.getElementById('text-button').addEventListener('click',function(){
    const inputFeild = document.getElementById('text-input');
    const inputText = inputFeild.value;
    const textDisplay = document.getElementById('text-display');
    textDisplay.innerText = inputText;
    textDisplay.style.color = 'red';
    textDisplay.style.fontSize = '30px';
    inputFeild.value = '';
    
});

const box = document.getElementById('comment-box');
    box.style.backgroundColor = 'lightgray'
    box.style.border = '2px solid lightgreen'
    box.style.padding = '10px'
    box.style.borderRadius = '10px'
    box.style.marginTop = '20px'
    box.style.width = '200px'
    box.style.height = '100px'
   
    const h = document.getElementById('ht');
         h.style.color = 'black';
         h.style.fontSize = '20px';
         h.style.textAlign = 'center';


         document.getElementById('comment-button').addEventListener('click',function(){
            const commentInputFeild = document.getElementById('comment-input');
            const commentInputText = commentInputFeild.value;
            const commentDisplay = document.getElementById('comment-box'); 
            commentDisplay.innerText = commentInputText;
            commentDisplay.style.color = 'red';
            commentDisplay.style.fontSize = '20px';
            commentDisplay.style.textAlign = 'center';
            commentInputFeild.value = '';
         })

    
    
    
    // new element add
         document.getElementById('comment-button').addEventListener('click',function(){
            const commentInputFeild = document.getElementById('comment-input');
            const commentInputText = commentInputFeild.value;
            const commentDisplay = document.getElementById('comment-box'); 
            p = document.createElement('p');
            p.innerText = commentInputText;
            commentDisplay.appendChild(p);
            commentDisplay.style.color = 'red';
            commentDisplay.style.fontSize = '20px';
            commentDisplay.style.textAlign = 'center';
            commentInputFeild.value = '';
         })




        //  github delete...............
 document.getElementById('delete-confirme').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('delete-btn');
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled');
        deleteButton.style.backgroundColor = 'lightgreen';  
    }
    else{
        deleteButton.setAttribute('disabled', true);
        deleteButton.style.backgroundColor = 'red';
    }
 });