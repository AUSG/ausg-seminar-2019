# 2019 AWS 뿌시기 2회차 - AWS와 CRA(Create React App)으로 달리기 게임을 뚝딱!

`[2019 초보자를 위한 AWS 뿌시기 2회차](#)`에 오신 여러분들을 모두 환영합니다!

미리 진행하고 싶으시다면 세션과 무관하게 아래의 실습을 따라 진행해도 무방합니다!

### 본 실습 세션의 학습 흐름은 아래와 같습니다.

- VS Code의 터미널에서 AWS CLI를 이용해 유저 생성 및 AWS IAM 설정하기
- VS Code의 터미널에서 AWS CLI를 이용해 생성한 유저의 엑세스 키 ID와 비밀 액세스 키 설정하기
- VS Code의 터미널에서 Create React App으로 웹 앱의 클라이언트 만들기
- VS Code의 터미널에서 AWS AMPLIFY CLI를 이용해 AWS Cognito 서비스 연결하기
- VS Code의 터미널에서 AWS AMPLIFY CLI를 이용해 AWS S3 서비스에 호스팅하기

- 짜잔! 나만의 달리기 게임(을 가장한 웹 앱) 탄생!
- 이걸로 뭘 할 수 있을까?

# 필수 준비 사항

## 1. PC 또는 Mac

본 세션은 코딩 과정이 포함되어 있습니다. 또한 CLI(Command Line Interface) 조작이 꼭 필요합니다. 모바일 환경(iPhone, iPad, Android)에서는 진행이 불가능하니 꼭 PC/Mac 환경에서 진행하세요.

## 2. AWS 계정

- AWS 계정 만들기 [이동](https://aws.amazon.com/ko/)

본 가이드는 한명이 하나의 AWS 계정을 사용한다고 가정합니다. AWS Route 53, S3, CloudFront, Certification Manager에 접근할 수 있어야 하며, 다른 사람과 계정을 공유하게되면 특정 리소스에 대해 충돌이 발생하므로 권장하지 않습니다.

본 워크샵의 일환으로 시작하는 모든 리소스는 AWS 계정이 12개월 미만인 경우, 제공하는 AWS 프리티어로 충분히 가능합니다.

만약의 경우 프리티어를 넘어 서비스를 이용하게 되면, 과금 될 수 있기 때문에 이 점을 유의하세요.

따라서, 새로운 실습용 계정을 만드시길 권장합니다. 자세한 내용은 [AWS 프리 티어 페이지](https://aws.amazon.com/free/)를 참조하세요.

## 3. 텍스트 에디터

- VS Code [다운로드](https://code.visualstudio.com/)

본 실습 세션에는 실제 코딩이 포함됩니다. VS Code를 꼭 설치해주세요.

## 4. Terminal & AWS CLI

사용하는 노트북의 터미널과 [번들 설치 관리자를 사용하여 AWS CLI 설치](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-bundle.html)를 참고해 AWS CLI 설치해주셔야 원활한 실습 진행이 가능합니다!

## 5. 만약 이전에 진행했 사전 세션에 대해 궁금하시다면 [사전 세션](/WebTrack)을 참고하세요!

# 자 그럼 이제 시작해볼까요?

1. [[이론 1] 사용할 AWS 서비스 살펴보기](./lecture1)
2. [[이론 2] React와 CRA](./lecture2)
3. [[실습 1] 본격적인 실습 시작! 나만의 달리기 게임을 만들어보자!](./handsOn1)
4. [[실습 2] AWS Amplify를 사용해 나만의 공룡 게임을 만들어보자!](./handsOn2)
5. [[도전 과제]집에가서 도전할만한 과제 추천](./challenge)
