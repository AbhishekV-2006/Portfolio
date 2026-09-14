import { config } from '../config/env.js'
import { readJson } from './jsonStore.js'

export function getProjects() {
  return readJson(config.projectsFile)
}

export async function getProjectById(id) {
  const projects = await getProjects()
  return projects.find((project) => project.id === id)
}
