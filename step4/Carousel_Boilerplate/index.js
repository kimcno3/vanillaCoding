var images = ["images/image-1.png", "images/image-2.png", "images/image-3.png", "images/image-4.png", "images/image-5.png"];

var btnLeft = document.querySelector(".button-left");
var btnRight = document.querySelector(".button-right");
var someImageElement = document.querySelector(".image");
var imgIdx = 0;

// 최초 이미지
someImageElement.src = images[imgIdx];
// 우측버튼 클릭
btnRight.addEventListener("click", function(ev){
    imgIdx++;
    someImageElement.src = images[imgIdx];
});
// 좌측버튼 클릭
btnLeft.addEventListener("click", function(ev){
    imgIdx--;
    someImageElement.src = images[imgIdx];
});
