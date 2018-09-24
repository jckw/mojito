import { Box } from 'rebass'
import styled from 'styled-components'
import { top, bottom, left, right } from 'styled-system'

export default styled(Box)`
    ${top}
    ${bottom}
    ${left}
    ${right}
    position: absolute;
`
