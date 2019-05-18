import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    text-align: center;
`

export const Layout = ({children}) => (
    <Wrap>
        {children}
    </Wrap>
)