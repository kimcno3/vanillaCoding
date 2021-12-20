# :pushpin: Events 실습
> [상세설명](https://book.vanillacoding.co/starter-kit/step-4/interacting-with-webpages/registering-events)

## 실습을 위한 HTML 문서
```html
<div>
  <p>아래 버튼을 누르시면 경고창이 날아갑니다!</p>
  <button>경고 1</button>
  <button>경고 2</button>
</div>
```

## 텍스트 변경하는 방법
- `.addEventListener("eventName" , EventHandler(ev) {})` : 첫번째 인자로 받은 이벤트가 발생하면, 두번째 인자로 받은 함수를 실행
    - `"eventName"` : 함수 실행을 위해 식별한 이벤트 종류
    - `EventHadler` : 선택한 이벤트가 식별되면 실행할 함수 
    - `EventHadler`는 기본적으로 `이벤트 객체`를 인자(`ev`)로 받기 떄문에 이를 매개변수로 선언하여 활용할 수 있다.

### 한개의 버튼만 이벤트 설정
```jsx
// 요소 선택
var btn = document.querySelector("button");

// 첫번째 버튼을 클릭하면 경고창 실행
btn.addEventListener("click", function () {
   alert('경고!')
});
```

### 여러개의 버튼에 이벤트 설정
```jsx
// 요소 선택
var div = document.querySelector("div");

// div 태그내에 공간 중 아무곳이나 클릭하면 경고창 실행
div.addEventListener("click", function () {
   alert('경고!');
});
```
> 하지만 위와 같은 경우에는 버튼 두개를 구분지을 수 없다. <br>
> 이를 해결하기 위해서는 이벤트 객체를 활용해야 한다.

### 여러개의 버튼을 구분
```jsx
// 요소 선택
var div = document.querySelector("div");

// 경고창과 동시에 클릭된 위치에 해당하는 요소의 텍스트 내용도 함께 출력
div.addEventListener("click", function (ev) {
   alert(ev.target.textContent);
});
```

### 추가 제한 설정
> P태그를 클릭해도 EventHandler가 실행되기 때문에 조건문으로 p태그 클릭시에 함수가 발생하지 않도록 한다.

```jsx
// 요소 선택
var div = document.querySelector("div");

// p태그 클릭시에는 함수를 종료
div.addEventListener("click", function (ev) {
    if (ev.target.tagName === 'P') { // tagName은 대문자
        return;
    }
    alert(ev.target.textContent);
});
```

## Target vs CurrentTarget
- `currentTareget` 속성은 실제 `addEventListener()`함수를 실행한 대상이 된 요소를 가르킨다.<br>
    - `div.addEventListener("click", function() {})` 에서 `currentTarget`은 항상 `div`에 대한 값을 가진다.

- `target`속성은 실제로 그 이벤트가 일어난 요소를 가르킨다.<br>
    - 클릭된 위치에 따라 다른 값의 `target`을 가진다.

### 예시
```jsx
var div = document.querySelector("div");

// 어느 곳을 클릭해도 div태그의 HTML 내용이 로그
div.addEventListener("click", function (ev) {
    console.log(ev.currentTarget);
});

// 클릭된 위치에 해당하는 요소의 HTML 내용이 로그
div.addEventListener("click", function (ev) {
    console.log(ev.target);
});
```