import express from 'express'
import { generateSignMessage } from 'src/components/generateSignMessage'
import { sessionMiddleware } from 'src/components/middleware/sessionMiddleware'
import { walletSignIn } from 'src/components/walletSignIn'

export const routesV1 = () => {
    /**
     * /v1
     */
    const router = express.Router({ mergeParams: true })

    router.route('/auth/signin').post(walletSignIn)
    router.route('/auth/generateSignMessage').post(generateSignMessage)
    router.route('/sessionMiddleware').post(sessionMiddleware)

    return router
}
