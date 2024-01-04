import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProjectItem from './ProjectItem'
import { ProjectListItemType } from 'types/ProjectItem.types'

type ProjectListProps = {
  projects: ProjectListItemType[]
}

const ProjectListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const ProjectList: FunctionComponent<ProjectListProps> = function ({
  projects,
}) {
  return (
    <ProjectListWrapper>
        {projects.map(
          ({
              node: {id, fields: {slug}, frontmatter}
          }: ProjectListItemType) => (
            <ProjectItem {...frontmatter} link={slug} key={id} />
          ),
        )}
    </ProjectListWrapper>
  )
}

export default ProjectList