import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Box } from 'rebass'
import { Provider as StateProvider } from 'unstated'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

import Landing from './pages/Landing'
import Search from './pages/Search'
import Single from './pages/Single'
import Page404 from './pages/404'
import theme from './theme'

class App extends Component {
    render() {
        return (
            <StateProvider>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Box>
                            <Helmet>
                                <title>Search student properties in Oxford | movemaison</title>
                                <link
                                    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900"
                                    rel="stylesheet"
                                />
                            </Helmet>
                            <Switch>
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/search/:citySlug" component={Search} />
                                <Route
                                    exact
                                    path="/properties/:citySlug/:areaSlug/:propertySlug"
                                    component={Single}
                                />
                                <Route component={Page404} />
                            </Switch>
                        </Box>
                    </Router>
                </ThemeProvider>
            </StateProvider>
        )
    }
}

export default App
