import { Request, Response, NextFunction } from 'express'

export const walletAuth = (req: Request, res: Response, next: NextFunction) => {
    // Mock response
    return res.status(200).send('connected')
}
