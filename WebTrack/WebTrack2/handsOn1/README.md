# [실습 1] 본격적인 실습 시작! 그 전에 환경 설정과 React를 이용한 프로젝트를 만들어보자!

우리는 지금부터 아주 기본적인 실습을 진행하도록 하겠습니다. 사실 Node를 다뤄본 웹 개발자에게는 기본적일 수도 있지만, 인프라나 다른 직군이시라면 그렇게 기본적이지 않을 수도 있습니다.

하지만, 핸즈온 세미나의 매력은 이해하지 못하고 그냥 따라하는 것이기 때문에 지레 겁부터 먹으실 필요는 없습니다! 어차피 자료는 공유될 것이기 때문에 댁에 돌아가셔서 다시 한 번 해보시면 됩니다!

## 우리는 지금 기본적은 개발 환경이 갖춰져 있나??

개발을 하기 전에 가장 스트레스 받는 일이자 가장 기초적인 일은 바로 개발 환경을 구성하는 것입니다. 그렇기 때문에 다음을 따라 세션을 진행하기 위한 여러분의 개발 환경이 제대로 갖춰졌는지 확인하세요.

우선 우리는 VS Code의 터미널을 사용할 것입니다. 그렇기 때문에 다음을 통해 VS Code를 다운로드 하세요!

