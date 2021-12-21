var images = ["images/image-1.png", "images/image-2.png", "images/image-3.png", "images/image-4.png", "images/image-5.png"];

var tbl = document.querySelector(".table");
var btnLeft = document.querySelector(".button-left");
var btnRight = document.querySelector(".button-right");
var someImageElement = document.querySelector(".image");
var ftr = document.querySelector(".footer");
var dots = document.querySelectorAll(".dot");

// 최초 이미지 설정
var imgIdx = 0;
someImageElement.src = images[imgIdx];
// 현재 이미지 순서에 맞는 dot의 색상만 검정으로 변경
dots[imgIdx].style.backgroundColor = "black";
// 버튼 클릭시
tbl.addEventListener("click", function(ev){
    // 이미지 이동 전 dot 색상 제거
    dots[imgIdx].style.backgroundColor = "unset";
    // 우측버튼 클릭
    if (ev.target.className === "button-right"){
        if(imgIdx === 4){
            imgIdx = 0;
        } else {
            imgIdx++;
        }
    }
    // 좌측버튼 클릭
    else if (ev.target.className === "button-left"){
        if(imgIdx === 0){
            imgIdx = 4;
        } else {
            imgIdx--;
        }
    }
    someImageElement.src = images[imgIdx];
    // 이미지 이동 후 해당 순서에 맞는 dot 색상만 검정으로 변경
    dots[imgIdx].style.backgroundColor = "black";
});
// 도트 클릭시
ftr.addEventListener("click", function(ev) {
    if (ev.target.tagName==='DIV'){
        return;
    } else {
        // 이미지 이동 전 dot 색상 제거
        dots[imgIdx].style.backgroundColor = "unset";
        // 이미지 변경
        imgIdx = Number(ev.target.title)-1;
        someImageElement.src = images[imgIdx];
        // 이미지 변경 후 해당 순서에 맞는 dot 색상만 검정으로 변경
        dots[imgIdx].style.backgroundColor = "black";
    };
});
