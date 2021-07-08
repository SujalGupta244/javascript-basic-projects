// Setting current Year to the page.
const date = document.querySelector("#date");

date.innerHTML = new Date().getFullYear();


const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click',()=>{
    // linksContainer.classList.toggle('show-links')
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linkHeight  = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        // containerHeight = linkHeight;
        linksContainer.style.height = `${linkHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
    // console.log(containerHeight,linkHeight)
})


const nav = document.querySelector('#nav');
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        nav.classList.add('fixed-nav');
        topLink.classList.add('show-link')
    }else{
        nav.classList.remove('fixed-nav');
        topLink.classList.remove('show-link')
    }
    // console.log(scrollHeight,navHeight);
})

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link =>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains('fixed-nav');
        
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
            // console.log(position)
        }
        console.log(position,containerHeight)   
        window.scrollTo({
            left:0,
            top: position
        });
        linksContainer.style.height = 0;
    })
})





















