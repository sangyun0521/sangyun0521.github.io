import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import Introduction from 'components/Main/Introduction'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <Header />
      <GlobalStyle />
      <Introduction />
      <Footer />
    </Container>
  )
}

export default IndexPage