import { Request, Response, NextFunction } from 'express'

// Middleware to extract and validate session data
export const protect = (req: Request, res: Response, next: NextFunction) => {
    // Get session cookie from express-session
    const session = req.session.user

    if (!session) {
        return next(res.status(401).send('Not authorized'))
    }

    next()
}
