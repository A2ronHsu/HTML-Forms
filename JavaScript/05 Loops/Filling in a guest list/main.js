const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for(let elem of people){
   if(elem == 'Phil' || elem == 'Lola') refused.textContent += elem+', '
   else admitted.textContent += elem+', ';
}

