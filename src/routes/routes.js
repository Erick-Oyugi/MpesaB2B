import express from 'express'
import B2BTransaction from '../controllers/transactionController.js'

const router = express.Router()

router.post('/mpesab2b', B2BTransaction)


export default router