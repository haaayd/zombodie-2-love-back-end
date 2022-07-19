import { Router } from 'express'
import * as conversationsCtrl from '../controllers/conversations.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', conversationsCtrl.create)
router.get('/:userId', checkAuth, conversationsCtrl.show)
router.get('/find/:firstId/:secondId', checkAuth, conversationsCtrl.findChat)
export { router }
