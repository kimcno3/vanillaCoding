var images = ["images/image-1.png", "images/image-2.png", "images/image-3.png", "images/image-4.png", "images/image-5.png"];

var btnLeft = document.querySelector(".button-left");
var btnRight = document.querySelector(".button-right");
var someImageElement = document.querySelector(".image");
var dots = document.querySelector(".footer");

// 최초 이미지
var imgIdx = 0;
someImageElement.src = images[imgIdx];

// 우측버튼 클릭
btnRight.addEventListener("click", function(ev){
    if(imgIdx === 4){
        imgIdx = 0;
    } else {
        imgIdx++;
    };
    someImageElement.src = images[imgIdx];
});
// 좌측버튼 클릭
btnLeft.addEventListener("click", function(ev){
    if(imgIdx === 0){
        imgIdx = 4;
    } else {
        imgIdx--;
    };
    someImageElement.src = images[imgIdx];
});
// 도트 클릭
dots.addEventListener("click", function(ev) {
    if (ev.target.tagName==='DIV'){
        return;
    } else{
        imgIdx = Number(ev.target.title)-1;
        someImageElement.src = images[imgIdx];
    };
});
