import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from 'pages/HomePage'

import './App.scss'

const App = () => {
  return (
    <div className="app">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route
            path="/sign-in"
            render={() => (profile ? <Redirect to="/" /> : <SignInPage />)}
          /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

const NotFoundPage = () => (
  <div>
    <h1>404 Page</h1>
  </div>
)

export default App
