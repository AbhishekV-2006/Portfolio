import { Router } from 'express'
import { listContacts, submitContact } from '../controllers/contactController.js'

const router = Router()

router.get('/', listContacts)
router.post('/', submitContact)

export default router
