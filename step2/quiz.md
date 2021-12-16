# STEP 2 Quiz : 함수, 배열
> [문제 상세설명](https://book.vanillacoding.co/starter-kit/step-2/programming-with-javascript-part-2/quiz)

## 문제설명
```jsx
function foo (a) {
  return a + 3;
}

const arr = [ foo(1), foo(2), foo(3) ];

console.log(arr); // ?
```
위 출력문은 어떤 내용물이 담긴 배열을 출력할까요?

## 정답
```jsx
console.log(arr); // (3) [4, 5, 6]
```

## 정답 설명
1. 함수 `foo`는 매개변수로 넘어온 인자값에 3을 더한 값을 `return`하는 기능을 수행합니다.
2. `arr` 배열에 각 요소는 `foo`의 실행 결과로 할당되고 있으며 각 요소의 `foo`함수 인자값에는 1,2,3이 선언되어 있습니다.
3. 결국 `arr`은 `[1+3, 2+3, 3+3]` 의 형태로 선언되며 최종 배열모습인 `[4, 5, 6]`이 로그됩니다.