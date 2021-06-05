/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
// dynamically create a navigation menu based on the sections of the page .


const sections = document.querySelectorAll("section");// get elements to set changes for it  as follow
const barList =  document.getElementById("navbar__list");// get ul to add some children to it 

const Fragment = document.createDocumentFragment();
// for loop to creat list and link relative with text 
for (let i=1; i <= sections.length; i++){
let list =document.createElement("li");//creat a new list elements

let newLink =document.createElement("a");//creat a new link elements

let get = sections[i-1].getAttribute("data-nav");//the text for each navigation item coming from each section data atribute  you anchoring to each section
let nodeText = document.createTextNode(get) ;
newLink.appendChild(nodeText);
//add click event to each link for scrooling smoothly to relative section
newLink.addEventListener("click" , (e)=>{
    sections[i-1] .scrollIntoView({
        behavior:"smooth"
    });
});

list.appendChild(newLink);//append a new link to a new list
Fragment.appendChild(list);//append a new list to fragment 

}

barList.appendChild(Fragment);//append all fragment to the ul element
        
    
//add highlight features to active section
document.addEventListener("DOMContentLoaded" ,()=>{

let changes = {
    root: null , //the screen (wich element the viewport use )
    rootMargine : '0px' ,
    threshold : 0.5,// what percentage of section is touching the viewport

};
//using  intersection observer api to defined element which appear on viewport that will applay the changes on it
let observer = new IntersectionObserver(callback,changes);//callback function  is a function will be called every time element will appear and leaves the viewportS
sections.forEach(section => {
    observer.observe(section);
});
//looping through every section to applay an active class on it
function callback(entries) {
    entries.forEach(entry => {
        if( entry.isIntersecting){
            console.log(entry.target);
        entry.target.classList.add('active');
        }
     else{entry.target.classList.remove('active');
    }
    });
}
});

    


    

