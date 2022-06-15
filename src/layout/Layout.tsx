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
  return (
    <StyledLayout>
      <div className="main-container"> {children}</div>
    </StyledLayout>
  )
}
export default Layout
