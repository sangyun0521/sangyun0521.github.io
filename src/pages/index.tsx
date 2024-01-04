import React, { FunctionComponent } from 'react'
import Introduction from 'components/Main/Introduction'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'

type ProfileImageProps = {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const IndexPage: FunctionComponent<ProfileImageProps> = function ({
  data: {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) {
  return (
    <Template>
      <Introduction profileImage={gatsbyImageData}/>
    </Template>
  )
}

export const getProfileImage = graphql`
  query getProfileImage {
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`


export default IndexPage