# [실습 2] AWS Amplify를 사용해 나만의 공룡 게임을 만들어보자!

## 사전 준비

이 실습을 진행하기 위해서는 앞선 실습을 완수한 경험과 프로젝트의 디렉터리 일부를 교체해야 합니다. 다소 번거로울 수 있는 작업이지만, 제가 만들어놓은 틀을 사용하고 싶으시다면 '/WebTrack2/handsOnContents'의 source 디렉터리에 들어있는 파일들을 실습 프로젝트에 모두 복사 붙여넣기 해주세요!

복사 붙여넣기가 끝나셨다면 실습 프로젝트에서 다음의 과정을 진행해주세요.

```
복사, 붙여넣기 완료(기존의 src와 pakcage.json을 삭제하고 진행할 것을 권장드립니다!)  
$ rm -rf node_modules package-lock.json  
// 윈도우에서는 'del /s /q node_modules'과 'del package-lock.json'를 이용해 삭제할 수 있습니다.  
$ npm i  
$ npm start  
```

![react_handsOn2](/WebTrack2/handsOnContents/images/react_handsOn2.png)

만약 위와 같은 결과가 나타났다면 성공하신 겁니다! 왜냐면 아직 AWS Amplify에 대한 설정을 진행하지 않았기 때문입니다. 그렇다면 다음을 따라 Amplify를 설정해주세요.

## AWS Amplify 설정하기

```
$ amplify init  
// 설정에 대한 설명은 하단의 사진을 참고해주세요.)  
$ npm start  
```

설정에 대해서는 다음의 사진을 참고해주세요.

![amplify_init](/WebTrack2/handsOnContents/images/amplify_init.png)

설정을 끝내고 'npm start'를 통해 프로젝트를 실행했을 때 아래와 같은 화면이 보인다면 성공하신 겁니다!

![amplify_cognito_success](/WebTrack2/handsOnContents/images/amplify_cognito_success.png)

하지만, 아직은 AWS 서비스를 붙이지 않았기 때문에 제대로 동작하지 않습니다. 회원가입을 하려고 해도 제대로 동작하지 않죠. 그렇기 때문에 이제는 AWS 서비스를 붙여보도록 하겠습니다. 다음을 따라 Amazon Cognito를 실행해주세요.

### 로그인, AWS Amplify CLI와 Amplify Framework로 Amazon Cognito 설정하기

```
$ amplify add auth  
// 설정에 대한 설명은 하단의 사진을 참고해주세요.)  
$ amplify push  
$ npm start  
```

설정에 대해서는 다음의 사진을 참고해주세요.

![amplify_add_auth](/WebTrack2/handsOnContents/images/amplify_add_auth.png)

![amplify_push](/WebTrack2/handsOnContents/images/amplify_push.png)

설정을 끝내고 'npm start'를 통해 프로젝트를 실행했을 때 정보를 입력해 이메일로 보안 코드를 받아 회원가입을 하고, 로그인이 가능하시다면 성공하신 겁니다!

> 이때 비밀번호는 영어 대문자, 소문자, 숫자, 특수문자를 포함해야 하다는 점을 명심해주세요!

방금 여러분은 로컬에서 회원가입, 로그인 등 복잡한 계정 관련 로직을 구현하신 겁니다! 물론 이미 작성된 코드가 있었지만, 그 코드를 살펴보더라도 React 문법에 익숙하시다면 특별히 어려운 점이 아니라는 것은 아실 수 있을 거에요!

이제 여러분은 로컬에서 로그인을 통해 공룡 게임을 즐기실 수 있습니다! 너무 신나지요! 이런 신남을 잠시 뒤로하고 아주 간단한 명령으로 우리의 공룡 게임을 다른 사람들과 공유해보도록 합시다!

### 웹 호스팅, AWS Amplify CLI와 Amplify Framework로 Amazon S3 설정하기

```
$ amplify add hosting  
// 설정에 대한 설명은 하단의 사진을 참고해주세요.)  
$ amplify publish  
// 배포에 성공하면 자동으로 해당 웹 페이지로 이동하게 되지만, 만약 이동되지 않았다면 실행 결과에 나오는 URL로 접속해 이동하세요.  
```