[VS Code 공식 문서](https://code.visualstudio.com/)

```
세션 진행자의 개발 환경

$ node --version // 8.10.0 이상 필요
v12.1.0
$ npm --version // 5.2 이상 필요
6.9.0
$ aws --version
aws-cli/1.16.156 Python/2.7.15 Darwin/18.5.0 botocore/1.12.146
```

별다른 오류 없이 위와 비슷한 결과가 나오시나요? 만약 그게 아니시라면 직접 해결해보시거나 손을 들고 주변의 스태프에게 도움을 요청하세요! 이 다음부터는 환경 설정에 대한 설명은 진행하지 않기 때문입니다.

> 더불어 node와 npm의 버전은 상황 혹은 프로젝트에 따라 달라질 수 있습니다. 이를 위해 실사용에서는 [nvm](https://github.com/nvm-sh/nvm#readme)과 같은 버전 관리자를 따로 설치하는 것이 좋습니다.

## 본격적인 세션 진행 전 참고사항

이번 세션에서는 앞에서 강연자가 말하는 방식이 아닌 여러분이 직접 진행하는 방식으로 진행됩니다. 그렇기 때문에 각 단계에서 필요한 코드를 제공하고 있습니다. 이 레포지토리의 **WebTrack2/handsOn1-1**에서는 Create React App을 입력하여 생성한 프로젝트를, **WebTrack2/handsOn1-2**에서는 Create React App으로 생성한 프로젝트에서 Amplify를 사용하는 예제를 제공합니다.

그렇기 때문에 직접 핸즈온을 진행하지 않으시고 코드만을 참고하시거나 첫 번째 실습을 놓치셨어도 다음 실습을 진행하기에 큰 영향이 없으니 이 점을 참고하시어 세미나를 진행해주시기 바랍니다.

또한, 질문 혹은 이슈가 발생하신다면 손을 들어 스태프에게 도움을 요청하세요! 여러분들을 돕기 위해 늦은 시간에도 이 자리에 있는 것이니까요!

이제 본격적으로 세션을 진행해보도록 하겠습니다!

## AWS Amplify CLI 설치와 유저 생성

우선 터미널에서 다음의 명령으로 AWS Amplify를 다운로드 하시고 제대로 설치되었는지 확인해주세요(버전이 제대로 출력된다면 설치된 것입니다).

```
$ npm install -g @aws-amplify/cli
(...)
$ amplify --version
1.6.8
```

설치가 완료되었으면 AWS CLI를 통해 로컬에 Default 계정을 설정하도록 하겠습니다. 우선 AWS Console에 root 계정으로 로그인하신 후 다음을 따라 유저를 생성해주세요!

> 만약 이미 실습용 유저가 있으시고, Access Key와 Secret Access Key를 알고 계신다면 과정을 생략하셔도 좋습니다!

![iam_add_user1](/images/iam_add_user1.png)

![iam_add_user2](/images/iam_add_user2.png)

![iam_add_user3](/images/iam_add_user3.png)

여기까지 진행한 후 나오는 페이지에서 유의해야 할 점은 AWS Access Key와 Secret Access Key를 기억해야 한다는 점입니다. 두 개의 Key는 암호화되어 제공되기 때문에 육안으로 외우는 건 불편하겠죠. 그렇기 때문에 별도의 csv 파일이나 개인의 공간에 Key에 대한 정보를 저장하셔야 합니다.

> 더불어 Key를 잊지 않기 위해 별도로 Key에 대한 정보를 저장하신다면 취급에 주의해야 한다는 점을 명심하세요!

![iam_edit_user1](/images/iam_edit_user1.png)

![iam_edit_user2](/images/iam_edit_user2.png)

여기서 주의 깊게 보시면 '인라인 정책 추가'를 찾으실 수 있습니다. 해당 버튼을 눌러 다음 사진과 같이 인라인 정책 수정 페이지로 이동해주세요!

![iam_edit_user3](/images/iam_edit_user3.png)

![iam_edit_user4](/images/iam_edit_user4.png)

![iam_edit_user5](/images/iam_edit_user5.png)

위의 그럼에서는 CloudFront에 대해서만 설정했지만, 아래의 사진을 보고 다른 서비스들의 권한도 추가해주시면 됩니다! 이 세션에서는 모든 리소스에 대한 권한을 설정하지만, 실제로 제품을 사용할 때는 원하는 권한에 대해서만 설정해서 사용하시는 것이 바람직합니다.

![iam_edit_final](/images/iam_edit_user_final.png)

이제 권한이 설정된 유저를 만들었으니 다음의 명령으로 Default AWS 계정을 등록하세요(만약 이미 등록하셨다면 생략하시면 됩니다).

```
$ aws configure
계정의 AWS Access Key 입력: ********************
계정의 AWS Secret Access Key 입력: ********************
계정의 region 입력: ap-northeast-2
// 4번째 입력인 output에 대한 입력은 생략합니다.
$ aws configure list
```

![aws_configure](/images/aws_configure.png)

마지막 명령을 실행하면 다음과 같은 모습으로 터미널에 나타납니다. 다음과 같은 결과가 나오셨다면 다음으로 넘어갑시다(서울 리전은 'ap-northeast-2')!

```sh
      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile                <not set>             None    None
access_key     ******************** shared-credentials-file
secret_key     ******************** shared-credentials-file
    region           ap-northeast-2      config-file    ~/.aws/config
```

만약 AWS Access Key와 Secret Access Key를 확인하는 법을 모르신다면 손을 들어 스태프에게 문의하시거나 정리가 잘 되어있는 다음의 문서에서 **액세스 키 관리(콘솔)**를 참고해주세요!

[IAM 사용자의 액세스 키 관리](https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/id_credentials_access-keys.html)

이제 이번 세미나에서 AWS Console을 사용하는 일은 없을 것입니다. 물론 결과를 확인한다거나 오류가 생긴다면 확인하겠지만, 앞으로 진행할 프로세스는 오직 로컬에서 진행되기 때문에 별도로 인프라를 신경쓰지 않아도 되기 때문입니다.

다음으로 넘어가서 React와 CRA를 이용해 프로젝트를 만들어보겠습니다!

## CRA를 이용해 Web Application Front-end 프로젝트 구성하기

CRA는 이론에서 말한 것처럼 React 보일러 플레이트의 일종입니다. 여기서는 이 CRA를 사용하여 가장 기본적인 페이지를 만들 것입니다.

```
$ npx create-react-app ausg_amplify
(...)
$ cd ausg_amplify
$ rm -rf node_modules
$ npm i
$ npm start
```

![react_handsOn1](/images/react_handsOn1.png)

위와 같은 페이지가 정상적으로 보이시나요? 그렇다면 성공하신 겁니다! 어떤 분들께는 너무 쉬웠을 수 있지만, 여기까지 하셨으면 이제 React 프로젝트를 '시작'해보실 수 있을 거에요! 여기서는 자세하게 다루지 않지만, 만약 여러분이 React에 관심이 있으시다면 자세한 자료들을 찾아 학습해보시는 것도 좋을 것 같습니다! :)

이제까지의 예제 결과는 [WebTrack2/handsOn1-1](/WebTrack2/handsOn1-1)에서 확인하실 수 있습니다.

---

이제 어느정도 어떤 프로세스로 앱을 만드는지를 아셨다면, 본격적으로 AWS Amplify를 사용해 우리의 웹 어플리케이션에서 클라우드 서비스를 이용해보도록 하겠습니다. 물론 백엔드에 대한 지식은 없이요!

만약 준비가 되셨다면 [다음 실습](/WebTrack2/handsOn2)을 눌러 실습을 진행해보세요!
