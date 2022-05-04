//effet hover sur les boutons
let btninverse = document.getElementsByClassName('btninverse');
console.log(btninverse);
for (let i = 0; i < btninverse.length; i++);
btninverse[i].addEventListener('mouseover', () => {
    btninverse[i].style.backgroundColor = '#b11313';
})