# :pushpin: Selecting Elements 실습
> [상세설명](https://book.vanillacoding.co/starter-kit/step-4/interacting-with-webpages/selecting-elements)

## 실습을 위한 HTML 문서
```html
<div class="container">
    <h1>I am a Heading</h1>
    <p>I am a Paragraph</p>
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
    <button id="special-button">I am a Button</button>
</div>
```
    <script>
        // CSS 선택자 이름으로 선택하는 방법

        // 태그, 클래스, id 상관없이 인자에 선언 가능한 장점이 있어 가장 많이 사용합니다.
        // 첫번째 요소만 가져오냐(querySelector), 공통되는 요소 전부를가져오냐의 차이(queryselectorAll)
        // querySelectorAll를 사용해 가져온 요소들은 NodeList라는 형식으로 저장된다.(배열과 비슷한 형태)
        var item = document.querySelector('.item');
        var items = document.querySelectorAll('.item');

        // querySelector로 지정한 요소의 텍스트
        console.log(item.textContent);

        // querySelectorAll로 지정한 각각의 요소의 텍스트
        for (var i=0; i<items.length; i++){
            console.log(items[i].textContent);
        }

        // 아이디, 클래스, 태그 이름으로 선택하는 방법

        // id명은 html문서 당 하나만 설정할 수 있기 때문에 무조건 하나의 요소만 가져올 수 있다.(element)
        var fromId = document.getElementById('special-button');

        // 복수의 모든 해당 값을 전부 가져온다.(elements)
        var fromClass = document.getElementsByClassName('item');
        var fromTag = document.getElementsByTagName('li');

        console.log(fromId.textContent);

        for (var i=0; i<fromClass.length; i++){
            console.log(fromClass[i].textContent);
        }

        for (var i=0; i<fromTag.length; i++){
            console.log(fromTag[i].textContent);
        }

        // 자식, 부모, 형제 요소 선택하는 방법

        // 부모요소
        var parent = item.parentElement;

        // 형제 요소
        // 앞, 뒤 요소
        var sibling1 = items[1].nextElementSibling
        var sibling2 = items[1].previousElementSibling

        // 자식 요소(배열)
        var child = item.children

        console.log(parent);
        console.log(sibling1.textContent);
        console.log(sibling2.textContent);
        console.log(child);

    </script>