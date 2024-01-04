import { IGatsbyImageData } from 'gatsby-plugin-image'

export type ProjectFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export type ProjectListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: ProjectFrontmatterType
  }
}
