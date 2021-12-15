# STEP 2 Exercise1 : 리눅스 명령어 사용 
> [문제 상세설명](https://book.vanillacoding.co/starter-kit/step-2/introduction-to-programming/exercise)

## 1. sample 디렉토리를 생성한다.
### 활용한 명령어
- `ls(List Segments)` : 파일 및 디렉토리 목록을 보여주는 명령어
- `mkdir(Make Directory)` : 새로운 디렉토리를 생성하는 명령어

### 사용 장면
- 디렉토리 생성 전 바탕화면에서 `ls`를 실행시켜보면 `sample` 파일이 없다.
- `mkdir sample` 명령어 실행
- 다시 `ls`로 확인해보면 `sample` 디렉토리가 생성된 걸 확인할 수 있다.

![](https://github.com/kimcno3/vanillaCoding/blob/main/step2/img1.JPG?raw=true)


<br>

## 2. 1단계에서 만든 디렉토리 내에 index.js 파일을 생성한다.
### 활용한 명령어
- `cd` : 특정 디렉토리로 이동하는 명령어
- `touch` : 유효한 빈 파일을 생성하는 명령어

### 사용 장면
- `cd sample` 명령어로 sample 디렉토리로 이동
- `touch index.js` 명령어로 파일 생성
-  `ls` 명령어로 생성된 파일 확인

![](https://github.com/kimcno3/vanillaCoding/blob/main/step2/img2.JPG?raw=true)


<br>

## 3. 2단계에서 만든 index.js 파일에 console.log('Hello, World');라는 내용을 입력한다.
### 활용한 명령어
- `echo` : 특정 텍스트를 터미널 콘솔에 출력하는 명령어
- `>>` : 명령어 뒤에 나오는 파일에 추가할 때 사용(=append)
- `echo 텍스트 >> 파일명` : 해당 파일에 텍스트 추가

### 사용 장면
- 텍스트를 index.js 파일에 추가
![](https://github.com/kimcno3/vanillaCoding/blob/main/step2/img3.jpg?raw=true)

- 텍스트가 추가된 것을 확인할 수 있다.
![](https://github.com/kimcno3/vanillaCoding/blob/main/step2/img3_1.JPG?raw=true)

<br>

## 4. 1단계에서 만든 디렉토리 내에 javascript라는 디렉토리를 생성한다.
### 활용한 명령어
- `mkdir` : 1단계에서 설명

### 사용 장면
- `mkdir` 명령어로 javascript 디렉토리 생성
- `ls` 명령어로 생성여부 확인

![](https://github.com/kimcno3/vanillaCoding/blob/main/step2/img4.jpg?raw=true)

<br>

## 5. 2단계에서 만든 파일을 4단계에서 만든 디렉토리 내부로 이동시킨다. (복사 X)
### 활용한 명령어
- `mv` : 파일을 다른 디렉토리로 이동시키는 명령어

## 사용 장면
- `mv` 명령어로 index.js 파일을 javascript 디렉토리로 이동
- `cd` 명령어로 javascript 디렉토리 위치로 이동
- `ls` 명령어로 이동된 index.js 파일 확인

![](https://github.com/kimcno3/vanillaCoding/blob/main/step2/img5.jpg?raw=true)

<br>

## 6. 4단계에서 만든 디렉토리를 삭제한다.
### 활용한 명령어
- `cd -` : 이전 디렉토리 위치로 이동하는 명령어
- `rm -r`: 디렉토리를 삭제하는 명령어
    - `rm` 명령어는 파일 삭제만 가능하다.
    - `rmdir` 명령어는 빈 디렉토리만 삭제 가능하다.

### 사용 장면
- `cd -` 명령어로 sample 디렉토리로 위치 이동(이전 경로)
- `rm` 은 파일만 삭제 가능(에러A)
- `rmdir`은 빈 디렉토리만 삭제 가능(에러B)
- `rm -r` 명령어로 javascript 삭제
- `ls` 명령어로 삭제 상태 확인

![](https://github.com/kimcno3/vanillaCoding/blob/main/step2/img6.jpg?raw=true)

<br>

## 7. 1단계에서 만든 디렉토리를 삭제한다.
### 활용한 명령어
- `cd ..` : 상위 디렉토리로 이동하는 명령어
- `rmdir` : 빈 디렉토리를 삭제하는 명령어

### 사용 장면
- `cd ..` 명령어로 바탕화면 디렉토리로 이동
- `rmdir` 명령어로 비어있던 sample 디렉토리 삭제
- `ls` 명령어로 바탕화면 내에 sample 디렉토리 여부 확인

![](https://github.com/kimcno3/vanillaCoding/blob/main/step2/img7.jpg?raw=true)

<br>

## 참고자료
- [리눅스 명령어 Top50](https://dora-guide.com/linux-commands/)
- [rm 명령어 추가설명](https://withcoding.com/95)
- [cd 명령어 추가 설명](https://shaeod.tistory.com/930)