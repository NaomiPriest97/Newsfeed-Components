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
    const listText = document.createElement('li');
    const listText2 = document.createElement('li');
    const listText3 = document.createElement('li');
    const listText4 = document.createElement('li');
    const listText5 = document.createElement('li');
    const listText6 = document.createElement('li');


    //end created elements
    menu.appendChild(listTitle);
    listTitle.appendChild(listText);
    listTitle.appendChild(listText2);
    listTitle.appendChild(listText3);
    listTitle.appendChild(listText4);
    listTitle.appendChild(listText5);
    listTitle.appendChild(listText6);


    const menuButton = document.querySelector('.menu-button');

    menu.classList.add('menu');

    menuButton.addEventListener('click', () =>{
      menu.classList.toggle('menu--open');
    })

    //console.log(menuItems);
    menuItems.map(data =>{
    listText.textContent = data;
    listText2.textContent = data;
    listText3.textContent = data;
    listText4.textContent = data;
    listText5.textContent = data;
    listText6.textContent = data;

  });

 
  return menu;
  }
  const header = document.querySelector('.header');
  header.appendChild(createMenu(menuItems));  
   



