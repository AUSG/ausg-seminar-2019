# [실습 3] AWS IAM 사용자 만들기

### IAM 사용자를 만듭니다
- 콘솔에 로그인 후 `서비스 찾기`에서 IAM을 검색, 클릭합니다
![](./images/screenshot-2.png)

- IAM 콘솔에 들어왔다면, `사용자` 메뉴로 이동합니다
![](./images/screenshot-3.png)

- `사용자 추가` 버튼을 클릭합니다
![](./images/screenshot-4.png)

- `사용자 이름`에 원하는 이름을 적어준 뒤 `프로그래밍 방식 액세스`와 `AWS Management Console 액세스`에 모두 체크해줍니다. `콘솔 비밀번호`는 `자동 생성된 비밀번호`를 선택해줍니다.
![](./images/screenshot-5.png)

- `기존 정책 직접 연결`을 선택 한 뒤 `AdministratorAccess`를 선택합니다.
![](./images/screenshot-6.png)

- `다음: 검토` 버튼을 클릭합니다
![](./images/screenshot-7.png)

- 입력한 항목들을 천천히 확인 한 뒤 `사용자 만들기` 버튼을 클릭합니다.
![](./images/screenshot-8.png)

- 성공했습니다! 해당 값 옆에 `표시`를 클릭하고 값들을 다른 곳에 복사해놓습니다.
![](./images/screenshot-9.png)

## 만든 사용자로 콘솔 로그인하기
- 파란 상자에 있던 링크로 접속합니다. 기존 로그인에 `계정:` 항목이 추가된 모습을 확인 할 수 있습니다.
![](./images/screenshot-13.png)
- 생성한 사용자의 `사용자 이름`과 `비밀번호`를 입력하면 로그인 할 수 있습니다.

## AWS CLI 설치/설정하기

- AWS CLI를 설치합니다 [클릭](https://aws.amazon.com/ko/cli/)
![](./images/screenshot-10.png)
![](./images/screenshot-11.png)

- 콘솔에 다음을 입력하면, 액세스 키 ID와 비밀 액세스 키를 넣을 수 있는 항목이 생깁니다.
```bash
$ aws configure
```
![](./images/screenshot-12.png)

- 등록이 완료되면, AWS CLI를 통해 모든 AWS의 자원을 조작 할 수 있습니다.

### 수고하셨습니다!
