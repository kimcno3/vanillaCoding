# :pushpin: Selecting Elements 실습
> [상세설명](https://book.vanillacoding.co/starter-kit/step-4/interacting-with-webpages/selecting-elements)

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

## 1. Id 이름으로 선택하는 방법
- `document.getElementById()` : id이름으로 요소를 선택하는 함수
- id는 html 문서 내 하나만 선언할 수 있서 무조건 하나의 요소만 가져온다.
- 그래서 함수명도 단수(Element)
```jsx
// id명이 `special-button`인 요소
var fromId = document.getElementById('special-button');
console.log(fromId);
/* 로그 내용

<button id="special-button">I am a Button</button>

*/

```

## 2. Class 이름으로 선택하는 방법
- `document.getElementsByClassName()` : 해당 Class명을 포함한 요소들을 모두 선택하여 `HTMLCollection` 으로 선언하는 함수
- 여러개의 요소를 가져올 수 있다.
- 그래서 함수명도 복수(Elements)
> `HTMLCollection`에 대한 [상세 설명](https://developer.mozilla.org/ko/docs/Web/API/HTMLCollection)

```jsx
// Class명이 `item`인 요소들
var fromClass = document.getElementsByClassName('item');
console.log(fromClass);
/* 로그 내용

HTMLCollection(3) [li.item, li.item, li.item]
0: li.item
1: li.item
2: li.item
length: 3
[[Prototype]]: HTMLCollection

*/

```

## 3. Tag 이름으로 선택하는 방법
- `document.getElementsByTagName()` : 해당 tag명을 가진 요소들을 모두 선택하여 HTMLCollection으로 선언하는 함수
- 여러개의 요소를 가져올 수 있다.
- 그래서 함수명도 복수(Elements)

```jsx
// Tag명이 'li'인 요소들
var fromTag = document.getElementsByTagName('li');
console.log(fromTag);
/* 로그 내용

HTMLCollection(3) [li.item, li.item, li.item]
0: li.item
1: li.item
2: li.item
length: 3
[[Prototype]]: HTMLCollection

*/
```

## 4. CSS 선택자 이름으로 요소 선택하는 방법
- `document.querySelector()` : 선택한 요소중 가장 첫번째 요소를 선택하는 함수
- `document.querySelectorAll()` : 선택한 모든 요소를 `NodeList`로 선언하는 함수
> `Nodelist`에 대한 [상세설명](https://developer.mozilla.org/ko/docs/Web/API/NodeList)

```jsx
//  클래스명이 `item`인 요소들 중 가장 처음에 나오는 요소
var item = document.querySelector('.item');
console.log(item);
/* 로그 내용

<li class="item">
    <p>I am a Paragraph 1</p>
</li>

*/

// 클래스명이 `item`인 모든 요소를 NodeList로 선언
var items = document.querySelectorAll('.item');
console.log(items);
/* 로그 내용

NodeList(3)
0: li.item
1: li.item
2: li.item
length: 3
[[Prototype]]: NodeList

*/
```
## 5. 부모, 형제, 자식 요소 선택하는 방법
- `.parantElement` : 부모 노드를 반환
- `.nextElementSibling` : 다음 순서의 형제 노드를 반환
- `.previousElementSibling` : 이전 순서의 형제 노드를 반환
- `.children` : 자녀 노드를 반환

```jsx
// class명이 item인 요소 기준으로 부모 노드를 선택
var parent = document.querySelector('.item').parentElement;
console.log(parent);
/* 로그 내용

<ul>
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

*/
```

```jsx
// 클래스명이 item인 모든 요소를 선언
var items = document.querySelectorAll('.item');

// 클래스명이 item인 요소들 중 두번째 요소(Paragraph2)의 뒤 요소
var sibling1 = items[1].nextElementSibling
console.log(sibling1.textContent);
/* 로그 내용

<li class="item">
  <p>I am a Paragraph 3</p>
</li>

*/

// 클래스명이 item인 요소들 중 두번째 요소(Paragraph2)의 앞 요소
var sibling2 = items[1].previousElementSibling

console.log(sibling2.textContent);
/* 로그 내용

<li class="item">
  <p>I am a Paragraph 1</p>
</li>

*/
```

```jsx
// class명이 item인 요소 기준으로 자식 노드를 선택
var child = document.querySelector('.item').children
console.log(child);
/* 로그 내용

HTMLCollection [p]
0: p
length: 1
[[Prototype]]: HTMLCollection

*/
```