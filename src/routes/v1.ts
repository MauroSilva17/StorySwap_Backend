import express from 'express'
import { walletAuth } from 'src/components/walletAuth'

export const routesV1 = () => {
    /**
     * /v1
     */
    const router = express.Router({ mergeParams: true })

    router.route('/auth').post(walletAuth)

    return router
}
