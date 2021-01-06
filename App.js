import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>

      <Route exact path="components/Home.js" component={Home} />
    </Switch>
  </BrowserRouter>
)

// const Home = () => {
//   return <h1>Hello world</h1>
// }

export default App