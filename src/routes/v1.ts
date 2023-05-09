import express from 'express'
import { protect } from 'src/components/middleware/protect'
import { walletSignIn } from 'src/components/walletSignIn'

export const routesV1 = () => {
    /**
     * /v1
     */
    const router = express.Router({ mergeParams: true })

    router.route('/auth/signin').post(walletSignIn)

    // Contract calls protection route
    router.route('/protect').post(protect)

    return router
}
