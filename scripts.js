let btnAdd = document.querySelector('#add')
let btnSubtract = document.querySelector('#subtract')
let input = document.querySelector('input')

btnAdd.addEventListener('click',()=>{
    input.value = parseInt(input.value) + 1;
})

btnSubtract.addEventListener('click',()=>{
    input.value = parseInt(input.value) - 1;
})


var accordions = document.getElementsByClassName("accordion");

 for(var i=0; i <accordions.length; i++){
   accordions(i).onclick = function() {
     var content =this.nextElementSibling;

     if(content.style.maxHeight){
       //accordion is open we need to close it
       content.style.maxHeight=null;
     } else{
       //accordion is closed

       content.style.maxHeight=content.scrollHeight + "px"
     }
   }
 }