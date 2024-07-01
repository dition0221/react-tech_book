# React-tech_book

### `리액트를 다루는 기술` 책을 보며 React의 기초를 다집니다.

---

- 24-06-25 : #1.1 ~ #3.2 / JSX + Component
  - 아키텍처 (Architecture)
    - 웹 앱의 구조와 구성 요소를 설계하고 조직하는 방식
      - 다양한 요소들이 어떻게 상호 작용하고 데이터가 어떻게 흐르는지를 정의하여, 시스템의 효율성과 확장성을 높이는 것을 목표로 함
    - Model : App에서 사용하는 데이터를 관리하는 영역
    - View : 사용자에게 보이는 부분 (화면)
    - Controller : 프로그램이 사용자에게서 어떤 작업을 받으면 모델 데이터를 조회하거나 수정하고, 변경된 사항을 view에 반영함
  - React
    - 오직 View만 신경쓰는 라이브러리
      - 데이터가 변할 때마다 어떤 변화를 줄지 고민하는 것이 아니라, 그냥 기존 view를 날려버리고 처음부터 새로 rendering하는 방식
  - 컴포넌트 (Component)
    - React 프로젝트에서 특정 부분이 어떻게 생길지 정하는 선언체
      - 재사용이 가능한 API로 수많은 기능들을 내장하고 있으며, 컴포넌트 하나에 해당 컴포넌트의 생김새와 작동 방식을 정의함
  - 렌더링 (Rendering)
    - 사용자 화면에 view를 보여주는 것
  - Virtual DOM
    - DOM (Document Object Model) : HTML 문서의 구조화된 표현
    - React는 Virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써, DOM 처리 횟수를 최소화하고 효율적으로 진행함
    - 절차
      1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 Re-Rendering
      2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교
      3. 바뀐 부분만 실제 DOM에 적용
    - Virtual DOM을 사용한다고 해서 무조건 빠른 것은 아님
  - Vite
    - Front-End 개발 시 사용하기 쉽고, 가벼운 개발 환경을 제공하는 도구
      - 다양한 Front-End App을 개발하는 데 도움
    - 사용법
      1. `npm create vite@latest`로 vite 설치하기
      2. `TypeScript + SWC` 선택하기
      3. `npm i`로 패키지 설치하기
      4. `vite.config.ts`에서 플러그인이 없다고 error 시 `npm add -D 플러그인`을 입력해 추가하기
  - JSX
    - JavaScript의 확장 문법이며, XML과 매우 비슷하게 생김
      - JSX는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 Babel을 사용하여 일반 JavaScript 형태의 코드로 변환됨
  - React.StrictMode
    - React 프로젝트에서 앞으로 사라질 레거시 기능을 사용할 때 경고를 주고, 앞으로 미래의 React 버전에 도입될 기능들이 정상적으로 호환될 수 있도록 유도하는 개발환경에서만 활성화되는 디버깅용 컴포넌트
  - JSX 문법
    1. 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 함
       - Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문
    2. JavaScript 표현식을 작성하려면 `{}`로 감싸서 사용
    3. if문 대신 조건부 연산자 (삼항 연산자)
    4. AND 연산자(`&&`)를 사용한 조건부 렌더링
    5. undefined를 렌더링하지 않기 - 오류 발생
       - OR(`||`) 연산자를 사용하면 해당 값이 undefined일 때 사용할 값을 지정할 수 있으므로 간단하게 error를 방지할 수 있음
    6. 인라인 스타일링
       - DOM 요소에 스타일을 적용할 시 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어야 함
       - 스타일 이름 중 `-`문자를 없애고, 카멜 표기법으로 작성해야 함
    7. `class` 대신 `className`
    8. 주석 `{/* 내용 */}`
  - 함수 컴포넌트의 장점
    1. class형 컴포넌트보다 선언하기가 훨씬 편함
    2. 메모리 자원을 덜 사용함
    3. 결과물의 파일 크기가 더 작음
- 24-07-01 : #3.3 ~ #4.4 / Component + Event Handling
