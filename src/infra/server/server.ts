import application from '../../app'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.SERVER_PORT as string

const server = async () => {
    const app = await application()

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}

export default server
