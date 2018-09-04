import React, { Component } from 'react'
import { Flex, Box } from 'rebass'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

class Header extends Component {
    render() {
        return (
            <Flex flex-direction="row">
                <Box p={3} width="200px">
                    <Link to="/">
                        <img src={Logo} width="100%" height="auto" />
                    </Link>
                </Box>
            </Flex>
        )
    }
}

export default Header
