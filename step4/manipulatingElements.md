# :pushpin: Manipulating Elements 실습
> [상세설명](https://book.vanillacoding.co/starter-kit/step-4/interacting-with-webpages/manipulating-elements)

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

## 텍스트 변경하는 방법
- `.textContent` : 원하는 요소의 텍스트 내용을 수정할 수 있는 속성

```jsx
// h1태그의 요소를 변수에 선언
var header = document.querySelector('h1');

// 수정 전 텍스트 내용
console.log(header.textContent); // I am a Heading

// 텍스트 내용 수정
header.textContent = 'I am a NEW Heading';

// 수정 후 텍스트 내용
console.log(header.textContent); // I am a NEW Heading
```