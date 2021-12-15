# STEP 2-1 Exercise 실습

## 1. sample 디렉토리를 생성한다.
### 활용한 명령어
1. **ls(List Segments)** : 파일 및 디렉토리 목록을 보여주는 명령어
2. **mkdir(Make Directory)** : 새로운 디렉토리를 생성하는 명령어

### 사용 장면
![](https://github.com/kimcno3/vanillaCoding/blob/main/step2/img1.JPG?raw=true)

디렉토리 생성 전 바탕화면에서 `ls`를 실행시켜보면 `sample` 파일이 없지만, `mkdir sample` 명령어 수행 후 다시 `ls`로 확인해보면 `sample` 디렉토리가 생성된 걸 확인할 수 있다.

## 2. 1단계에서 만든 디렉토리 내에 index.js 파일을 생성한다.
: cd sample
: touch index.js
## 3. 2단계에서 만든 index.js 파일에 console.log('Hello, World');라는 내용을 입력한다.
: echo console.log('Hello, World'); >> index.js
## 4. 1단계에서 만든 디렉토리 내에 javascript라는 디렉토리를 생성한다.
: mv index.js javascript
## 5. 2단계에서 만든 파일을 4단계에서 만든 디렉토리 내부로 이동시킨다. (복사 X)
: mv index.js javascript
## 6. 4단계에서 만든 디렉토리를 삭제한다.
: rm -r javascript
## 7. 1단계에서 만든 디렉토리를 삭제한다.
: rm -r sample
