export type TechnologiesResponseType = {
  message: string
  technologies: NestedOptions[]
  status: number
}

export type LanguagesResponseType = {
  message: string
  languages: NestedOptions[]
  status: number
}

export type ProjectsResponseType = {
  message: string
  projects: IProjectData[]
  status: number
}
