#### Tips ~ 서울 리전: ap-northeast-2

```
$ aws configure
```

### aws console에서 키 가져오기

```
Access Key: example
Private Key: example
```

#### Tips ~ 명령어 입력 전 콘솔에서 계정에 정책 추가(Console에서 인라인 정책 추가): IAM, S3(Amplify로 생성한 개발 관련 정보 저장 버킷), Cloud Formation

```
$ amplify init
```

#### Tips ~ 명령어 입력 전 콘솔에서 계정에 정책 추가(Console에서 인라인 정책 추가): IAM, Cognito(계정 관련), Lambda(계정 처리 관련), Cloud Formation

### AWS Cognito로 계정 관리하기

```
$ amplify add auth
$ amplify push
$ amplify publish
```

### AWS S3로 호스팅하기

```
$ amplify add hosting
$ amplify push
$ amplify pulish
```

### 사용했던 AWS 서비스 삭제

```
$ amplify remove auth
$ amplify remove hosting
```

## 주의! ~ 아직 Amplify 서비스가 완전하지 않아 일부 서비스가 작동하고 있을 수 있으니 VS Code에서 삭제 후에 서비스가 제대로 삭제되었는지 다시 한 번 확인해주세요! 추가적으로 과금이 발생할 수 있습니다!
