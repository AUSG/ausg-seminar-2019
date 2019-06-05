# create-react-app이란?

- 별도의 설정 없이 react를 쉽게 시작할 수 있게끔, 새 react 프로젝트를 생성할 수 있게끔 해 주는 도구!
- [create-react-app](https://github.com/facebook/create-react-app)

# create-react-app을 이용해서 새 React 프로젝트 생성하기

- 저희가 만들 프로젝트의 루트 디렉토리를 만들고, 그 안에 create-react-app을 이용해 react app을 만들어보겠습니다. 일단 다음과 같은 프로젝트 구조로 만들 겁니다.

```
ausg-seminar
  |-- image-to-text
```

- 아래 명령어를 입력해서 프로젝트 구조를 만들어봅시다.

```bash
# 프로젝트 생성을 원하는 위치로 이동
$ mkdir ausg-seminar
$ cd ausg-seminar
$ npx create-react-app image-to-text
```

- 다음과 같이 수행되고 있다면 성공적으로 패키지를 설치하신 겁니다!

![img_1](./images/1.png)

- 프로젝트 생성을 기다리면, 다음과 같이 성공적으로 react 프로젝트가 성공적으로 생성된 것을 보실 수 있습니다.

![img_2](./images/2.png)

- 해당 프로젝트를 run 시켜보도록 하겠습니다.
```bash
$ cd image-to-text

$ npm run start
혹은
$ yarn start
```

- 다음과 같은 메세지가 보이신다면 성공적으로 react 프로젝트가 run되고 있는 것입니다. 이제 브라우져로 이동해서 `localhost:3000`으로 이동해봅시다.

![img_3](./images/3.png)

- react가 local 환경에서 잘 띄워지고 있군요! 이제 이를 이용해서 개발할 차례입니다 :)

![img_4](./images/4.png)

# Front-end 개발하기

- 이제 본격적으로 개발을 해보도록 하겠습니다. 말씀드렸다시피 이미지의 url을 받아, 해당 이미지 내 텍스트들을 추출해내는 프로젝트를 만들어 보려고 합니다. 그 전에, react에 대한 이해가 조금 필요합니다. 같이 ppt를 보시죠!

![2000 years later](https://i.ytimg.com/vi/CM4Al4gzSoA/hqdefault.jpg)
(React 설명중...)

- react에 대해 어느정도 이해가 되셨으리라 믿고, 이제 본격적으로 개발해볼건데요. 저희가 변경하거나 추가할 파일은 딱 2개뿐입니다.  
먼저, 프로젝트의 `src` 폴더 내에 `components` 폴더를 만들어 그 안에 `Form.jsx` 컴포넌트를 다음과 같이 작성한 후 저장합니다.

![img_5](./images/5.png)

**ausg-seminar/image-to-text/src/components/Form.jsx**

```javascript
import React, { useState } from 'react'

export default function Form(props) {
  const [imageURL, setImageURL] = useState('')
  
  const onURLChanged = (e) => {
    setImageURL(e.target.value)
  }

  const onSubmitButtonClicked = () => {
    // TODO: call server
    props.getResult(imageURL)
  }
  
  return (
    <>
      <input
        placeholder='url'
        value={imageURL}
        onChange={this.onURLChanged}
      />
      <button onClick={this.onSubmitButtonClicked}>
        submit
      </button>
    </>
  )
}
```

- 완료하셨다면, 이제 `image-to-text/src/App.js` 로 이동해서, **기존의 `App.js` 내용을 모두 지운 후에 다음과 같이 입력합니다.**

**ausg-seminar/image-to-text/src/App.js**

```javascript
import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')
  
  const setLoadingStatus = (status) => {
    setIsLoading(status)
  }

  const getResult = (result) => {
    setResult(result)
  }
  
  return (
    <div className='App'>
      {isLoading ?
        <div>Loading....</div> :
        <Form
          getResult={this.getResult}
          setLoadingStatus={this.setLoadingStatus}
        />
      }
      {result &&
        <div>{result}</div>
      }
    </div>
  )
}
```

- 브라우져의 `localhost:3000`를 보시면 다음과 같이 변경되신 걸 보실 수 있습니다. 입력하여 바뀐 Form 내부의 state인 `imageURL`이 `App.js`가 props로 전달한 `getResult` 함수를 통해 `App.js`의 state인 `result`가 바뀌고 있네요.

![img_6](./images/6.png)

## react 프로젝트 생성 및 설정을 모두 마쳤습니다!

- 구동중인 react 프로젝트는 중지시켜 주세요.
  - 터미널에서 ctrl+c로 중지하면 됩니다.

- 일단 프론트엔드의 틀은 어느 정도 만들어졌습니다. 서버를 완성한 후에, 서로 통신할 수 있게 되었을 때 react 프로젝트를 완성시키려고 합니다.

- 이제 [Express 프로젝트 생성하기](../3_express/README.md)로 넘어갑시다!
