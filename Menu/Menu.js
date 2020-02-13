/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:*/

  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>

  // The function takes an array as its only argument.

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>


 
 
    
  function createMenu(menuItems){
    const menu = document.createElement('div');
    const listTitle = document.createElement('ul');
   
    
    menu.appendChild(listTitle);
    const menuButton = document.querySelector('.menu-button');

    menu.classList.add('menu');

    menuButton.addEventListener('click', () =>{
      menu.classList.toggle('menu--open');
    })

    
    menuItems.map(data =>{
    const listText = document.createElement('li');
    listText.textContent = data;
    listTitle.appendChild(listText);
    
  });

 
  return menu;
  }
  const header = document.querySelector('.header');
  header.appendChild(createMenu(menuItems));  
   



