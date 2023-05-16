import { Response, Request, NextFunction } from 'express'
import { randomString } from 'src/utils/randomString'

export const nonce = (req: Request, res: Response, next: NextFunction) => {
    const nonceCode = randomString()

    res.status(200).send(nonceCode)
    try {
        return res.json()
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Invalid Request' })
    }
}
