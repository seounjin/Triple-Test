import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.section`
  position: relative;
  width: 100%;
  .main-container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
`
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <StyledLayout>{children}</StyledLayout>
}
export default Layout
