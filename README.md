# Intro

> 안녕하십니까! 클래스팅의 프론트엔드 개발자에 산업기능요원 보충역 신규로 지원한 박민철입니다! 해당 프로젝트에서는 이력서에 기재한 내용처럼 파일 및 폴더의 분리에 집중을 하여 재사용성을 높이고자 하였습니다. 프로젝트에 앞서 피그마에 간략한 기획 및 디자인을 작성하면서 이유 있는 코드를 작성하고자 하였습니다.
> https://www.figma.com/file/VSZ6MfK8DJB8h5oTYHs6kb/quiz_web?node-id=0%3A1

## How to Start?

```
# Step 0 : 처음 시작한 경우
yarn install

# Step 1 : 실행
yarn start
```

<br/>

## Tech Stack

```
• 주요 개발 언어 및 프레임워크
- React, TypeScript

• 페이지 스타일링
- Scss

• Etc
- react-router-dom
- axios
- redux(with redux-toolkit)
- react-toastify
```

<br/>

## Git branch & [Git Flow](https://techblog.woowahan.com/2553/)

```
main(default)

feature

hotfix: 배포 후 문제 수정
```

<br/>

## Git Commit Message

| 헤더     | 내용                                                          |
| -------- | ------------------------------------------------------------- |
| feat     | 새로운 기능 추가                                              |
| refactor | 코드 리팩토링                                                 |
| fix      | 버그 수정                                                     |
| style    | 세미 콜론 수정, 줄바꿈, css 변경 등 기능과 무관한 스타일 변경 |
| setting  | 빌드수행, 패키지 설치, 환경 설정 수정 등                      |
| docs     | 주석 추가 및 삭제, readme 작성                                |

## 진척도

- 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다. - [O]
- 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다. - [O]
- 사용자는 답안을 선택하면 다음 문항을 볼 수 있다. - [O]
  - 답안 선택 후 다음 문항 버튼을 볼 수 있다. - [O]
  - 답안이 맞았는지 틀렸는지 바로 알 수 있다. - [O]
  - 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다. - [O]
- 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다. - [O]
  - 퀴즈를 마칠 때까지 소요된 시간 - [O]
  - 정답 개수 - [O]
  - 오답 수 - [O]

## 시현 영상

https://user-images.githubusercontent.com/69390311/190193422-00981376-ea30-4b98-880f-efa95d7ef382.mp4

## 사용한 프레임워크 및 라이브러리 설명

```
{
  "name": "quiz",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.10.4",
    "@emotion/styled": "^11.10.4",
    "@mui/icons-material": "^5.10.3",
    "@mui/material": "^5.10.5",
    "@reduxjs/toolkit": "^1.8.5", // 전역 상태 관리를 위해 사용
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.58",
    "@types/react": "^18.0.18",
    "@types/react-dom": "^18.0.6",
    "axios": "^0.27.2", // http 통신
    "classnames": "^2.3.1", // 컴포넌트 타입 지정을 위해 사용
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.2", // 전역 상태 관리를 위해 사용
    "react-router-dom": "^6.3.0", // SPA 형식으로 구현하기 위한 라이브러리
    "react-scripts": "5.0.1",
    "react-toastify": "^9.0.8", // 토스트메시지 라이브러리
    "typescript": "^4.8.2",
    "web-vitals": "^2.1.4"
  }
}
```

## 폴더 구조 설명

- api: 서버와 통신하는 api들을 저장한 폴더입니다.
- assets: svg 파일을 저장한 폴더입니다.
- components: 각각의 폴더에서 사용되는 컴포넌트들을 저장한 폴더입니다.
- pages: 각 페이지들의 뷰와 로직을 담은 폴더입니다.
- redux: store를 저장한 폴더입니다.
- styles: 스타일의 전역 설치를 위한 파일을 담은 폴더입니다.
- url: page route들을 저장한 폴더입니다.

## 과제 진행 시 주안점 작성

- 코드의 분리를 의식하였고 기획 안에서의 코드를 작성하기 위하여 피그마를 도입하는 시도를 했습니다.
- 협업에 문서화가 중요하다 생각을 하기 때문에 커밋 메시지에 바로 확인이 가능한 사진 또는 동영상 파일을 첨부하여 프로젝트의 진행도를 쉽게 확인할 수 있도록 노력하였습니다.
- 새로운 기술을 도입하는 모습도 보여드리고 싶었기에 단기간에 공식문서와 다양한 매체들을 비교하며 redux-toolkit을 학습하고 적용하였습니다.

## 한계점 및 개선 사항

- Error 핸들링과 UI 부분을 조금 더 개선하면 좋을 것 같습니다.
- page 폴더에서 뷰와 로직을 분리하는 과정이 미흡했던 것 같습니다.
- TDD란 개념과 함께 테스트 코드를 처음 작성을 해보았는데 미흡한 수준이었던 것 같습니다. 리액트의 테스팅에 대해서 부족함을 느꼈고 이를 보완해야겠다고 생각했습니다.
