const questionBtn = document.querySelectorAll(".question-btn");


// questionBtn.forEach(btn =>{{
//     btn.addEventListener('click',(e)=>{
        // console.log(e.currentTarget.parentElement.parentElement)
//         const question = e.currentTarget.parentElement.parentElement.classList; 
//         question.toggle('show-text')
//     });
// }});

const questions = document.querySelectorAll(".question");

questions.forEach(ques =>{
    const btn = ques.querySelector('.question-btn');
    btn.addEventListener('click',()=>{
        questions.forEach(item =>{
            if(item !== ques){
            item.classList.remove('show-text');
            }
        })
        ques.classList.toggle('show-text');
    })
})








