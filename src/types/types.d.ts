export interface Project {
  id: number
  title: string
  description: string
}

export interface Experience {
  id: number
  title: string
  date: string
  role: string
  description: string
  projects: Project[]
}
