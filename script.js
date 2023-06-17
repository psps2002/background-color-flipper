document.addEventListener('DOMContentLoaded', function(){
    button= document.getElementById('button')
    display = document.getElementById('background');
    body = document.getElementById('body');
    let count = 0;
    
    button.addEventListener('click',function(){
        count = count+1
        if (count == 0){
            body.style.background = 'red';
            background.innerHTML = `Background is #FF0000`;
        }
        else if (count == 1){
            body.style.background = 'green';
            background.innerHTML = `Background is #00FF00`
        }else if (count == 2){
            body.style.background = 'yellow';
            background.innerHTML = `Background is #FFFF00`
        }else if (count == 3){
            body.style.background = 'orange';
            background.innerHTML = `Background is #FFA500`
        }else if(count == 4){
            body.style.background = 'blue';
            background.innerHTML = `Background is #0000FF`
        }
        else if(count==5){
            body.style.background = 'red'
            background.innerHTML = `Background is #FF0000`
            count = 0
        }
    })

   
})