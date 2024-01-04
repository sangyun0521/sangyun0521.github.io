import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'
import Header from 'components/Posts/Header'
import PostList from 'components/Posts/PostList'
import { PostListItemType } from 'types/PostItem.types'

type PostsProps = {
    data: {
        allMarkdownRemark: {
            edges: PostListItemType[]
        }
    }
}

const PostsPage: FunctionComponent<PostsProps> = function ({
    data: {
      allMarkdownRemark: { edges },
    }
}) {
  return (
    <Template>
      <Header />
      <PostList posts={edges} />
    </Template>
  )
}

export default PostsPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contents/posts/" } },
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD.")
            category
          }
        }
      }
    }
  }
`