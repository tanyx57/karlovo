;(function () {
  var menuButton = document.getElementById('menu-mob')
  var menuList = document.getElementById('menu')

  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('open')
    menuList.classList.toggle('open')
  })

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.lazy-bg').classList.add('loaded')
  })
})()
