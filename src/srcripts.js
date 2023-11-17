let body = document.body
console.log(body.offsetWidth);
const listDescription = document.querySelectorAll('.list-description');
const listItems = document.querySelectorAll('.list-items');

listDescription.forEach(description => {
  description.addEventListener('mouseover', showListItems);
  description.addEventListener('mouseout', hideListItems);
});

listItems.forEach(item => {
  item.addEventListener('mouseover', showListItems);
  item.addEventListener('mouseout', hideListItems);
});

function showListItems() {
  const parentContainer = this.parentElement;
  const items = parentContainer.querySelectorAll('.list-items');
  
  items.forEach(item => {
    item.style.height = 'auto';
    item.style.transition = 'all .5s';
    item.style.opacity = '1';
    item.style.visibility = 'visible';
  });
}

function hideListItems() {
  const parentContainer = this.parentElement;
  const items = parentContainer.querySelectorAll('.list-items');
  
  items.forEach(item => {
    item.style.height = '0';
    item.style.transition = 'all .1s';
    item.style.opacity = '0';
    item.style.visibility = 'hidden';
  });
}