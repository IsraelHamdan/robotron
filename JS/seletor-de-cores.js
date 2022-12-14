const btnSeletor = document.querySelectorAll('[data-seletor]');
const imgRobotron = document.querySelector('.robo');
const btnMagic = document.querySelector('.seletor--de--cores');
const titulo =  document.querySelector('.titulo');


btnMagic.addEventListener('click' , (evento) => {
   
   if (evento.target.nodeName == 'BUTTON') {
      const cor = evento.target.attributes[1].value;
      imgRobotron.src = `img/Robotron-2000-${cor}/Robotron-2000-${cor}.png`;
      titulo.textContent = `Robotron ${cor}`
   }

})


  