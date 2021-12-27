# :pushpin: Primitive And Reference Quiz 정리
> [문제 상세설명](https://book.vanillacoding.co/starter-kit/step-5-1/scope-and-hoisting/quiz-1)

## Quiz 1
```jsx
const person = {
  age: 30
};

const something = person.age;

person.age = 50;

console.log(something); // ?
```

### **정답은 `30`이(가) 출력됩니다.**
- `something`이라는 변수에는 `person`객체의 `age라는` 프로퍼티가 가지고 있는 `30`이라는 값(**Primitive**)이 할당된 것입니다.
- 그러므로 `person` 객체에서 `age` 값을 바꾼다고 해도 `something`값은 변하지 않습니다.

<br>

## Quiz 2
```jsx
let one = { name: "one" };
const two = { name: "two" };

const something = one;

one = { name: "ONE" };

console.log(something); // ?
```

### **정답은 `{ name: "one" };`가 출력됩니다.**
**`something`객체의 프로퍼티 값이 변하지 않은 이유를 유추해볼 때,**

`one` 변수에 새로운 객체가 재할당된 것이기에 `one` 변수가 가지게 되는 메모리 주소는 `something` 변수가 가지고 있는 메모리주소와 달라진 것이 아닐까 싶습니다.

### **코드 흐름**
- `one` 변수에 객체 메모리주소 할당
- `two` 변수에 객체 메모리주소 할당
- `something` 변수에 `one` 변수와 **같은 메모리주소** 할당
- `one` 변수에 **새로운 메모리주소** 할당
- `something` 변수가 가르키는 메모리주소에 저장된 객체 출력

<br>

### **새로운 객체 할당이 아니라 객체 프로퍼티 값만 바꿨을 때**
```jsx
let one = { name: "one" };
const two = { name: "two" };

let something = one;

one.name = "ONE";

console.log(something); // { name: "ONE" }; 출력
```
<br>

### **주의사항**
**같은 이름의 변수에 새로운 객체를 할당하면 메모리 주소값이 바뀐다.**

<br>

## Quiz 3
```jsx
let one = 1;
const two = 2;

const something = one;

one = 101;

console.log(something); // ?
```
### **정답은 `1`이(가) 출력됩니다.**
`something` 변수에는 `one` 변수에 할당된 `1`이 값으로 할당된 것이고, 숫자는 `Primitive`에 속하기에 변하지 않습니다.

<br>

## Quiz 4
```jsx
let ken = {
  name: "ken",
  age: 30
}; // 메모리주소1

const wan = {
  name: "wan",
  age: 35
}; // 메모리주소2

const people = [ ken, wan ]; // 메모리주소1, 메모리주소2

ken = {
  name: "KEN",
  age: 38
}; // 메모리주소3

console.log(people);  // 메모리주소1, 메모리주소2
console.log(ken === people[0]);  // 메모리주소1 !== 메모리주소3
```
### **정답은 `False`가 출력됩니다.**
Quiz2 와 같은 원리로 `ken`변수에 할당된 메모리 변수가 바뀌면서
1) `people`변수에 할당된 `ken`변수가 가르키는 메모리주소와
2) 새로 할당된 `ken`변수의 메모리주소가 다릅니다.

<br>

### **주의사항**
**같은 이름의 변수에 새로운 객체를 할당하면 메모리 주소값이 바뀐다.**

<br>

## Quiz 5
```jsx
var secret = {
  data: "I am secret"
};

function destroy (stuff) {
  stuff = null;
}

destroy(secret);

console.log(secret); // ?
```
### **정답은 `{ data: "I am secret" };`가 출력됩니다.**
`destroy`함수가 끝나면서 인자로 받아와 `null` 값을 지정한 변수를 반환해주거나 함수실행 결과를 담는 변수가 없어서, 함수가 실행되어도 `secret`변수에 할당된 값(객체가 저장된 메모리주소)은 변하지 않습니다. (함수 Scope 내에서만 유효)

<br>

### **함수 내에서 stuff값을 출력해보면 null 값이 출력됩니다.**
```jsx
var secret = {
  data: "I am secret"
};

function destroy (stuff) {
  stuff = null;
  console.log(stuff); // null
}

destroy(secret);
```
<br>

### **주의사항**
**매개변수 또한 함수 Scope 내에서만 유효**하기 때문에 매개변수로 받아온 인자값은 변경한 후에는 반환(return)을 해줘야 함수 밖의 Scope 에서도 변경된 값을 활용할 수 있다.