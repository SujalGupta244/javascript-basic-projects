let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        const event = e.currentTarget.classList;
        if(event.contains('decrease')){
            count--;
        }
        else if(event.contains('increase')){
            count++;
        }
        else if(event.contains('reset')){
            count = 0;
        }if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count == 0){
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})




