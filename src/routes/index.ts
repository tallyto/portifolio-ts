import {Router} from 'express'
import pages from './pages'

const router = Router()

router.use(pages)

export default router