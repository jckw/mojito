import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Flex, Provider } from 'rebass'
import { Provider as StateProvider } from 'unstated'

import Header from './components/Header'
import Home from './pages/Home'
import Property from './pages/Property'
import Page404 from './pages/404'
import Agency from './pages/Agency'
import theme from './theme'

class App extends Component {
    render() {
        return (
            <StateProvider>
                <Provider theme={theme}>
                    <Router>
                        <Flex flexDirection="column" css={{ minHeight: '100vh' }}>
                            <Header />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/property/:id" component={Property} />
                                <Route path="/agency/:id" component={Agency} />
                                <Route component={Page404} />
                            </Switch>
                        </Flex>
                    </Router>
                </Provider>
            </StateProvider>
        )
    }
}

export default App
