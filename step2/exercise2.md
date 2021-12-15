# STEP 2 Exercise2 : Javascript 활용1
> [문제 상세설명](https://book.vanillacoding.co/starter-kit/step-2/programming-with-javascript-part-1/exercise)

## 1. FizzBuzz
### 문제 설명
자바스크립트의 반복문과 조건문 등 여러분이 배운 지식을 이용하여 아래와 같은 조건을 만족하는 코드를 작성해보세요.
- 1부터 100까지 console.log를 실행합니다.
- 3의 배수는 "fizz"라는 문자열을 로그합니다.
- 5의 배수는 "buzz"라는 문자열을 로그합니다.
- 3과 5의 공배수는 "fizzbuzz"라는 문자열을 로그합니다.
- 나머지 숫자들은 해당 숫자 자체를 로그합니다.

### 작성 코드
```jsx
for(let i=1; i<=100; i++){
    if(i%3===0 && i%5===0) console.log('fizzbuzz');
    else if (i%3===0) console.log('fizz');
    else if (i%5===0) console.log('bizz');
    else console.log(i);
}
```
### 코드 설명
1. 1부터 100까지의 수(i)를 오름차순으로 loop
2. 만약 숫자가 3과 5의 공배수라면 fizzbuzz를 로그합니다.
3. 만약 숫자가 3의 배수라면, fizz를 로그합니다.
4. 만약 숫자가 5의 배수라면, bizz를 로그합니다.
5. 위 조건식에 해당없다면 i를 로그합니다.

### 코드 추가 설명
- 3과 5의 공배수는 15를 사용해서 구분할 수 있지만 `공배수` 라는 단어에 집중해서 `&&`연산자를 활용한 코드로 작성했습니다.
- `else if` 에 경우 앞에 나오는 조건문이 `false`가 되어야만 실행되기 때문에 조건문 가장 앞에 공배수를 구분하는 조건문으로 작성했습니다.
    - 3과 5 중 하나라도 배수가 성립되지 않으면 `false`된다는 점을 활용

<br>

## 2. Biggest Number
### 문제 설명
아래와 같이 세 개의 변수가 숫자를 담고 있습니다. 가장 큰 수가 무엇인지 연산을 하여 console.log 하도록 코드를 작성해보세요.
- Math.max를  사용하지 마세요.
- a, b, c에 담긴 값이 바뀌더라도 항상 정확한 결과가 나올 수 있도록 코드를 작성해보세요.

### 작성 코드
```jsx
var a = 10;
var b = 20;
var c = 30;

var max = a;
if (b>max) max = b;
if (c>max) max = c;

console.log(max);
```

### 코드 설명
1. 최대값을 할당할 `max`라는 변수를 선언하고, 최초 `max`의 값은 `a`의 값으로 선언합니다.
2. `max`와 `b`의 값을 비교하고 `b`가 `max`보다 크다면 `max`의 값을 `b`의 값을 재할당합니다.(최대값 변경)
3. 같은 방식으로 `max`와 `c`도 비교합니다.
4. 만약 조건문이 성립하지 않는다면, `max`값은 이전까지 가장 큰 수로 유지됩니다.
5. `max`를 로그하면 세 변수 중 가장 큰 수가 출력됩니다.

<br>

## 3. Word Position

### 1. 문제 설명
여러분에게 아래와 같이 두 개의 문자열 값이 주어집니다. 하나의 문자열은 단어 정보를 담고 있고, 다른 하나의 문자열은 문장을 담고 있습니다.

word를 sentence 에서 찾고, 해당 word 의 시작 인덱스와 끝 인덱스를 출력하는 코드를 작성해 보세요.

예를 들어, "Where did Jane get the dolphin from, John?" 이라는 문장에서 "dolphin" 이라는 단어는 23번째 인덱스에서 시작하여 29번째 인덱스에서 끝납니다. 따라서 23과 29를 출력합니다.

### 2. 작성 코드

```jsx
var word = "dolphin";
var sentence = "Where did Jane get the dolphin from, John?";

var indexOfD = sentence.indexOf(word);
var indexOfN = indexOfD + (word.length - 1);

console.log(indexOfD, indexOfN); // 23, 29
```
### 3. 코드 설명
1. `indexOf()`를 활용하여 `sentence`에서 `word`가 포함된 단어가 처음 나타나는 위치 인덱스를 구한다.
2. `indexOfD` 값에서 `word의 글자수-1`(시작점 인덱스는 제외되므로 -1)을 더해 마지막 인덱스를 계산한다.