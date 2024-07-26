const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;
  let days = 31;
  const thirty = "April, June, September, November"
  if(thirty.includes(choice)) days = 30;
  if(choice === 'February') days = 29;
  

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.textContent = "";
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, 'January');
