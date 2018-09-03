import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Flex, Provider } from 'rebass'
import { Provider as StateProvider } from 'unstated'

import Header from './components/Header'
import Home from './pages/Home'
import Page404 from './pages/404'
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
