// これまでのコードを貼り付けて制作を進めましょう
'use strict';

{
  // menu
  const list = document.querySelector('.list');
  const overlay = document.querySelector('.overlay');

  list.addEventListener('click', () => {
    overlay.classList.toggle('show');
    list.classList.toggle('open');
  });
  
  
  // concept
  const conceptContents = document.querySelectorAll('.concept-contents');

  conceptContents.forEach(clickedItem => {
    
    clickedItem.addEventListener('click', () => {
      clickedItem.classList.toggle('active');
    });
    
  });
  

}
