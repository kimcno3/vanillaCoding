# :pushpin: Carousel
> [문제 상세 설명](https://book.vanillacoding.co/starter-kit/step-4/interacting-with-webpages/carousel)

## 요구사항
### [요구사항] Day 1
- 페이지 로딩 시, 첫 번째 이미지 화면에 보이기
- 좌측, 우측 화살표 두개 보이기
- 화면 아래 쪽에 Dot 다섯개 보이기

### [요구사항] Day 2
- 좌측 화살표 클릭시 이전 이미지 보여주기
- 우측 화살표 클릭시 다음 이미지 보여주기

### [요구사항] Day 3
- 5번째 이미지에서 우측 화살표를 누를 경우, 1번째 이미지 보여주기
- 1번째 이미지에서 좌측 화살표를 누를 경우, 5번째 이미지 보여주기
- 이미지 하단의 Dot를 누를 경우, 해당 순번의 이미지 보여주기

<br>

## 예상 구현 방법
### 1. 기본 페이지 구현
- div1 : 이미지화면, 좌&우측 화살표
- div2 : dot 5개

### 2. 좌&우측 이벤트 핸들러 구현
- 이미지 링크를 배열에 저장
- 배열 인덱스에 대한 변수를 선언 (`imgIdx`)
- 우측버튼 클릭시 +1 , 좌측버튼 클릭시 -1

### 3. 추가 기능 구현
- `imgIdx` 가 4인데 우측 버튼 클릭시 0으로 재할당
- `imgIdx` 가 0인데 좌측 버튼 클릭시 4로 재할당
- 각 dot에게 다른 속성값을 설정하고 `target` 속성을 활용하여 구분
- 구분된 dot별로 다른 `imgIdx`를 지정한다.

<br>

## 구현 코드
### HTML
```html
<section>
    <div class="image-box">
        <img src="images/vanilla_coding_logo.png"/>
    </div>
    <h1>Carousel</h1>
    <!-- Carousel Start -->
    <div class="main">
        <div class="table">
            <button class="button-left">◀</button>
            <div class="img-table"><img class="image" alt=""></div>
            <button class="button-right">▶</button>
        </div>
        <div class="footer">
            <button class="dot" title='1'></button>
            <button class="dot" title='2'></button>
            <button class="dot" title='3'></button>
            <button class="dot" title='4'></button>
            <button class="dot" title='5'></button>
        </div>
    </div>
    <!-- Carousel End -->
</section>
```

### CSS
```css
body {
  background-image: url("./images/bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Varela Round", sans-serif;
}

h1 {
  font-family: "Pacifico", cursive;
  text-align: center;
  font-size: 72px;
}
.main {
  display: flex;
  flex-direction: column;
}

.table {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  display: flex;
  justify-content: center;
}

.button-left, .button-right {
  border: 0px;
  font-size: 30px;
  color: gray;
  background-color: unset;
}

.dot {
  background-color: gray;
  padding: 4px;
  border-color: gray;
  border-radius: 100%;
  margin: 10px;
}
```

### 자바스크립트
```jsx
// 이미지파일을 담은 배열 선언
var images = ["images/image-1.png", "images/image-2.png", "images/image-3.png", "images/image-4.png", "images/image-5.png"];
// 필요한 요소 선택 후 변수에 선언
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

```
**추가 기능 구현 및 에러 제어**
1. `footer`에서 `button`을 제외한 다른 부분을 클릭하면 `imgIdx`가 지정되지 않아 이미지가 사라지는 에러를 발견
    - 조건문으로 클릭시 해당 `target` 속성의 태그명이 `div`라면 아무런 동작하지말고 `return`으로 함수를 종료시켰습니다.

<br>

2. 이미지 위치에 따른 dot의 색상을 구분
    - 만약 이미지가 첫번째 이미지라면 첫번째 `dot`의 색상만 검정으로 추가하고 나머지는 색상을 없게끔 설정하여, 현재 이미지의 위치를 표현하고 싶었습니다.
    - 그래서 이벤트 핸들러 실행 전, 기존 인덱스(`imgIdx`)에 해당하는 `dot`의 색상은 제거 <br>
    : `dots[imgIdx].style.backgroundColor = "unset";`

    - 인덱스 수정 후, 변경된 인덱스에 해당하는 dot는 검정으로 변경하는 코드를 추가했습니다. <br>
    : `dots[imgIdx].style.backgroundColor = "black";`
