import express from 'express'
import B2BTransaction from '../controllers/transactionController.js'
import testPage from '../controllers/TestPage/testPage.js'

const router = express.Router()

router.post('/mpesab2b', B2BTransaction)

router.get('/', testPage)


export default router