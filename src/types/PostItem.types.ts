export type PostFrontmatterType = {
  title: string
  date: string
  category: string
}

export type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}

