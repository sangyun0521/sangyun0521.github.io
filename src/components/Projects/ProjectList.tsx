import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProjectItem from './ProjectItem'
import * as projects from './Projects'

const ProjectListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const ProjectList: FunctionComponent = function () {
  return (
    <ProjectListWrapper>
        <ProjectItem {...projects.POKEMON_GENERATOR}></ProjectItem>
        <ProjectItem {...projects.VISUAL_PROMPT_TUNING}></ProjectItem>
        <ProjectItem {...projects.IGRIM}></ProjectItem>
        <ProjectItem {...projects.JUBGING}></ProjectItem>
        <ProjectItem {...projects.CAU_ALUMNI_NETWORK}></ProjectItem>
        {/* <ProjectItem {...projects.HOW_MANY_SEATS}></ProjectItem> */}
    </ProjectListWrapper>
  )
}

export default ProjectList