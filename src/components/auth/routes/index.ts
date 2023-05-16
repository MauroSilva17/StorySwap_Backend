import express, { NextFunction, Request, Response } from 'express'
import { protect } from '@auth/middleware/protect'
import { walletSignIn } from '@auth/walletSignIn'
import { nonce } from '@auth/nonce'

const router = express.Router({ mergeParams: true })
/**
 * /v1/auth
 */

router.route('/signin').post(walletSignIn)
router.route('/nonce').get(nonce)
// Contract calls protection route
router.route('/').get(protect, (req: Request, res: Response, next: NextFunction) => res.status(200).send())
export default router
