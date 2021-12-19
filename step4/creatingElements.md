# :pushpin: Manipulating Elements 실습
> [상세설명](https://book.vanillacoding.co/starter-kit/step-4/interacting-with-webpages/creating-elements)

## 실습을 위한 HTML 문서
```html
<div class="container">
    <h1>I am a Heading</h1>
    <p>I am a Paragraph</p>
    <ul class="items">
      <li class="item">
        <p>I am a Paragraph 1</p>
      </li>
      <li class="item">
        <p>I am a Paragraph 2</p>
      </li>
      <li class="item">
        <p>I am a Paragraph 3</p>
      </li>
    </ul>
    <button id="special-button">I am a Button</button>
</div>
```

## 요소 생성, 추가하는 방법
- `document.creatElement()` : 새로운 요소를 생성하는 함수
- `document.TAG_NAME.appendChild()` : 자녀요소로 새로운 요소를 추가하는 함수

```jsx
// 새로운 h1 요소 생성
var heading = document.createElement('h1');

// 생성한 요소의 텍스트내용, CSS 설정
heading.textContent = '제목입니당';
heading.style.fontSize = '50px';

// body 태그안에 자녀요소로 생성한 요소를 추가
document.body.appendChild(heading);
```

## 퀴즈
아래 두 가지 예제 코드의 차이점을 분별해보세요.

### Example 1
```jsx
const something = document.createElement("p");

for (let i = 0; i < 5; i++) {
  something.textContent = i;
  document.body.appendChild(something);
}
```
### Example 2

```jsx
for (let i = 0; i < 5; i++) {
  const something = document.createElement("p");
  something.textContent = i;
  document.body.appendChild(something);
}
```

### 차이점
- **1번 예제**
1. `something` 변수를 한번만 선언
2. 반복문을 통해 `something` 변수의 텍스트 내용만 수정 및 추가

    즉, **하나의 요소만 수정**된다.

- **2번 예제**
1. 반복문 내에서 `something` 변수가 새롭게 재선언
2. 다른 텍스트 내용을 가지고 있는 요소가 추가

    즉, **텍스트 내용이 다른 여러개의 요소가 생성**된다.

### 실행 결과
![](https://github.com/kimcno3/vanillaCoding/blob/main/step4/img.JPG?raw=true)