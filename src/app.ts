import express from 'express'
import cors from 'cors'
import { routesV1 } from './routes/v1'

const application = async () => {
    const app = express()
    app.use(express.json())

    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true,
        }),
    )

    app.use('/v1', routesV1())

    app.get('/test', (req, res) => {
        res.json({
            success: true,
            message: 'This is working',
        })
    })
    return app
}
export default application
