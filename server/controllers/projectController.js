import { getProjectById, getProjects } from '../models/projectModel.js'

export async function listProjects(request, response, next) {
  try {
    response.json(await getProjects())
  } catch (error) {
    next(error)
  }
}

export async function showProject(request, response, next) {
  try {
    const project = await getProjectById(request.params.id)

    if (!project) {
      return response.status(404).json({ error: 'Project not found' })
    }

    response.json(project)
  } catch (error) {
    next(error)
  }
}
