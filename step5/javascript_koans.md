# :pushpin: Javascript Koans 정리
> [문제 상세설명](https://book.vanillacoding.co/starter-kit/step-5-1/scope-and-hoisting/javascript-koans)

## :pushpin: 목차


<br>

## :pushpin: expect() 함수
- 자바스크립트 테스트 프레임워크 중 하나인 **Jasmine**에서 활용되는 함수 중 하나
- 함수를 통해 얻고자 하는 값이나 조건(**기대조건**)과 실제 구현한 함수에서 반환하는 값(**테스트값**)이 같은지를 비교할 때 사용

### **사용법**
```jsx
expect(테스트값).기대조건
```
만약 테스트값과 기대조건에 성립한다면 해당 에러가 나지 않는다. 하지만 성립하지 않을 경우에는 에러가 발생하면서 구현한 함수에 문제가 있음을 알 수 있다.

<br>

## **matcher 함수**
- 위 예제에서 기대조건을 설정하는 함수를 의미
- **True/False** 는 물론 **구체적인 값**도 기대조건으로 설정할 수 있다.

### **toBeTruthy() & toBeFalsy()**
테스트값의 **True/False** 여부를 판별하는 matcher 함수

#### **사용법**
```jsx
expect(테스트값).toBeTruthy(); // 테스트값이 true 인지 확인
expect(테스트값).toBeFalsy(); // 테스트값이 false 인지 확인
```

#### **예제**
```jsx
var expectedValue = ?; // 기대값
var actualValue = 1 + 1; // 실제 리턴값

// 두 변수가 같다면 에러가 발생하지 않는다.
expect(actualValue === expectedValue).toBeTruthy();
```

```jsx
var expectedValue = ?; // 기대값
var actualValue = 1 + 1; // 실제 리턴값

// 두 변수가 다르다면 에러가 발생하지 않는다.
expect(actualValue === expectedValue).toBeFalsy();
```

<br>

### **toEquel()**
테스트값이 기대조건에서 설정한 기대값과 같은지 비교하는 함수

#### **사용법**
```jsx
expect(테스트값).toEquel(기대값);
```

#### **예제**
```jsx
var expectedValue = ?;
var actualValue = 1 + 1;

// 만약 `actualValue`의 값이 `2`라면 에러가 나지 않는다.
expect(actualValue).toEqual(expectedValue);
```
<br>

