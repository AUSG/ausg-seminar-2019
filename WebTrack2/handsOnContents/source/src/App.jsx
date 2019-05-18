import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify'

import {TRexContainer} from './containers'
import aws_exports from './aws-exports'
Amplify.configure(aws_exports)

const App = () => (
  <Router>
    <Grid padded>
      <Grid.Column>
        <Route path="/" exact component={TRexContainer}/>
      </Grid.Column>
    </Grid>
  </Router>
)

export default withAuthenticator(App, {includeGreetings: true})