설정에 대해서는 다음의 사진을 참고해주세요.

![amplify_push](/WebTrack2/handsOnContents/images/amplify_add_hosting.png)

만약 동작이 성공했다면, 우리의 웹 어플리케이션이 호스팅된 것입니다! 아주 간단하지 않나요!? 간단한 명령으로 오늘 우리는 계정에 대한 처리와 웹 호스팅을 진행했습니다. 물론 서버의 동작없이 말이지요!

하지만, 오늘 우리가 진행한 건 AWS Amplify를 활용한 아주 간단한 사례라는 것을 명심하세요! Amplify를 이용한 더 다양한 예제는 정말 많습니다. 만약 심화적인 학습을 원하신다면 AWSKRUG에서 진행하는 amplify 핸즈온 세미나에 참여하시거나 다음의 자료를 참고해보시길 바랍니다!

[AWS Amplify 실습 자료(Cognito, S3, Lambda, AppSync)](https://awskrug.github.io/amplify-photo-gallery-workshop/)

### 사용했던 AWS 리소스 삭제

추가적으로 다음을 참고해 금일 진행한 세션의 AWS 서비스를 삭제하시면 이후 추과 과금에 대한 우려를 줄이실 수 있습니다. 더불어 다음 명령으로 삭제되지 않는 것들(s3 버킷등)이 있을 수 있으니 꼭 AWS 콘솔을 통해 자신의 인스턴스를 체크해보시길 바라겠습니다.

> 삭제에 대한 자료는 위에서 제공하는 [AWS Amplify 실습 자료(Cognito, S3, Lambda, AppSync)](https://awskrug.github.io/amplify-photo-gallery-workshop/)에 적혀있는 '리소스 삭제하기'의 일부를 인용했습니다.

```
$ amplify delete
```

Amplify는 우리가 이번 워크샵에서 프로비저닝했던 모든 리소스들을 삭제하는 작업을 할 수 있습니다 (프로비저닝된 CloudFormation 중첩스택을 삭제하는 작업을 시도합니다). 그러나 몇가지 리소스들은 수동으로 삭제해줘야 합니다. (삭제 거부)

### 삭제 작업이 실패한 일부 리소스를 수동으로 삭제하기
이제 CloudFormation stacks console로 이동해서 ‘DELETE FAILED’상태표시를 나타내는 몇개의 스택들을 클릭합니다. 삭제 실패된 원인과 무엇이 실패되었는지를 보실 수 있습니다.

CloudFormation이 스택들을 삭제하려고 할 때 인증된 사용자의 IAM역할이 있다고 하더라도 연동된 정책들이 남아 있다면 이 때문에 삭제 작업이 실패합니다. 하지만 이 시점에서 연동된 정책들 역시 모두 삭제 되어야하며 다른 스택 삭제 작업도 성공해야 합니다.

우선 AWS 콘솔을 통해 CloudFormation으로 접속합니다.

```
- 삭제실패된 스택을 선택합니다.
- Actions을 클릭합니다.
- 스택삭제를 선택합니다.
- Auth 역할을 클릭해제하고, 예, 삭제합니다를 클릭합니다.
```

성공적으로 삭제되었는지 확인합니다. 만약 삭제되지 않았다면, IAM Roles console으로 이동한 후, 해당역할( ‘photoalbums’로 시작합니다 )을 검색해서 선택 및 삭제해주세요.

Amplify가 생성한 S3 버킷은 자동으로 삭제되지 않습니다. 버킷을 삭제하려면 다음 단계를 따르세요 :

```
- S3 console로 이동합니다.
- 생성일자 열을 클릭하여 최근생성된 버킷들을 순차적으로 정렬합니다.
- 각 버킷별로 클릭하고 버킷 삭제 버튼을 클릭하여 삭제 확인을 하기위해 버킷명을 복사/붙여넣기합니다.
```

---

이상으로 모든 세션을 마치도록 하겠습니다. 수고하셨습니다.
