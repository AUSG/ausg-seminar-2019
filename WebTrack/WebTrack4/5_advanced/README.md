# 수고하셨습니다!

- 목표했던 프로젝트를 완성했네요. 축하합니다!! 프로젝트의 전체 소스코드는 [AUSG-THISISTEXT repository](https://github.com/ravieeeee/AUSG-THISISTEXT)에 있습니다.

- 이제 끝일까요? 아닙니다 :) 더 해볼 수 있는 것들이 많은데요. 제가 생각하기에 더 발전시킬 수 있는 것들을 말씀드려 볼게요. 물론 이외에도 입맛에 맞게 프로젝트를 바꿀 방법들은 많을 겁니다.

# 기술적 advanced

- `create-react-app` 없이 스스로 configuration을 잡아보면서 react 프로젝트를 만들어봅시다!
  - 첫 시작하기엔 좋지만 필요하지 않은 것들도 포함되어 있어 비교적 무겁습니다. 
  - 또, 스스로 만들면 많은 공부와 경험이 되더라구요.

- [extracting component](https://reactjs.org/docs/components-and-props.html)
  - 모든게 중첩되어 있어 바꾸기 어렵고, 각각의 파트를 `재사용`하기 어려운 컴포넌트는 React를 개발 철학과는 맞지 않으며 실제로 개발시에도 효율적이지 않습니다.

- function component & Hooks
  - 필요성을 말씀드리고 먼저 사용하게끔 하는 것 보다는, 스스로 필요성을 느낄 때 쓰시는 게 좋다는 생각에 소개하지 않았습니다. 그래도 이런게 있다는 것을 알아두시는 건 좋은 것 같아요!
  - [function component](https://reactjs.org/docs/components-and-props.html)
  - [Hook](https://reactjs.org/docs/hooks-intro.html)

- state management
  - [MobX](https://mobx.js.org/)
  - [Redux](https://redux.js.org/)

- typescript, styled-component
  - 규모가 커지면 typescript의 필요성을 자연스레 느끼실 거라 생각합니다.
  - [styled-component](https://www.styled-components.com/)

# 기능적 advanced

- 이미지를 사용자로부터 받아 s3에 업로드한 후, 트리거 된 람다가 Rekognition의 detectText 작업을 수행하는 다음과 같은 구조로 만들어보는 건 어떨까요.

![structure example](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2017/02/10/o_rekognition_2-300x233.gif)
