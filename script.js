'use strict';

const list = [
  'images/01.jpg',
  'images/02.jpg',
  'images/03.jpg',
  'images/04.jpg',
  'images/05.jpg',
  'images/06.jpg',
  'images/07.jpg',
  'images/08.jpg',
  'images/09.jpg',
  'images/10.jpg',
];

const img = document.getElementById('main');

const p = document.createElement('p');
p.style.color = 'lightgray';

const div = document.getElementById('photo');
div.insertBefore(p, img.nextElementSibling);

function setImage() {
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
};

const [leftArrow, rightArrow] = document.getElementsByTagName('span');
document.addEventListener('DOMContentLoaded', () => {
  setImage();
});

let  imgN = 0;

rightArrow.addEventListener('click', () => {
  imgN += 1;
  //こっちが参考本の手本
  if (imgN >= list.length) {
    imgN = list.length - 1;
  };
  //下が自分が考えたListの範囲を超えないようにするif文
  //if (imgN >= 10) {
    //imgN = 0;
  //};
  setImage();
  console.log(imgN);
});

leftArrow.addEventListener('click', () => {
  imgN -= 1;
  if (imgN < 0) {
    imgN = 0;
  };
  //下が自分なりのマイナスをした時のListを更新するif文
  //if (imgN <= -1) {
    //imgN = 9;
  //}
  setImage();
  console.log(imgN);
});