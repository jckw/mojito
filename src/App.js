import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Flex } from 'rebass'
import { Provider as StateProvider } from 'unstated'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

import Home from './pages/Home'
import Page404 from './pages/404'
import theme from './theme'
import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <StateProvider>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Flex flexDirection="column" css={{ minHeight: '100vh' }}>
                            <Helmet>
                                <title>Search student properties in Oxford | movemaison</title>
                                <link
                                    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900"
                                    rel="stylesheet"
                                />
                            </Helmet>
                            <Header />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route component={Page404} />
                            </Switch>
                        </Flex>
                    </Router>
                </ThemeProvider>
            </StateProvider>
        )
    }
}

export default App
