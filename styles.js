const btnToggle = document.querySelector('.btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('side_bar').classList.toggle('active');
  console.log(document.getElementById('side_bar'))
});