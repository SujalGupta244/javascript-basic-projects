data = [
    {
        id: 'history',
        title: 'History',
        info: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice
        pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean
        shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small
        batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
        direct trade hoodie ugh chambray, craft beer pork belly flannel tacos
        single-origin coffee art party migas plaid pop-up.`
    },
    {
        id: 'vision',
        title: 'Vision',
        info:`Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal
        deep v hella biodiesel. Church-key listicle polaroid put a bird on it
        chillwave palo santo enamel pin, tattooed meggings franzen la croix cray.
        Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu
        mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof
        party hammock master cleanse pop-up truffaut, bicycle rights skateboard
        affogato readymade sustainable deep v live-edge schlitz narwhal.`
    },
    {
        id: 'goals',
        title: 'Goals',
        info: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four
        dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred
        fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel
        sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid
        cold-pressed roof party. Small batch adaptogen coloring book heirloom.
        Letterpress food truck hammock literally hell of wolf beard adaptogen everyday
        carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa
        chicharrones.`
    }
]


const articleContainer = document.querySelector('.about-content');

window.addEventListener('load',()=>{
    let content = data.map(item =>{
        return `<div class="content" id="${item.id}">
                    <h4>${item.title}</h4>
                    <p>${item.info}</p>                      
                </div>
                `
    })
    content = content.join("");
    articleContainer.innerHTML = content;
    // console.log(content)
    
    const btns = document.querySelectorAll(".tab-btn");
    const articles = document.querySelectorAll(".content");
        
    btns.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            const id = e.currentTarget.dataset.id;
            const currentArticle = about.querySelector(`#${id}`);
            articles.forEach(article =>{
                article.classList.remove('active');
                // console.log(article.index)
            })
            btns.forEach(btn =>{
                btn.classList.remove('active');
                e.currentTarget.classList.add('active');
            })
            currentArticle.classList.add('active');
            // console.log(id,currentArticle.classList)
        })
    })
    
})

const about = document.querySelector(".about");






// about.addEventListener("click",function(e){
//     // console.log(e.target.dataset.id);
//     const id = e.target.dataset.id;
//     if(id){
//         // remove active from other buttons
//         btns.forEach(function(btn){
//             btn.classList.remove("active");
//             e.target.classList.add("active");
//         });

//         // hide other  articles
//         articles.forEach(function(article){
//             article.classList.remove('active');
//         });
//         const element = about.querySelector(`#${id}`);
//         element.classList.add("active");
//     }
// });



























