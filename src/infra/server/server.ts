import application from '../../app'
import Environment from '../../config/environment'

const PORT = Environment.express.port || 8000

const server = async () => {
    const app = await application()

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}

export default server
