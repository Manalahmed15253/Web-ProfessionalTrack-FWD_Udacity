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
// the array which carry the sections:
const navBarList=document.querySelector("#navbar__list")
const sections=Array.from(document.querySelectorAll('Section'));

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//Fuction to add the section to the navigation menu
function addSections(sections){
  for (let i=1;i<=sections.length;i++)
  {
    //the list element
    let newLiElement=document.createElement('li');
    //the anchor element //to connect the element with its corresponding section
    let newAnchorElement=document.createElement('a');
    newAnchorElement.textContent='section'+i;
    newAnchorElement.setAttribute("href","#section"+i);
    newAnchorElement.setAttribute("data-nav","Section "+i);
    //append the anchor element to the list element
    newLiElement.appendChild(newAnchorElement);
    //append the list element to the navigation unoredered list
    navBarList.appendChild(newLiElement);
  }

}

  //get every section bounding



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
addSections(sections);
const anchorElements=Array.from(document.querySelectorAll('a'));
console.log(anchorElements);
window.addEventListener('scroll',function(){
  for (let i=0;i<sections.length;i++)
  {
    let section=sections[i];
    let anchor=anchorElements[i];
    let bounding = section.getBoundingClientRect();

    //check if the section is in viewport
    if (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
      {
        section.classList.add('your-active-class');
        anchor.classList.add('active_nav');


      }
      else
      {
        section.classList.remove('your-active-class');
        anchor.classList.remove('active_nav');

      }
  }

});

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
