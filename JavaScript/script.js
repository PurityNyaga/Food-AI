console.log("Hello world!");

const myName  = "Purity Wangechi";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.addEventListener("click", function() {
//     h1.textContent = myName;
//     h1.style.backgroundColor = "red";
//     h1.style.padding = "5rem";
// });

// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear)
yearEl.textContent = currentYear;

//make mobile navigation work

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl =document.querySelector("");

btnNav.addEventListener("click", () => {
    headerEl.classList.toggle(".nav-open");
})


// h1.addEventListener("click", function() {
//     // headerEl.classList.toggle("nav-open");
// })

//smooth scrolling

const allLinks = document.querySelector("a:link");
allLinks.forEach(function(link) {
    link.addEventListener("click", function(e){
        // console.log(e);
        e.preventDefault();
        const href = Link.getAttribute("href");
        console.log(href);
        if (href === "#") window.scrollTo({
            top: 0,
            behaviour: "smooth",
        })

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }
        if (link.classList.contains("main-nav-link"))
        headerEl.classList.toggle("nav-open");
    })
})
console.log(allLinks);

//sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
    }
}, 
{
    root: null,
    threshold: 0,
    rootMargin: "-80px",
});
obs.observe(sectionHeroEl);
