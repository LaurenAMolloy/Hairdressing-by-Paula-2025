const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const faders = document.querySelectorAll(".fade-in-image");

const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userName = document. querySelector('.username');

//create an array of objects to populate the review section
const testimonials = [
    {
    name: 'Lauren, Dolgarrog',
    text: 'I had an incredible experience at Hairdressing by Paula Lorraine! My hair colour was in desperate need of correction, and the talented colourist performed a root tap and added highlights. The results are stunning. My hair looks more natural, is easier to style, and is so much easier to maintain. The service was professional and personalised, making me feel valued and confident in their expertise. I could not be happier with my new look. Highly recommend this service for anyone seeking top-quality hair care!',
    },
    {
        name: 'Alyson, Rhyd-Y-Foel',
        text: 'I recently visited Paula at the salon in Trefriw, and I am thrilled with the outcome! Paula was professional and attentive, making me feel comfortable and well cared for throughout the process. I am absolutely delighted with my new look and highly recommend Paula for anyone needing expert hair care.'

        },
    {
        name: 'Lil, Conwy',
        text: 'We love Paula! I remember feeling nervous when she first suggested foils, but my hair looks amazing. Paula always does her best to accomodate me and my family. Always professional. Patient with family',
    },
    {
        name: 'Mona, Trefriw',
        text: 'Paula has been doing my hair for years. I trust her 100%. She is great at giving advice on how to look after your hair and very nice and polite. I wouldn not have anyone else!',
    },
    {   
        name: 'J, Conwy',
        text: 'I can not speak highly enough of Paula. It is so convinient when she comes to my house to do mine and my sisters hair. She manages to keep our thick curls under control somehow and we have a chance for a gossip and a catch up at the same time. What more could we ask for?',
    },
     
]


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
});


const appearOptions = {
    threshold: .25,
    rootMargin: "0px 0px -50px 0px"
    
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
    ){
        entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
        })
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

//define variable for index
let idx = 1

function updateTestimonials() {
    const {name, text} = testimonials[idx]

    userName.innerHTML = name
    testimonial.innerHTML = text
   

    idx++

    if(idx > testimonials.length -1) {
        idx = 0
    }
}

setInterval(updateTestimonials, 10000);


document.getElementById("copyright-year").innerText = `${new Date().getFullYear()}`;

