import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  color: white;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <br />© 2023 Sangyun Lee, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
