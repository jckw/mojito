import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Box, Provider } from 'rebass'

import Header from './components/Header'
import Home from './pages/Home'
import Property from './pages/Property'
import Page404 from './pages/404'
import Agency from './pages/Agency'
import theme from './theme'

class App extends Component {
    render() {
        return (
            <Provider theme={theme}>
                <Router>
                    <Box>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/property/:id" component={Property} />
                            <Route path="/agency/:id" component={Agency} />
                            <Route component={Page404} />
                        </Switch>
                    </Box>
                </Router>
            </Provider>
        )
    }
}

export default App
