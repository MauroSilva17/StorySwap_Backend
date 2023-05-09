import { Request, Response, NextFunction } from 'express'
import { randomString } from 'src/utils/randomString'

// Middleware to extract and validate session data
export const protect = (req: Request, res: Response, next: NextFunction) => {
    // Fetch Client cookie and Server stored cookie
    const clientSession = req.cookies._session
    const serverSession = req.sessionID
    // Decode client session URL
    const session = decodeURIComponent(clientSession)
    // Check if Server side cookie string exists on client side string
    const hasSession = session.includes(serverSession)

    if (!hasSession) {
        return res.status(401).json({ error: 'Invalid session' })
    }

    res.status(200).send('authorized')
}
