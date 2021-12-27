# :pushpin: Javascript Koans 정리
> [문제 상세설명](https://book.vanillacoding.co/starter-kit/step-5-1/scope-and-hoisting/javascript-koans)

## :pushpin: 목차
- [:pushpin: expect() 함수](#pushpin-expect-함수)
- [:pushpin: Array(배열)](#pushpin-Array배열)

<br>

## :pushpin: expect() 함수
- 자바스크립트 테스트 프레임워크 중 하나인 **Jasmine**에서 활용되는 함수 중 하나
- 함수를 통해 얻고자 하는 값이나 조건(**기대조건**)과 실제 구현한 함수에서 반환하는 값(**테스트값**)이 같은지를 비교할 때 사용
- 만약 테스트값과 기대조건에 성립한다면 해당 에러가 나지 않는다. 하지만 성립하지 않을 경우에는 에러가 발생하면서 구현한 함수에 문제가 있음을 알 수 있다.

#### **사용법**
```jsx
expect(테스트값).기대조건
```

## **matcher 함수**
- 위 예제에서 **기대조건**을 설정하는 함수를 의미
- **True/False** 는 물론 **구체적인 값**도 기대조건으로 설정할 수 있다.

### **1. toBeTruthy() & toBeFalsy()**
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

### **2. toEquel()**
테스트값이 **기대조건**에서 설정한 **구체적인 값**(기대값)과 같은지 비교하는 함수

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

// 다음과 같이도 활용할 수 있다.
// ? 가 2라면 에러 X
expect(1 + 1).toEqual(?);
```

<br>

### **3. toBe()**
`toEquel()` 함수와 같이 테스트값과 기대값을 비교하는 함수

#### **사용법**
```jsx
expect(테스트값).toBe(기대값);
```

#### **예제**
```jsx
var expectedValue = ?;
var actualValue = (1 + 1).toString();

// 자료형을 정확히 확인하기 위해서도 사용할 수 있다.
// ? 가 문자열 "2"라면 에러 X
expect(actualValue).toBe(expectedValue);
```

<br>

***

<br>

## :pushpin: Array(배열)
배열의 여러가지 특징들은 예제를 통해 연습

<br>

### **배열 생성**
#### **예제1**
```jsx
var emptyArray = []; // 빈 배열 생성
expect(typeof(emptyArray)).toBe("object"); // 배열의 자료형은 "객체"
expect(emptyArray.length).toBe(0); // 빈 배열의 길이는 0
```
#### **예제2**
```jsx
// 여러 자료형을 담은 배열 생성
var multiTypeArray = [
    0, // Number
    1, // Number
    "two", // String
    function () { return 3; }, // Function
    {value1: 4, value2: 5}, // Object
    [6, 7] // Array
];

expect(multiTypeArray[0]).toBe(0); // 1번째 요소
expect(multiTypeArray[2]).toBe("two"); // 3번째 요소
expect(multiTypeArray[3]()).toBe(3); // 4번째 요소
expect(multiTypeArray[4].value1).toBe(4); // 5번째 요소의 value1 속성 값
expect(multiTypeArray[4]["value2"]).toBe(5); // 5번째 요소의 value2 속성 값
expect(multiTypeArray[5][0]).toBe(6); // 6번째 요소의 1번째 요소
```

<br>

### **배열 Literals**
**Literal 정의** : 모든 데이터 타입에 들어가는 데이터값 그 자체 <br>
[**Literal 추가 설명**](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Grammar_and_types#%EB%A6%AC%ED%84%B0%EB%9F%B4)
> 결국 **Literal**이란 자바스크립트에서 값을 나타내기 위해 부여한 고정값
>
> **배열 Literal은 0개 이상의 식 목록**으로 **각 식**은 **배열의 요소**를 의미한다.

#### **예제**
```jsx
var array = []; // 빈 배열 생성
expect(array).toEqual([]);

array[0] = 1; // 인덱스 0 위치에 값 할당
expect(array).toEqual([1]);

array[1] = 2; // 인덱스 1 위치에 값 할당
expect(array).toEqual([1, 2]);

array.push(3); // 배열 마지막 위치에 새로운 요소 추가
expect(array).toEqual([1, 2, 3]);
```

<br>

### **배열 길이(length)**

<br>

### **push, pop, shift, unshift**

<br>

### **slice**

<br>

### **Reference**

<br>

***

<br>


