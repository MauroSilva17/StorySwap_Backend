import { Request, Response, NextFunction } from 'express'

// Middleware to extract and validate session data
export const protect = (req: Request, res: Response, next: NextFunction) => {
    // Get session cookie from express-session
    const session = req.session.user

    if (!session) {
        return next(new Error('Not authorized'))
    }

    // next()

    // Testing response
    res.status(200).send('authorized')
}
