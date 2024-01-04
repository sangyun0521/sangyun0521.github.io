import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import ProjectList from 'components/Projects/ProjectList'
import { ProjectListItemType } from 'types/ProjectItem.types'
import { graphql } from 'gatsby'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: ProjectListItemType[]
    }
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ProjectsPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  }
}) {
  return (
    <Container>
      <Header />
      <GlobalStyle />
      <ProjectList projects={edges}/>
      <Footer />
    </Container>
  )
}

export default ProjectsPage

export const getProjectList = graphql`
  query getProjectList {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contents/projects/" } },
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`
