import { Router } from 'express'
import { listProjects, showProject } from '../controllers/projectController.js'

const router = Router()

router.get('/', listProjects)
router.get('/:id', showProject)

export default router
