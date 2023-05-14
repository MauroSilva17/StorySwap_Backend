import express from 'express'
import cors from 'cors'
import { routesV1 } from './routes/v1'
import cookieParser from 'cookie-parser'
import { randomString } from './utils/randomString'
import session from 'express-session'

const application = async () => {
    const app = express()
    app.use(express.json())
    app.use(cookieParser())

    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true,
        }),
    )
    const sessionSecret: string = randomString()

    app.use(
        session({
            secret: sessionSecret,
            resave: false,
            saveUninitialized: false,
            unset: 'destroy',
            genid: (req) => {
                return randomString()
            },
            cookie: {
                // set to true in production
                secure: false,
                // set to true in production.
                httpOnly: false,
                maxAge: 24 * 60 * 60 * 1000,
            },
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
