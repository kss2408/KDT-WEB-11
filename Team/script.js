$(document).ready(function () {
  $('nav>ul>li').hover(
    function () {
      $('ul', this).stop().slideDown(200); // 부드러운 내리기
    },
    function () {
      $('ul', this).stop().slideUp(200); // 부드러운 올리기
    }
  );
});

function toggleBrightMode() {

  document.body.classList.toggle('dark-mode'); //body에 대해서 다크모드

  brightModeIconElem = document.getElementById('brightModeIcon');
  if (document.body.classList.contains('dark-mode')) { //버튼 이미지 바꾸는  
    brightModeIconElem.src = 'asset/16px-moon-icon.png';
  }
  else {
    brightModeIconElem.src = 'asset/16px-sun-icon.png';
  }
  toggleLinkColor('a'); //a태그에 대해서 다크모드
  toggleLinkColor('footer'); //footer태그에 대해서 다크모드

}

function toggleLinkColor(className) {
  const links = document.querySelectorAll(`${className}`);
  links.forEach(link => {
    link.classList.toggle('dark-mode');
  });
}