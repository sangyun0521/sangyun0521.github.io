import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import ProfileImage from 'components/Main/ProfileImage'
import CategoryList from 'components/Main/CategoryList'
import Introduction from 'components/Main/Introduction'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  MachineLearning: 2,
}

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