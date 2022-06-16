import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.section`
  position: relative;
  width: 100%;
`
interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return <StyledLayout>{children}</StyledLayout>
}
export default Layout
