const reviews = [
    {   
        id:1,
        name: "ayush",
        job: "web development",
        img: "../img/1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, error! \
            Molestiae alias praesentium, nobis natus exercitationem nemo quis labore \
            veniam eaque ratione maxime accusantium asperiores recusanda beatae ipsum."
    },

    {
        id: 2,
        name: "utkarsh",
        job: "web design",
        img: "../img/2.jpg",
        text: "speriores recusanda beatae ip adipisicing elit. Esse, error! \
            Molestiae alias praesentium, nobis natus exercitationem nemo quis labore \
            veniam eaque ratione maxime accusantium asperiores recusanda beatae ipsum."
    },

    {
        id:3,
        name: "jatin",
        job: "intern",
        img: "../img/01.jpg",
        text: "Molestiae alias praesentium, nobis natus exerci  lit. Esse, error! \
            Molestiae alias praesentium, nobis natus exercitationem nemo quis labore \
            veniam eaque ratione maxime accusantium asperiores recusanda beatae ipsum."
    },

    {
        id:4,
        name: "sujal",
        job: "the boss",
        img: "../img/3.png",
        text: "Sicing elit. Esse, error! \
            Molestiae alias praesentium, nobis natus exercitationem nemo quis labore \
            veniam eaque ratione maxime accusantium asperiores recusanda beatae ipsum  \
            Molestiae alias praesentium, nobis natus exerci."
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0 ;

window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);
})


function showPerson(person){
    const item = reviews[person]; 
    author.textContent = item.name;
    img.src = item.img;
    job.textContent = item.job;
    info.textContent = item.text;
    
}

prevBtn.addEventListener('click',()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = (reviews.length - 1);
    }
    showPerson(currentItem);

})

nextBtn.addEventListener('click',()=>{
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);

})

randomBtn.addEventListener('click',()=>{
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem);

})





