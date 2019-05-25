# 문자열 이미지를 텍스트로 변환하기 with React, Rekognition

`2019 초보자를 위한 AWS 뿌시기 4회차`에 오신 여러분들을 모두 환영합니다!

# 필수 준비 사항
[사전 세션](https://github.com/AUSG/ausg-seminar-2019/blob/master/WebTrack/Preparation/README.md)에서 진행했던 내용을 참고해주세요.

## 1. PC 또는 Mac

본 세션은 코딩 과정이 포함되어 있습니다. 또한 CLI(Command Line Interface) 조작이 꼭 필요합니다. 모바일 환경(iPhone, iPad, Android)에서는 진행이 불가능하니 꼭 PC/Mac 환경에서 진행하세요.

## 2. AWS 계정

- AWS 계정 만들기 [이동](https://aws.amazon.com/ko/)

본 가이드는 한명이 하나의 AWS 계정을 사용한다고 가정합니다. AWS Route 53, S3, CloudFront, Certification Manager에 접근할 수 있어야 하며, 다른 사람과 계정을 공유하게되면 특정 리소스에 대해 충돌이 발생하므로 권장하지 않습니다.

본 워크샵의 일환으로 시작하는 모든 리소스는 AWS 계정이 12개월 미만인 경우, 제공하는 AWS 프리티어로 충분히 가능합니다.

만약의 경우 프리티어를 넘어 서비스를 이용하게 되면, 과금 될 수 있기 때문에 이 점을 유의하세요.

따라서, 새로운 실습용 계정을 만드시길 권장합니다. 자세한 내용은 [AWS 프리 티어 페이지](https://aws.amazon.com/free/)를 참조하세요.

## 3. code editor

[vscode](https://code.visualstudio.com/)를 추천드려요!

## 4. node.js

LTS(Long Term Support) version을 다운받는 것을 추천합니다. 

# 자 그럼 이제 시작해볼까요?

1. AWS IAM 사용자 만들기
2. React 프로젝트 생성하기
3. Express 프로젝트 생성하기
4. 통신하기
5. 더 도전해볼만한 것
