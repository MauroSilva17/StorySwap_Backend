import express, { NextFunction, Request, Response } from 'express'
import authRoutes from '@auth/routes'

const router = express.Router({ mergeParams: true })

/**
 * /v1
 */

router.use('/auth', authRoutes)
// Contract calls protection route
export default router
