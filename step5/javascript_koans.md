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
**Literal 정의**
- 모든 데이터 타입에 들어가는 데이터값 그 자체
- 결국 **Literal**이란 자바스크립트에서 값을 나타내기 위해 부여한 고정값
- **배열 Literal은 0개 이상의 식 목록**으로 **각 식**은 **배열의 요소**를 의미한다.
> [**Literal 추가 설명**](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Grammar_and_types#%EB%A6%AC%ED%84%B0%EB%9F%B4)

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

#### **예제**
```jsx
var fourNumberArray = [1, 2, 3, 4]; // 길이가 4인 배열 생성

expect(fourNumberArray.length).toBe(4); // Array.length === 4
fourNumberArray.push(5, 6); // 요소 2개 추가
expect(fourNumberArray.length).toBe(6); // Array.length === 6

var tenEmptyElementArray = new Array(10); // 길이가 10인 배열 생성
expect(tenEmptyElementArray.length).toBe(10); // Array.length === 10

tenEmptyElementArray.length = 5; // 배열 길이를 5로 할당
expect(tenEmptyElementArray.length).toBe(5); // Array.length === 5 로 감소
```

<br>

### **push(), pop(), unshift(), shift()**
- push(x) : x를 배열의 가장 뒤에 추가
- pop() : 배열의 가장 마지막 요소를 제거
- unshift(x) : x를 배열의 가장 앞에 추가
- shift() : 배열 가장 앞 요소를 제거
> [추가설명](https://github.com/kimcno3/TIL/blob/main/programming_language/javascript.md#push--pop)

#### **예제**
**push() & pop()**
```jsx
var array = [1, 2]; // 배열 생성
array.push(3); // 3을 배열 가장 마지막 요소로 추가

expect(array).toEqual([1, 2, 3]); // 3이 추가된 배열

var poppedValue = array.pop(); // 가장 마지막 요소를 삭제
expect(poppedValue).toBe(3); // poppedValue 변수에 할당된 가장 마지막 요소(3)
expect(array).toEqual([1, 2]); // 삭제된 후 남은 배열
```

**unshift() & shift()**
```jsx
var array = [1, 2]; // 배열 생성
array.unshift(3); // 3을 배열 가장 첫 요소로 추가

expect(array).toEqual([3, 1, 2]); // 3이 추가된 배열

var shiftedValue = array.shift(); // 가장 첫 요소를 삭제
expect(shiftedValue).toEqual(3); // shiftedValue 변수에 할당된 가장 첫 요소(3)
expect(array).toEqual([1, 2]); // 삭제된 후 남은 배열
```

<br>

### **slice()**
원하는 인덱스 위치를 시작으로 배열을 잘라내는 함수 <br>
> [slice() 메소드 상세설명](https://github.com/kimcno3/TIL/blob/main/programming_language/javascript.md#slice)
#### **예제**
```jsx
var array = ["peanut", "butter", "and", "jelly"]; // 배열 생성

// 인덱스 0부터 1 직전까지 -> 0
expect(array.slice(0, 1)).toEqual(["peanut"]);

// 인덱스 0 부터 2 직전까지 -> 0,1
expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);

// 인덱스 2부터 2 직전까지 -> X(빈 배열)
expect(array.slice(2, 2)).toEqual([]);

// 인덱스 2부터 20 직전까지 -> 2,3 (배열의 마지막 인덱스 위치의 요소까지)
expect(array.slice(2, 20)).toEqual(["and", "jelly"]);

// 인덱스 3부터 0직전까지 -> X (빈 배열)
expect(array.slice(3, 0)).toEqual([]);

// 인덱스 3부터 100 직전까지 -> 3 (배열의 마지막 인덱스 위치의 요소까지)
expect(array.slice(3, 100)).toEqual(["jelly"]);

// 인덱스 5부터 1까지 -> X (빈배열)
expect(array.slice(5, 1)).toEqual([]);
```

<br>

### **Reference**
- 변수에 실제 데이터값이 아닌 데이터가 저장된 주소값을 할당하는 자료형 <br>
- Javascript 에서는 객체(Object, Array, Function 등)만이 Reference 타입이다.
> [Reference 상세 설명](https://github.com/kimcno3/TIL/blob/main/programming_language/javascript.md#reference)

#### **예제**
```jsx
var array = [ "zero", "one", "two", "three", "four", "five" ];

function passedByReference(refArray) {
    refArray[1] = "changed in function";
}
```
배열을 생성하고 `array`에는 배열이 저장된 데이터 주소를 할당합니다.

인덱스 1 위치의 요소를 변경하는 함수를 생성합니다.

<br>

```jsx
passedByReference(array);

expect(array[1]).toBe("changed in function");
```
함수를 실행시킴으로써 `array`에 할당된 데이터 주소에 저장된 배열의 요소를 수정합니다.

그 다음, 수정 여부를 확인해보면 바뀐 요소값을 확인할 수 있습니다.

<br>

```jsx
var assignedArray = array; // array === assignedArray -> true

assignedArray[5] = "changed in assignedArray";

expect(array[5]).toBe("changed in assignedArray");
```
이번엔 `array`에 할당된 메모리 주소를 `assignedArray`에도 할당합니다. 즉, 두 변수에는 같은 메모리 주소를 할당했고 같은 배열을 가르키고 있습니다.

그 다음, `assignedArray`가 가르키는 주소에 저장된 배열의 인덱스 5 위치의 요소값 재할당합니다.

그렇다면 같은 메모리 주소를 가지고 있던 `array`에서 인덱스 5 위치의 요소값을 확인하면 재할당된 값이 저장되어 있는 것을 확인할 수 있습니다.

<br>

```jsx
var copyOfArray = array.slice(); // array === copyOfArray -> false

copyOfArray[3] = "changed in copyOfArray";

expect(array[3]).toBe("three");
```
마지막으로 `slice()` 메소드를 활용해 새로운 배열을 `copyOfArray` 변수에 할당해줍니다. 이때 `copyOfArray`에 할당된 메모리 주소는 `array`에 할당된 메모리 주소와 다릅니다.

그 다음 `copyOfArray`에 할당된 메모리 주소에 저장된 배열의 인덱스 3 위치의 요소를 재할당합니다.

`array`가 가르키는 배열의 인덱스 3 위치의 요소를 확인해보면 값이 바뀌지 않았습니다.

<br>

***

<br>


