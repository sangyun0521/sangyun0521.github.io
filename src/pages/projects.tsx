import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import ProjectList from 'components/Projects/ProjectList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const PostsPage: FunctionComponent = function () {
  return (
    <Container>
      <Header />
      <GlobalStyle />
      <ProjectList />
      <Footer />
    </Container>
  )
}

export default PostsPage