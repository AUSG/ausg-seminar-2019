import React from 'react'
import { storiesOf } from '@storybook/react'
import {Layout, PlayersList, PlayersListLoader, Runner} from '../components'
import {TRexContainer, RankingContainer} from '../containers'
import App from '../App'

storiesOf('Components|Layout/Layout', module)
.add('Default', () => <Layout />)

storiesOf('Components|PlayersList/PlayersList', module)
.add('Default', () => <PlayersList player={['1', '2']}/>)

storiesOf('Components|PlayersList/PlayersListLoader', module)
.add('Default', () => <PlayersListLoader />)

storiesOf('Components|Runner/Runner', module)
.add('Default', () => <Runner />)

storiesOf('Containers|T-Rex', module)
  .add('Default', () => <TRexContainer />)
  
storiesOf('Containers|Ranking', module)
.add('Default', () => <RankingContainer />)

storiesOf('App|App', module)
  .add('Default', () => <App />)
